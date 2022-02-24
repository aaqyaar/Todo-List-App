import React from "react";

const Category = (props) => {
  return (
    <div className="font-poppins my-4 flex items-center justify-between rounded-md bg-white py-1 px-3 shadow-lg shadow-green-50">
      <div className="flex">
        <div
          className="mr-2 w-2 rounded-full"
          style={{
            backgroundColor: props.color,
          }}
        ></div>
        <div>
          <h1
            className="text-xl font-semibold capitalize"
            style={{
              color: props.color,
            }}
          >
            {props.category}
          </h1>
          <span className="mt-1 ml-1 text-xs text-gray-600">
            {props.total} Tasks
          </span>
        </div>
      </div>
      <div
        className="flex h-10 w-10 items-center justify-center rounded-full"
        style={{
          backgroundColor: props.color,
        }}
      >
        <span className="text-white">{props.icon}</span>
      </div>
    </div>
  );
};

export default Category;
