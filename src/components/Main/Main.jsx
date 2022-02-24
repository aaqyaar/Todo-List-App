import React from "react";
import Content from "../Content/Content";
import Header from "./Header";
function Main(props) {
  const { getData, AppTasks, onTaskCompleted, onDelete } = props;
  const upLoadedData = (data) => {
    getData(data);
  };
  return (
    <section
      id="Main"
      className="max-h-screen grow overflow-hidden overflow-y-auto"
    >
      <Header />
      <Content
        onTaskCompleted={onTaskCompleted}
        onUploaded={upLoadedData}
        MainTasks={AppTasks}
        deleteTask={onDelete}
      />
    </section>
  );
}

export default Main;
