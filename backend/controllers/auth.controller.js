import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { userName, emailId, phoneNumber, role, password, confirmPassword } =
      req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const email = await User.findOne({ emailId });

    if (email) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    const phone = await User.findOne({ phoneNumber });

    if (phone) {
      return res
        .status(400)
        .json({ error: "User with this phoneNumber already exists" });
    }

    //   Hased password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      userName,
      emailId,
      phoneNumber,
      role,
      password: hashedPassword,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        userName: newUser.userName,
        emailId: newUser.emailId,
        phoneNumber: newUser.phoneNumber,
        role: newUser.role,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.error(`error ${error}`);
    res.status(500).json({ error: `Internal server error` });
  }
};
export const signin = async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const email = await User.findOne({ emailId });

    if (!email) {
      return res.status(404).json({ error: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, email.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    generateTokenAndSetCookie(email._id, res);

    res.status(200).json({
      _id: email.id,
      userName: email.userName,
      emailId: email.emailId,
      phoneNumber: email.phoneNumber,
      role: email.role,
    });
  } catch (error) {
    console.error(`error : ${error}`);
    res.sendStatus(500).json({ error: "Internal server error" });
  }
};
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out sucessfully" });
  } catch (error) {
    console.error(`error in logout : ${error}`);
    res.sendStatus(500).json({ error: "Internal server error" });
  }
};
