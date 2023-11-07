/** @format */

import "./Task.css";

export default function Task({ taskName, taskDescription, taskDate }) {
  return (
    <div id="card-grid">
      <div id="task-card">
        <h1 id="task-title">{taskName}</h1>
        <p id="task-description">{taskDescription}</p>
        <p id="task-date">{taskDate}</p>
      </div>
    </div>
  );
}
