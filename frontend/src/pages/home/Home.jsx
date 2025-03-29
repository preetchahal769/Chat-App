import React from "react";
import Chatbar from "../../components/chatbar/Chatbar";
import Chat from "../../components/Chat/Chat";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home ">
      <Sidebar />
      <Chatbar />
      <Chat />
    </div>
  );
};

export default Home;
