import React from "react";
import { HiExclamation } from "react-icons/hi";

const Empty = (props) => {
  return (
    <div className="font-poppins my-4 flex flex-col items-center justify-center opacity-80">
      <HiExclamation className="mt-4 h-16 w-16 text-gray-400" />
      <h1 className="py-3 text-xl font-semibold text-gray-400">{props.data}</h1>
    </div>
  );
};

export default Empty;
