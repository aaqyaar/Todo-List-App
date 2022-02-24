import React from "react";
import logo from "../Asides/assets/todo-logo.png";
function Header() {
  return (
    <header className="m-4 flex items-center justify-between">
      <div className="flex items-center">
        <div id="logo" className="my-5 mx-3 sm:hidden">
          <img
            src={logo}
            className="w-14 rounded-full shadow-2xl shadow-indigo-50 "
            alt="Todo List App Logo"
          />
        </div>

        <div id="logo-txt-xl" className="mt-3 mb-2 hidden  xl:block">
          <h1 className="font-openSans text-2xl font-bold tracking-wider">
            Manage Your Tasks
          </h1>
          <p className="text-md font-poppins lowercase tracking-wider text-gray-600">
            The Best Todo App for store tasks.
          </p>
        </div>
        <div id="logo-txt" className="md:mt-2 xl:hidden">
          <h1 className="font-openSans text-2xl font-bold tracking-wider">
            Todo List App
          </h1>
          <p className="text-md font-poppins lowercase tracking-wider text-gray-600">
            Save Your Tasks in Todo App.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
