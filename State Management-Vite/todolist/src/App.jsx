import { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "",
    completed: false,
    taskAssignedTo: "",
  });

  function handleChange(event) {
    if (event.target.name == "task") {
      setFormState({ ...formState, task: event.target.value });
    } else if (event.target.name === "completed") {
      setFormState({ ...formState, completed: event.target.checked });
    } else if (event.target.name === "taskAssignedTo") {
      setFormState({ ...formState, taskAssignedTo: event.target.value });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formState.task || !formState.taskAssignedTo) {
      return alert("all fields are required");
    }
    const updatedTasks = [...tasks, formState];
    setFormState({ task: "", completed: false, taskAssignedTo: "" });
    setTasks(updatedTasks);
  }

  function upadateTask(idx) {
    const updatedTasks = tasks.map((item, index) => {
      let currentTask = item;
      if (index == idx) {
        currentTask.completed = !currentTask.completed;
      }
      return currentTask;
    });

    setTasks(updatedTasks);
  }

  function deleteTask(idx) {
    const updatedTasks = tasks.filter((item, index) => index !== idx);
    setTasks([...updatedTasks]);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <input
            value={formState.task}
            name="task"
            type="text"
            placeholder="Add Task"
          />
          <label>
            Completed:
            <input
              name="completed"
              type="checkbox"
              checked={formState.completed}
            />
          </label>
          <select name="taskAssignedTo" value={formState.taskAssignedTo}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks?.map((item, index) => (
        <TaskItem
          key={index}
          item={item}
          upadateTask={() => upadateTask(index)}
          deleteTask={() => deleteTask(index)}
        />
      ))}
    </>
  );
}

export default App;
