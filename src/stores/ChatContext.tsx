import getChatMessages from "@/api/getChatMessages";
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
  messages: Record<number, MessageType[]>;
  sendMessage: (
    chatId: number,
    senderId: number,
    consumer_id: number,
    msg: string,
  ) => void;
  fetchMessages: (chatId: number) => Promise<void>;
}>({
  messages: {},
  sendMessage: () => {},
  fetchMessages: async () => {},
});

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = useState<Record<number, MessageType[]>>([]);
  const socket = useMemo(
    () => new WebSocket(import.meta.env.VITE_SOCKET_URL),
    [],
  );
  const isChatFetched = useRef<Record<number, boolean>>({});

  useEffect(() => {
    socket.onmessage = (event) => {
      const message: MessageType = JSON.parse(event.data);
      setMessages((messages) => ({
        ...messages,
        [message.chat_id]: [...(messages[message.chat_id] ?? []), message],
      }));
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
      setMessages((messages) => ({
        ...messages,
        [chatId]: [...(messages[chatId] ?? []), { id: +new Date(), ...body }],
      }));
    },
    [socket],
  );

  const fetchMessages = useCallback(async (chatId: number) => {
    try {
      if (isChatFetched.current[chatId]) {
        return;
      }
      const newMessages = await getChatMessages(chatId);
      setMessages((messages) => ({
        ...messages,
        [chatId]: [...newMessages, ...(messages[chatId] ?? [])],
      }));
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
