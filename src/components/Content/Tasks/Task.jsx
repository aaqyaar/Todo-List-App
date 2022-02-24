import React from "react";
import {
  HiCheckCircle,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";

const Task = (props) => {
  const { task, isTaskCompleted, id, isTaskDeleted } = props;
  const handleClick = () => {
    isTaskCompleted(id);
  };
  const handleDelete = () => {
    isTaskDeleted(id);
  };

  return (
    <div
      id="task"
      className="card-white flex w-full max-w-lg items-center justify-between border-l-4 border-blue-500"
    >
      <div id="main-left-side">
        <div id="category">
          <h5 className="font-openSans font-semibold text-blue-600">
            {task.category}
          </h5>
        </div>
        <div id="content" className="mt-1">
          <h1 className="font-poppins text-xl font-semibold tracking-wider">
            {task.title}
          </h1>
          <div className="mt-1 flex items-center gap-1">
            <HiOutlineCalendar className="h-5 w-5 text-gray-700" />
            <span className="text-md text-gray-700">{task.date}</span>
          </div>
          <div className="-mb-2 ml-1">
            <span className="font-poppins font-semibold capitalize text-yellow-600">
              {task.status}
            </span>
          </div>
        </div>
      </div>
      <div id="main-right-side" className="flex flex-col gap-3">
        <HiCheckCircle
          className="h-6 w-6 cursor-pointer text-green-500"
          onClick={handleClick}
        />
        <HiOutlineTrash
          className="h-6 w-6 cursor-pointer  text-red-500"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default Task;
