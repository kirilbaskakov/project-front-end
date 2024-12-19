import { useEffect } from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";
import PersonCard from "./PersonCard";
import { useChat } from "@/stores/ChatContext";
import { useSearchParams } from "react-router-dom";
import useUser from "@/hooks/useUser";

const CurrentChat = () => {
  const { messages: allMessages, fetchMessages, sendMessage } = useChat();
  const { user } = useUser();
  const chatId = Number(useSearchParams("chat_id")[0].get("chat_id"));
  const messages = allMessages[chatId] ?? [];

  useEffect(() => {
    fetchMessages(chatId);
  }, [chatId, fetchMessages]);

  const onSent = (text: string) => {
    if (user) sendMessage(chatId, user.id, chatId, text);
  };

  if (Number.isNaN(chatId)) {
    return null;
  }

  return (
    <div className="flex-1 grid grid-rows-[auto_1fr_auto] h-[90vh]">
      <div className="flex justify-center">
        <PersonCard />
      </div>
      <div className="mt-2 flex flex-col items-start gap-2 overflow-y-auto px-2">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <MessageInput onSent={onSent} />
    </div>
  );
};

export default CurrentChat;
