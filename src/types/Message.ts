type MessageType = {
  id: number;
  text: string;
  date: string;
  type: "sent" | "received";
};

export default MessageType;
