import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
export const sendMessage = async (req, res) => {
  console.log("hit on this api");
  try {
    const { message } = req.body;
    const { id: reciverId } = req.params;
    const senderId = req.user._id;
    console.log(`message : ${req}`);
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, reciverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, reciverId],
      });
    }

    const newMessage = new Message({
      senderId,
      reciverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await conversation.save();

    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    console.error(`error in send message : ${error}`);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const converstion = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");
    if (!converstion) {
      return res.status(200).json([]);
    }
    res.status(200).json(converstion.messages);
  } catch (error) {
    console.log(`error in getMessages : ${error}`);
    res.status(500).json({ error: "Internal server error" });
  }
};
