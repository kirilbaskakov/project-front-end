import MessageType from "@/types/MessageType";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const ChatContext = createContext<{
  messages: MessageType[];
  sendMessage: (
    chatId: number,
    senderId: number,
    consumer_id: number,
    msg: string,
  ) => void;
  fetchMessages: (chatId: number) => Promise<void>;
}>({
  messages: [],
  sendMessage: () => {},
  fetchMessages: async () => {},
});

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const socket = useMemo(
    () => new WebSocket(import.meta.env.VITE_SOCKET_URL),
    [],
  );
  const isChatFetched = useRef<Record<number, boolean>>({});

  useEffect(() => {
    socket.onmessage = (event) => {
      const message: MessageType = JSON.parse(event.data);
      setMessages((messages) => [...messages, message]);
    };

    return () => {
      socket.close();
    };
  }, [socket]);

  const sendMessage = useCallback(
    (chatId: number, senderId: number, consumerId: number, text: string) => {
      const body = {
        chat_id: chatId,
        sender_id: senderId,
        consumer_id: consumerId,
        text,
        date: new Date().toLocaleDateString(),
      };
      socket.send(JSON.stringify(body));
      setMessages((messages) => [...messages, { id: +new Date(), ...body }]);
    },
    [socket],
  );

  const fetchMessages = useCallback(async (chatId: number) => {
    try {
      if (isChatFetched.current[chatId]) {
        return;
      }
      const response = await fetch(`${import.meta.env.VITE_API_URL}/${chatId}`);
      const newMessages = await response.json();
      setMessages((messages) => [...newMessages, ...messages]);
      isChatFetched.current[chatId] = true;
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  }, []);

  return (
    <ChatContext.Provider value={{ messages, sendMessage, fetchMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
