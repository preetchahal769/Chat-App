import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  console.log("hit on this api");
  try {
    const loggedUserId = req.user._id;
    console.log(`loggedUserId : ${loggedUserId}`);
    const allUsers = await User.find({ _id: { $ne: loggedUserId } }).select(
      "-password"
    );
    // console.log(`allUsers : ${allUsers}`);
    res.status(200).json(allUsers);
  } catch (error) {
    console.error(`error in getUsers : ${error}`);
    res.status(500).json({ error: `Internal server error` });
  }
};
