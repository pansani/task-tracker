/** @format */

import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";

function App() {
  const [taskData, setTaskData] = useState({
    titleValue: "",
    descriptionValue: "",
    dateValue: "",
  });

  const [taskAdded, setTaskAdded] = useState(false);

  const handleTitleChange = (event) => {
    setTaskData({ ...taskData, titleValue: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    setTaskData({ ...taskData, descriptionValue: event.target.value });
  };

  const handleDateChange = (event) => {
    setTaskData({ ...taskData, dateValue: event.target.value });
  };

  const addTask = () => {
    setTaskAdded(true);
  };

  return (
    <div>
      <TaskForm
        titleValue={taskData.titleValue}
        descriptionValue={taskData.descriptionValue}
        dateValue={taskData.dateValue}
        onTitleChange={handleTitleChange}
        onDescriptionChange={handleDescriptionChange}
        onDateChange={handleDateChange}
        addTask={addTask}
      />
      {taskAdded && (
        <Task
          taskName={taskData.titleValue}
          taskDescription={taskData.descriptionValue}
          taskDate={taskData.dateValue}
        />
      )}
    </div>
  );
}

export default App;
