import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Empty from "./Empty";
import Filter from "./Filter";
import Task from "./Task";

function Tasks(props) {
  const [category, setCategory] = useState("All");
  const [date, setDate] = useState("");
  const tasks = props.data.filter(
    (task) => task.status.toLowerCase() === "in progress"
  );
  const changeCategory = (category) => {
    setCategory(category);
  };
  const changeDate = (date) => {
    setDate(date);
  };
  const filterByCategory = tasks.filter((task) =>
    category === "All"
      ? task
      : task.category.toLowerCase() === category.toLowerCase()
  );
  const filteredTasks = filterByCategory.filter((task) =>
    date === "" ? task : date === task.date
  );

  return (
    <div
      id="tasks"
      className="relative flex flex-col items-center justify-center px-4"
    >
      {props.showForm ? (
        ""
      ) : (
        <div
          id="addBtn"
          className="-mt-8 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-blue-500 shadow-sm shadow-indigo-50 transition hover:-translate-y-1"
        >
          <button onClick={props.onShowForm} className="">
            <AiOutlinePlus
              onClick={props.onShowForm}
              className="h-8 w-8 text-white "
            />
          </button>
        </div>
      )}

      <div className="font-poppins mb-3 mt-5 flex w-full max-w-lg flex-col items-center justify-between gap-10 border-b-2 pb-1 sm:flex-row">
        <h1 className=" text-left text-2xl font-semibold tracking-wider">
          Tasks
        </h1>
        <div>
          <Filter onChangeCategory={changeCategory} onChangeDate={changeDate} />
        </div>
      </div>
      <div
        id="listOfTasks"
        className="flex w-full flex-col items-center justify-center"
      >
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <Task
              task={task}
              key={task.id}
              id={task.id}
              isTaskCompleted={props.isTaskCompleted}
              isTaskDeleted={props.isTaskDeleted}
            />
          ))
        ) : (
          <Empty data="No Tasks in The App" />
        )}
      </div>
    </div>
  );
}

export default Tasks;
