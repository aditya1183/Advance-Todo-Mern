import express from "express";
import { addtask } from "../Controller/task.controller.js";
import { authmilldeware } from "../MiddleWare/auth.middleware.js";
const router = express.Router();

router.post("/addtask", authmilldeware, addtask);

export default router;
