import { useState } from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";
import PersonCard from "./PersonCard";
import MessageType from "@/types/Message";

const CurrentChat = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur",
      date: "10:05",
      type: "sent",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur",
      date: "10:05",
      type: "sent",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur",
      date: "10:05",
      type: "received",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur",
      date: "10:05",
      type: "sent",
    },
  ]);

  const onSent = (text: string) => {
    setMessages([
      ...messages,
      {
        id: +new Date(),
        text,
        date: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        type: "sent",
      },
    ]);
  };

  return (
    <div className="flex-1 grid grid-rows-[auto_1fr_auto] h-[90vh]">
      <div className="flex justify-center">
        <PersonCard />
      </div>
      <div className="mt-2 flex flex-col items-start gap-2 overflow-y-auto px-2">
        {messages.map(({ id, text, date, type }) => (
          <Message key={id} text={text} date={date} type={type} />
        ))}
      </div>
      <MessageInput onSent={onSent} />
    </div>
  );
};

export default CurrentChat;
