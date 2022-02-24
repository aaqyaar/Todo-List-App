import React from "react";

function Filter({ onChangeCategory, onChangeDate }) {
  const changeCategoryHandler = (event) => {
    onChangeCategory(event.target.value);
  };
  const changeDateHandler = (event) => {
    onChangeDate(event.target.value);
  };
  return (
    <div className="flex items-center gap-2">
      <input
        type="date"
        name="date"
        className="max-w-80 rounded-md border-gray-100 focus:border-gray-100 focus:ring-gray-100"
        id="date"
        onChange={changeDateHandler}
      />

      <select
        name="category"
        className="max-w-80 rounded-md border-gray-100 focus:border-gray-100 focus:ring-gray-100"
        id="category"
        onChange={changeCategoryHandler}
      >
        <option className="hidden">Category</option>
        <option value="All">All</option>
        <option value="Sports">Sports</option>
        <option value="Learning">Learning</option>
        <option value="Work">Work</option>
        <option value="Trip">Trip</option>
      </select>
    </div>
  );
}

export default Filter;
