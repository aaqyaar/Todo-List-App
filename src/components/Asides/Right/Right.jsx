import React from "react";
import { HiOutlineBell } from "react-icons/hi";
import TaskCompleted from "./Completed/TaskCompleted";
function Right({ data, onUndo, onDeleteCompleted }) {
  return (
    <aside className="font-poppins hidden max-h-screen max-w-md overflow-y-auto rounded-tr-md bg-white shadow-md shadow-indigo-50 lg:block lg:w-80 xl:w-full">
      {/* ! user profile */}
      <section id="profile" className="mb-10">
        <div className="flex w-full items-center justify-between px-3 py-4 shadow-xl shadow-gray-100">
          <div className="relative">
            <span className=" absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-xs text-white">
              16
            </span>
            <HiOutlineBell className="h-7 w-7 text-yellow-600" />
          </div>
          <div className="flex items-center gap-3">
            <span className="tracking-widest">Abdi Zamed Coder</span>
            <img
              src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=228"
              alt="profile pic"
              className="h-10 w-10 rounded-full"
            />
          </div>
        </div>
      </section>
      <TaskCompleted
        tasks={data}
        id={data.id}
        onUndo={onUndo}
        onDeleteTask={onDeleteCompleted}
      />
    </aside>
  );
}

export default Right;
