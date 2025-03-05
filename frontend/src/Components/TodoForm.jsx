import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [heading, setHeading] = useState("");
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    setTasks([...tasks, task]); // Add task to list
    setTask(""); // Clear task input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (heading.trim() === "" || tasks.length === 0) return;

    addTodo({ heading, tasks }); // Pass todo with heading and tasks
    setHeading("");
    setTasks([]);
  };

  return (
    <div className="p-4 border rounded shadow-md w-full max-w-lg">
      <h2 className="text-xl font-bold mb-2">Add New Todo</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Todo Heading */}
        <input
          type="text"
          placeholder="Enter Todo Heading..."
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          className="border p-2 rounded w-full"
        />

        {/* Task Input & Add Task Button */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border p-2 rounded flex-grow"
          />
          <button
            onClick={handleAddTask}
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add Task
          </button>
        </div>

        {/* Display Task List */}
        <ul className="list-disc pl-5 text-gray-700">
          {tasks.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
