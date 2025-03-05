import express from "express";
import { login, Register } from "../Controller/auth.controller.js";
import { getuserprofile } from "../Controller/user.controller.js";
const router = express.Router();

router.post("/register", Register);
router.post("/login", login);
router.get("/getprofile/:id", getuserprofile);

export default router;
