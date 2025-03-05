import express from "express";
import User from "../Models/user.model.js";
import { ComparePassword } from "../Services/ComparePassword.js";
import { generatejwttokens } from "../Services/GenerateJWTtokens.js";
import { HashPassword } from "../Services/HashPassword.js";

const Register = async (req, res) => {
  try {
    const inputdata = req.body;
    console.log(inputdata);
    if (Object.keys(inputdata).length === 0) {
      return res.status(400).json({ message: "Please enter all fields" });
    }
    const { firstname, lastname, email, password } = req.body;
    const existinguser = await User.findOne({ email });
    console.log(existinguser);
    if (existinguser) {
      return res.status(400).json({ message: "Email already exists" });
    } else {
      const hashedpassword = await HashPassword(password);
      const createuser = await User.create({
        firstname,
        lastname,
        email,
        password: hashedpassword,
      });
      return res
        .status(200)
        .json({ message: "user register Sucessfully", user: createuser });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // if user not found in our database
    if (!user) {
      return res.status(404).json({ message: "Incorrect Details" });
    } else {
      // find then compare the password
      const isMatch = await ComparePassword(user.password, password);

      if (!isMatch) {
        return res.status(401).json({ message: "Incorrect Details password" });
      } else {
        const token = await generatejwttokens(user._id, user.email);
        res.cookie("token", token, {
          httpOnly: true, // Secure from JavaScript access
          // secure: process.env.NODE_ENV === "production", // HTTPS in production
          // sameSite: "strict", // Prevent CSRF attacks
          maxAge: 7 * 60 * 60 * 1000, // 7 days expiration
        });

        return res
          .status(200)
          .json({ message: "Login Sucessfully", token: token });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export { login, Register };
