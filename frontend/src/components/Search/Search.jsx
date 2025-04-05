import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton";
import "./Chatbar.css";
const Chatbar = () => {
  return (
    <div className="p-6   ">
      <span className=" Chatbar-title w-6 h-6 text-white cursor-pointer">
        Chat
      </span>
      <div className="divider px-3"></div>
      <SearchInput />

      {/* <LogoutButton /> */}
    </div>
  );
};

export default Chatbar;
