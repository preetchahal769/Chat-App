import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton";
const Sidebar = () => {
  return (
    <div className="p-6  ">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
