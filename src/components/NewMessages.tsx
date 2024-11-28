import { useEffect, useState } from "react";
import ChatCard from "./ChatCard";
import ChatType from "@/types/ChatType";
import logger from "@/utils/Logger";

const NewMessages = () => {
  const [chats, setChats] = useState<ChatType[]>([]);

  const fetchChats = async () => {
    try {
      const response = await fetch(import.meta.env + "/chats");
      const chats = await response.json();
      setChats(chats);
    } catch {
      logger.error("Error while fetching chats.");
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div className="flex flex-col gap-6 mt-4">
      <h4 className="text-blue-600 text-lg">New messages</h4>
      {chats.map(({ id }) => (
        <ChatCard key={id} id={id} />
      ))}
    </div>
  );
};

export default NewMessages;
