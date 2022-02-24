import Left from "./components/Asides/Left/Left";
import Right from "./components/Asides/Right/Right";
import Main from "./components/Main/Main";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const id = uuidv4();

  const data = [
    {
      id,
      category: "Learning",
      title: "Learning MERN Stack",
      date: "2022-03-15",
      status: "In Progress",
      isCompleted: false,
    },
    {
      id: 2,
      category: "Learning",
      title: "Learned MEAN Stack",
      date: "2020-01-01",
      status: "Completed",
      isCompleted: true,
    },
    {
      id: 3,
      category: "Sports",
      title: "Playing Rolling Dice",
      date: "2022-02-04",
      status: "in progress",
      isCompleted: false,
    },
    {
      id: 4,
      category: "Trip",
      title: "Going to Daalo Mountains",
      date: "2022-08-20",
      status: "in progress",
      isCompleted: false,
    },
    {
      id: 6,
      category: "Work",
      title: "Building Web App",
      date: "2023-01-01",
      status: "IN progress",
      isCompleted: false,
    },
  ];
  const [tasks, setTasks] = useState(data);

  const taskCompleteHandler = (id) => {
    setTasks((prevState) => {
      const task = prevState.find((t) => t.id === id);
      const taskUpdate = {
        ...task,
        isCompleted: true,
        status: "Completed",
      };

      const taskIndex = prevState.findIndex((task) => task.id === id);

      const prevUpdate = [...prevState];
      prevUpdate[taskIndex] = taskUpdate;

      return prevUpdate;
    });
  };

  const deleteTask = (id) => {
    setTasks((prevState) => {
      const prevUpdate = prevState.filter((t) => t.id !== id);
      return prevUpdate;
    });
  };
  const deleteCompletedTask = (id) => {
    setTasks((prevState) => {
      const prevUpdate = prevState.filter((t) => t.id !== id);
      return prevUpdate;
    });
  };

  const undoTask = (id) => {
    setTasks((prevState) => {
      const task = prevState.find((t) => t.id === id);

      const taskUndo = {
        ...task,
        isCompleted: false,
        status: "In progress",
      };
      const taskIndex = prevState.findIndex((t) => t.id === id);
      const prevUpdate = [...prevState];
      prevUpdate[taskIndex] = taskUndo;
      return prevUpdate;
    });
  };

  const getDataFromChild = (data) => {
    setTasks((prevState) => {
      return [data, ...prevState];
    });
  };

  return (
    <div className="flex min-h-screen w-screen bg-gray-50">
      {/* left side */}
      <Left onLeftTasks={tasks} />
      {/* main side */}
      <Main
        getData={getDataFromChild}
        AppTasks={tasks}
        onTaskCompleted={taskCompleteHandler}
        onDelete={deleteTask}
      />
      {/* right side */}
      <Right
        data={tasks}
        onUndo={undoTask}
        onDeleteCompleted={deleteCompletedTask}
      />
    </div>
  );
}

export default App;
