import ChatCard from "./ChatCard";

const NewMessages = () => {
  return (
    <div className="flex flex-col gap-6 mt-4">
      <h4 className="text-blue-600 text-lg">New messages</h4>
      <ChatCard id={1} />
      <ChatCard id={2} />
      <ChatCard id={3} />
      <ChatCard id={4} />
      <ChatCard id={5} />
      <ChatCard id={6} />
    </div>
  );
};

export default NewMessages;
