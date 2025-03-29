import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import "./Chat.css";
import useUserConversation from "../../store/userConversation";

const Chat = () => {
  const { selectedConversation, setSelectedConversation } =
    useUserConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChats />
      ) : (
        <div className="Chat">
          <div className=" bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>
            <span className="text-gray-900 font-bold">
              {selectedConversation.userName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </div>
      )}
    </div>
  );
};

export default Chat;

const NoChats = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Select a chat to start messaging</p>
      </div>
    </div>
  );
};
