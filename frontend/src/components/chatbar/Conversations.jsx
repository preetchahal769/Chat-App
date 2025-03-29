import React from "react";
import Conversation from "./Conversation.jsx";
import useGetConversations from "../../hooks/useGetConversations.js";

const Conversations = () => {
  const { loading, conversation } = useGetConversations();
  // console.log(conversation);
  return (
    <div className="py-2 flex flex-col overflow-auto max-h-96 ">
      {conversation.map((conversation) => {
        // console.log(conversation);
        return (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIdx={conversation === conversation[conversation.length - 1]}
          />
        );
      })}
      {/* {loading ? <span className="loading loading-spinner"></span> : null} */}
    </div>
  );
};

export default Conversations;
