import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Form.css";
function Form({ childToParent, onCloseForm }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  // function handler
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  // form submit
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      (title.length !== 0 && category.length !== 0 && date.length !== 0,
      status.length !== 0)
    ) {
      const data = {
        title,
        category,
        date,
        status,
      };
      childToParent(data);
      toast.success("Succesfully Saved");

      // RESETING FORM
      setTitle("");
      setCategory("");
      setDate("");
      setStatus("");
    } else {
      toast.error("Fill All Required Fields");
    }
  };
  return (
    <section id="form" className="card-white font-poppins mb-4 w-full">
      <h1 className="font-openSans mx-1 mt-2 mb-2 text-2xl font-bold tracking-wider">
        Add New Task
      </h1>
      <hr />
      <form
        onSubmit={onSubmitHandler}
        className="grid gap-3 sm:grid-cols-1 md:grid-cols-2"
      >
        <div className="input-group">
          <label htmlFor="title" className="input-label">
            Title
          </label>
          <input
            type="text"
            className="input-control"
            name="title"
            value={title}
            onChange={titleHandler}
            autoComplete="off"
          />
        </div>
        <div className="input-group">
          <label htmlFor="category" className="input-label">
            Category
          </label>
          <select
            name="category"
            className="input-control"
            value={category}
            onChange={categoryHandler}
          >
            <option className="hidden">Choose a Category</option>
            <option value="Sports">Sports</option>

            <option value="Learning">Learning</option>
            <option value="Work">Work</option>
            <option value="Trip">Trip</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="date" className="input-label">
            Date
          </label>
          <input
            type="date"
            name="date"
            className="input-control"
            id="date"
            value={date}
            onChange={dateHandler}
          />
        </div>
        <div className="input-group">
          <label htmlFor="status" className="input-label">
            Status
          </label>
          <select
            name="status"
            value={status}
            onChange={statusHandler}
            className="input-control"
          >
            <option className="hidden">Choose Status</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="mt-1 flex w-full items-center justify-center gap-3 md:col-span-2">
          <input type="submit" className="btn btn-manual" value="Add" />
          <button
            type="button"
            onClick={onCloseForm}
            className="btn btn-cancel"
          >
            Cancel
          </button>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
}

export default Form;
