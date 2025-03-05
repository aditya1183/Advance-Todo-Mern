import express from "express";
import jwt from "jsonwebtoken";
const authmilldeware = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    } else {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decoded;
      next();
    }
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

export { authmilldeware };
