import "./App.css";
import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import UpdateForm from "./components/UpdateForm";
import ToDo from "./components/Todo";

function App() {
  const [toDo, settoDo] = useState([]);

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      settoDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    let newTask = toDo.filter((task) => task.id !== id);
    settoDo(newTask);
  };

  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    settoDo(newTask);
  };

  const cancelUpdate = () => {
    setUpdateData('');
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    settoDo(updatedObject);
    setUpdateData("");
  };

  return (
    <div className="container App">
      <br />
      <h2>To Do list</h2>
      <br />

      {/* update data  */}
      {updateData && updateData ? (
        <UpdateForm 
        updateData ={updateData}
         changeTask ={changeTask}
         updateTask ={updateTask}
         cancelUpdate ={cancelUpdate}
        />
      ) : (
        <AddTaskForm
        newTask = {newTask}
        setNewTask = {setNewTask}
        addTask = {addTask}
        />
      )}

      {toDo && toDo.length ? " " : "No Task..."}

        <ToDo
        toDo ={toDo }
        markDone={markDone}
        setUpdateData ={setUpdateData}
        deleteTask={deleteTask}
        />
    </div>
  );
}

export default App;
