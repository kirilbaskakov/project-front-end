import MessageType from "@/types/MessageType";

const getChatMessages = async (chatId: number): Promise<MessageType[]> => {
  return [
    {
      id: 1,
      chat_id: chatId,
      sender_id: 1,
      consumer_id: 1,
      text: "Lorem ipsuum",
      date: "12.04.2024",
    },
    {
      id: 2,
      chat_id: chatId,
      sender_id: 1,
      consumer_id: 1,
      text: "Lorem ipsuumsdsdsd",
      date: "12.04.2024",
    },
  ];
};

export default getChatMessages;
