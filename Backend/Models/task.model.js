import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Link task to user
    tasks: [
      {
        title: { type: String, required: true }, // Each task in the array has a title
        completed: { type: Boolean, default: false }, // Task completion status
      },
    ],
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
