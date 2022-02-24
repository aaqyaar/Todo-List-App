import React from "react";
import { HiOutlineCalendar, HiReply, HiOutlineTrash } from "react-icons/hi";

const TaskComplete = ({ task, isUndoTask, id, deleteCompleted }) => {
  const isTaskUndo = () => {
    isUndoTask(id);
  };
  const deleteCompletedTask = () => {
    deleteCompleted(id);
  };
  return (
    <div
      id="task"
      className="card-white mx-4 flex w-full max-w-sm items-center justify-between border-l-4 border-blue-500 "
    >
      <div id="main-left-side" className="mx-1 w-full ">
        <div className="flex items-center justify-between">
          <div id="category" className="line-through opacity-70">
            <h5 className="font-openSans font-semibold text-blue-600">
              {task.category}
            </h5>
          </div>
          <div className="mt-1 flex items-center gap-1 line-through opacity-70">
            <HiOutlineCalendar className="h-5 w-5 text-gray-700" />
            <span className="text-md text-gray-700">{task.date}</span>
          </div>
        </div>
        <div id="content" className="line-through opacity-70">
          <div className="">
            <h1 className="font-poppins text-xl font-semibold tracking-wider">
              {task.title}
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="ml-1">
            <span className="font-poppins font-semibold capitalize text-yellow-600">
              {task.status}
            </span>
          </div>
          <div className="flex gap-1">
            <button
              className="flex cursor-pointer items-center  rounded-full border border-blue-500 px-2 py-1 shadow-md shadow-red-50"
              onClick={isTaskUndo}
            >
              <HiReply className="inline h-4 w-4" />
              <span className="mx-1">Undo</span>
            </button>
            <button
              className="flex cursor-pointer items-center  rounded-full bg-red-500 px-2 py-1 text-white shadow-md"
              onClick={deleteCompletedTask}
            >
              <HiOutlineTrash className="inline h-4 w-4" /> Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskComplete;
