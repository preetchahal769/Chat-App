import React from "react";
import useUserConversation from "../../store/userConversation";

const Conversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } =
    useUserConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  console.log("conversation", conversation);
  return (
    <>
      <div
        className={`flex gap-4 mb-3 items-center hover:bg-sky-500 rounded p-6 py-1 cursor-pointer ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="flex fles-col flex-1">
          <div className="flex flex-col flex-1">
            <p className="font-bold text-gray-200">{conversation.userName}</p>
            <p className="text-sm text-gray-100">{conversation.emailId}</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default Conversation;
