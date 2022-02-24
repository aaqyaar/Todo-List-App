import { useState, useEffect } from "react";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import TaskComplete from "./TaskComplete";
import Empty from "../../../Content/Tasks/Empty";
import Filter from "../../../Content/Tasks/Filter";
function TaskCompleted(props) {
  const data = props.tasks.filter(
    (task) => task.status.toLowerCase() == "completed"
  );

  const [category, setCategory] = useState("All");
  const [date, setDate] = useState("");

  const changeCategory = (category) => {
    setCategory(category);
  };
  const changeDate = (date) => {
    setDate(date);
  };
  const filterByCategory = data.filter((task) =>
    category === "All"
      ? task
      : task.category.toLowerCase() === category.toLowerCase()
  );
  const filteredTasks = filterByCategory.filter((task) =>
    date === "" ? task : date === task.date
  );
  props.getLength(filteredTasks.length);

  const isUndoTask = (id) => {
    props.onUndo(id);
  };
  const isCompletedTaskDeleted = (id) => {
    props.onDeleteTask(id);
  };

  return (
    <section id="completed" className="py-1">
      <div id="right" className="mb-2">
        <div className="flex items-center justify-center gap-2 border-b-2 border-gray-100 pb-2">
          <HiOutlineClipboardCheck className="h-6 w-6 text-yellow-500" />
          <h1 className="font-openSans  text-xl font-semibold tracking-wider line-through">
            Completed Tasks
          </h1>
        </div>

        <div className="mx-2 mt-2 flex items-center gap-6">
          <h1 className="text-lg font-semibold tracking-wide text-gray-600">
            Filter By
          </h1>

          <div>
            <Filter
              onChangeCategory={changeCategory}
              onChangeDate={changeDate}
            />
          </div>
        </div>
      </div>
      <hr />

      <div>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskComplete
              task={task}
              key={task.id}
              id={task.id}
              isUndoTask={isUndoTask}
              deleteCompleted={isCompletedTaskDeleted}
            />
          ))
        ) : (
          <Empty data="No Tasks Completed" />
        )}
      </div>
    </section>
  );
}

export default TaskCompleted;
