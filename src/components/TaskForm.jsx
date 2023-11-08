/** @format */

import React from "react";
import "./TaskForm.css";

export default function TaskForm({
  titleValue,
  descriptionValue,
  dateValue,
  addTask,
  onTitleChange,
  onDescriptionChange,
  onDateChange,
}) {
  const handleAddTask = () => {
    addTask();
  };

  return (
    <header id="header">
      <h1>Task Tracker</h1>
      <form id="task-form">
        <label className="task-label">Task Title</label>
        <input
          type="text"
          className="input-task"
          value={titleValue}
          name="titleValue"
          onChange={onTitleChange}
        ></input>
        <label className="task-label">Task Description</label>
        <textarea
          type="text"
          className="input-task"
          value={descriptionValue}
          id="task-form-description"
          name="descriptionValue"
          onChange={onDescriptionChange}
        ></textarea>
        <label className="task-label">Task Due Date</label>
        <input
          type="date"
          className="input-task"
          value={dateValue}
          name="dateValue"
          onChange={onDateChange}
        ></input>
        <button type="button" onClick={handleAddTask}>
          Add Task
        </button>
      </form>
    </header>
  );
}
