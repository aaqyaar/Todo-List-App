import React from "react";
import logo from "../assets/todo-logo.png";
import Categories from "./Category/Categories";
function Left(props) {
  return (
    <aside
      className="hidden max-h-screen w-20 flex-none overflow-y-auto rounded-tr-md bg-white shadow-md shadow-indigo-50 sm:block lg:w-28
xl:w-80"
    >
      <div
        id="container"
        className="flex items-center justify-center shadow-md shadow-gray-100"
      >
        <div id="logo">
          <img
            src={logo}
            className="my-5 mx-3 w-16 rounded-full shadow-2xl shadow-indigo-50 "
            alt="Todo List App Logo"
          />
        </div>
        <div id="logo-txt" className="hidden xl:mt-1 xl:block">
          <h1 className="font-openSans text-2xl font-bold tracking-wider">
            Todo List App
          </h1>
          <p className="text-md font-poppins lowercase text-gray-500">
            Save Your Tasks in Todo App.
          </p>
        </div>
      </div>
      <Categories data={props.onLeftTasks} />
    </aside>
  );
}

export default Left;
