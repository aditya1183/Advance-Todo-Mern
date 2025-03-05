import express from "express";
import { login, Register } from "../Controller/auth.controller.js";
import { getuserprofile } from "../Controller/user.controller.js";
import { authmilldeware } from "../MiddleWare/auth.middleware.js";
const router = express.Router();

router.post("/register", Register);
router.post("/login", login);
router.get("/getprofile/:id", authmilldeware, getuserprofile);

export default router;
