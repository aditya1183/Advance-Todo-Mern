import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../AuthContext/AuthContext";
const TodoForm = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated, isAuthenticated } = useAuth();
  const [tasks, settasks] = useState({
    heading: "",
    alltasks: [],
  });

  const [task, setTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    settasks((prevtasks) => {
      return { ...prevtasks, alltasks: [...prevtasks.alltasks, task] };
    });

    setTask(""); // Clear task input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (tasks.heading.trim() === "" || tasks.alltasks.length === 0) return;
    try {
      const response = await axios.post("/api/task/addtask", tasks, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    if(response.data.status===201){
      toast.success("Task Added Successfully");
    }
    } catch (error) {
      if (error.response.data.message === "Unauthorized") {
        setIsAuthenticated(!isAuthenticated);

        localStorage.removeItem("logintoken");
        toast.error("Your Session is Expired Please Login Again");
        navigate();
      }
    }
    settasks({
      heading: "",
      alltasks: [],
    });
  };

  return (
    <div className="p-4 border rounded shadow-md w-full max-w-lg">
      <h2 className="text-xl font-bold mb-2">Add New Todo</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Todo Heading */}
        <input
          type="text"
          placeholder="Enter Todo Heading..."
          value={tasks.heading}
          onChange={(e) => {
            settasks({ ...tasks, heading: e.target.value });
          }}
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
          {tasks.alltasks?.length > 0 &&
            tasks.alltasks.map((task, index) => {
              return <li key={index}>{task}</li>;
            })}
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
