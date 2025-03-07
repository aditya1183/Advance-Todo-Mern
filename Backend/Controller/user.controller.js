import express from "express";
import User from "../Models/user.model.js";

const getuserprofile = async (req, res) => {
  try {
    const datafrommiddleware = req.user;
    if (Object.keys(datafrommiddleware).length === 0) {
      return res.status(401).json({ message: "Unauthorized" });
    } else {
      console.log("aditya");
      console.log(req.user);
      const userid = req.user.userid;
      const user = await User.findById(userid);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      } else {
        const user = await User.findById(userid);
        console.log(user);
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        } else {
          return res.status(200).json(user);
        }
      }
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export { getuserprofile };
