import React, { useEffect, useRef } from "react";
import Message from "./Message";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useGetMessage from "../../hooks/useGetMessage";
const Messages = () => {
  const { messages, loading } = useGetMessage();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView(
        {
          behavior: "smooth",
        },
        100
      );
    });
  }, [messages]);
  console.log(messages);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message key={message._id} message={message} />
          </div>
        ))}
      {loading && [...Array(10)].map((_, i) => <MessageSkeleton key={i} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center ">Send Message to start conversation</p>
      )}
    </div>
  );
};

export default Messages;
