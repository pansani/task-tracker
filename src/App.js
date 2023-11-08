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

  const [tasks, setTasks] = useState([]);

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
    if (
      taskData.titleValue &&
      taskData.descriptionValue &&
      taskData.dateValue
    ) {
      const newTask = {
        taskName: taskData.titleValue,
        taskDescription: taskData.descriptionValue,
        taskDate: taskData.dateValue,
        isVisible: true,
      };

      setTasks([...tasks, newTask]);

      setTaskData({
        titleValue: "",
        descriptionValue: "",
        dateValue: "",
      });
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isVisible = false;
    setTasks(updatedTasks);
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
      <div id="card-grid">
        {tasks.map(
          (task, index) =>
            task.isVisible && (
              <Task
                key={index}
                taskName={task.taskName}
                taskDescription={task.taskDescription}
                taskDate={task.taskDate}
                deleteTask={() => handleDeleteTask(index)}
              />
            )
        )}
      </div>
    </div>
  );
}

export default App;
