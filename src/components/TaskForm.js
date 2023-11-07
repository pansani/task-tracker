/** @format */

import "./TaskForm.css";

export default function TaskForm({ taskTitle, taskDescription, taskDate }) {
  return (
    <header id="header">
      <h1>Task Tracker</h1>
      <form id="task-form">
        <label className="task-label">Task Title</label>
        <input type="text" className="input-task" value={taskTitle}></input>
        <label className="task-label">Task Description</label>
        <input
          type="text"
          className="input-task"
          value={taskDescription}
          id="task-description"
        ></input>
        <label className="task-label">Task Date</label>
        <input type="text" className="input-task" value={taskDate}></input>
        <button type="button">Add Task</button>
      </form>
    </header>
  );
}
