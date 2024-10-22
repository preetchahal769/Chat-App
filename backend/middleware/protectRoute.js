import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized acess" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized acess" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ error: "Unauthorized acess" });
    }
    req.user = user;

    next();
  } catch (error) {
    console.error(`error in protectRoute : ${error}`);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
