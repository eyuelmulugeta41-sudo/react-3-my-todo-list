
import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    "introduction",
    "ice breaker"
  ]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>My Todo List</h1>

      <div className="add-task">
        <input
          type="text"
          placeholder="Type a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="e1" onClick={addTask}>
          ADD
        </button>
      </div>

      <div className="task">
        {tasks.map((item, index) => (
          <div className="task-item" key={index}>
            <input type="text" value={item} readOnly />

            <button
              className="e2"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;