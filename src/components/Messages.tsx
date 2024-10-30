import React from "react";
import ChatCard from "./ChatCard";

const Messages = () => {
  return (
    <div className="flex-1">
      <div className="flex px-12 py-2 justify-between text-blue-600 text-3xl">
        <h2>Messages</h2>
        <h2>Followers</h2>
      </div>
      <div className="flex flex-col gap-6 mt-6">
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
      </div>
    </div>
  );
};

export default Messages;
