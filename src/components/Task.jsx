/** @format */

import "./Task.css";
import trash from "../assets/trash.png";

export default function Task({
  taskName,
  taskDescription,
  taskDate,
  deleteTask,
}) {
  return (
    <div id="task-card">
      <button type="button" onClick={deleteTask} id="delete-button">
        <img src={trash} alt="Trash" className="trash-image" />
      </button>
      <h1 id="task-title">{taskName}</h1>
      <p id="task-description">{taskDescription}</p>
      <p id="task-date">{taskDate}</p>
    </div>
  );
}
