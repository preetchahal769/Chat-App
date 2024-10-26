import { useAuth } from "../../context/AuthContext";
import useUserConversation from "../../store/userConversation";

const Message = (message) => {
  const { authUser } = useAuth();
  const shouldShake = message.message.shouldShake ? "shake" : "";
  const fromMe = message.message.senderId === authUser._id;

  console.log(authUser._id, message);
  return (
    <div>
      <div className={`chat ${fromMe ? "chat-end" : "chat-start"}`}>
        <div
          className={`chat-bubble break-words  max-w-[15rem] ${shouldShake}`}
        >
          {message.message.message}
        </div>
      </div>
    </div>
  );
};

export default Message;
