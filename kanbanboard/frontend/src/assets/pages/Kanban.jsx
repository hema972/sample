import React, { useState, useEffect } from "react";
import "../../App.css";

const API = "http://localhost:5000/api/tasks";

const Kanban = () => {
  const [todoTasks, setTodoTasks] = useState([]);
  const [progressTasks, setProgressTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [input, setInput] = useState("");

  // GET TASKS FROM BACKEND
  const fetchTasks = async () => {
    const res = await fetch(API);
    const data = await res.json();

    setTodoTasks(data.filter(task => task.status === "todo"));
    setProgressTasks(data.filter(task => task.status === "progress"));
    setDoneTasks(data.filter(task => task.status === "done"));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // CREATE TASK
  const addTask = async () => {
    if (!input.trim()) return alert("Enter a task");

    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: input,
        status: "todo"
      })
    });

    setInput("");
    fetchTasks();
  };

  // UPDATE TASK STATUS
  const moveTask = async (task, from) => {
    let newStatus = "todo";

    if (from === "todo") newStatus = "progress";
    else if (from === "progress") newStatus = "done";
    else newStatus = "todo";

    await fetch(`${API}/${task._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: newStatus })
    });

    fetchTasks();
  };

  // DELETE TASK
  const deleteTask = async (taskId) => {
    await fetch(`${API}/${taskId}`, {
      method: "DELETE"
    });

    fetchTasks();
  };

  // RENDER TASKS
  const renderTasks = (tasks, from) =>
    tasks.map(task => (
      <div className="task" key={task._id}>
        <div>
          <strong>{task.title}</strong>
          <p>Status: {task.status}</p>
        </div>

        <div>
          <button className="move" onClick={() => moveTask(task, from)}>→</button>
          <button className="delete" onClick={() => deleteTask(task._id)}>X</button>
        </div>
      </div>
    ));

  return (
    <div>
      <h1>Kanban Task Manager</h1>

      <div className="inputBox">
        <input
          placeholder="Enter new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="board">

        <div className="column">
          <h2>To Do</h2>
          <div className="taskBox">
            {renderTasks(todoTasks, "todo")}
          </div>
        </div>

        <div className="column">
          <h2>In Progress</h2>
          <div className="taskBox">
            {renderTasks(progressTasks, "progress")}
          </div>
        </div>

        <div className="column">
          <h2>Done</h2>
          <div className="taskBox">
            {renderTasks(doneTasks, "done")}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Kanban;