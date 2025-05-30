import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton";
import useUserTab from "../../store/userTab";
import "./Chatbar.css";
const Chatbar = () => {
  const { selectedTab } = useUserTab();
  return (
    <div className="p-6   ">
      <span className=" Chatbar-title w-6 h-6 text-white cursor-pointer">
        {selectedTab}
      </span>
      <div className="divider px-3"></div>
      {selectedTab === "Chat" && <Conversations />}
      {selectedTab === "Search" && <SearchInput />}
      {/* <SearchInput />

       */}

      {/*  */}
    </div>
  );
};

export default Chatbar;
