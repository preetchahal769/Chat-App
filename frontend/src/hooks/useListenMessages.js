import { useEffect } from "react";
import { useSocket } from "../context/SocketContext";
import useUserConversation from "../store/userConversation";
import notificationSound from "../assets/sound/notification.mp3";
const useListenMessages = () => {
  const { socket } = useSocket();
  const { messages, setMessages } = useUserConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const audio = new Audio(notificationSound);
      audio.play();
      console.log("newMessage", newMessage);
      setMessages([...messages, newMessage]);
    });
    return () => socket?.off("newMessage");
  }, [socket, messages, setMessages]);
};
export default useListenMessages;
