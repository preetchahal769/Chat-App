import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
// import useUserConversation from "../../store/userConversation";
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
          <div className=" Chat-header     ">
            <div>
              <span className="label-text">To:</span>
              <span className="text-gray-900 font-bold">
                {selectedConversation.userName}
              </span>
            </div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                onClick={() => setSelectedConversation(null)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
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
