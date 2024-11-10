import NewFollowers from "./NewFollowers";
import NewMessages from "./NewMessages";

const Messages = () => {
  return (
    <div className="flex-1">
      <div className="flex px-12 py-2 justify-between text-blue-600 text-3xl">
        <h2>Messages</h2>
        <h2 className="opacity-50">Followers</h2>
      </div>
      <NewFollowers />
      <NewMessages />
    </div>
  );
};

export default Messages;
