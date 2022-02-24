import React, { useState } from "react";
import Tasks from "./Tasks/Tasks";
import Form from "./Form/Form";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
function Content(props) {
  const { onUploaded, MainTasks, onTaskCompleted, deleteTask } = props;
  const isTaskCompleted = (id) => {
    onTaskCompleted(id);
  };
  const isTaskDeleted = (id) => {
    deleteTask(id);
  };

  // showing the form or closing
  const [showForm, setShowForm] = useState(false);

  const AddTaskHandler = (data) => {
    const id = uuidv4();

    const tasks = {
      id,
      ...data,
      isCompleted: false,
    };
    onUploaded(tasks);
  };
  const closeForm = () => {
    setShowForm(false);
  };
  const showFormHandle = () => {
    setShowForm(true);
  };

  return (
    <main className="card-white font-openSans">
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Form childToParent={AddTaskHandler} onCloseForm={closeForm} />
          </motion.div>
        )}
      </AnimatePresence>

      <Tasks
        isTaskCompleted={isTaskCompleted}
        data={MainTasks}
        showForm={showForm}
        onShowForm={showFormHandle}
        isTaskDeleted={isTaskDeleted}
      />
    </main>
  );
}

export default Content;
