import express from "express";
import Task from "../Models/task.model.js";

const addtask = async (req, res) => {
  try {
    // Extract user data from the request (from middleware)
    const { userid } = req.user; // Extract user ID from the token
    const { heading, alltasks } = req.body; // Extract task details

    if (!heading || !alltasks || !Array.isArray(alltasks)) {
      return res.status(400).json({ message: "Invalid task data" });
    }

    // Create a new task document
    const newTask = new Task({
      title: heading,
      user: userid,
      tasks: alltasks.map((task) => ({ title: task, completed: false })), // Convert array to subtask objects
    });

    // Save task in MongoDB
    await newTask.save();

    res.status(201).json({ message: "Task added successfully", task: newTask });
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { addtask }
