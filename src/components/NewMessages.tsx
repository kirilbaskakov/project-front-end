import { useEffect, useState } from "react";
import ChatCard from "./ChatCard";
import ChatType from "@/types/ChatType";
import getChats from "@/api/getChats";
import useUser from "@/hooks/useUser";

const NewMessages = () => {
  const { user } = useUser();
  const [chats, setChats] = useState<ChatType[]>([]);

  useEffect(() => {
    if (!user) {
      return;
    }
    getChats(user.id).then(setChats);
  }, [user]);

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
