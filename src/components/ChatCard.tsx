import Sussy from "@/assets/sussy.jpg";
import Woman from "@/assets/woman.jpg";

const ChatCard = () => {
  return (
    <div className="flex gap-8 w-full">
      <img src={Woman} className="w-16 h-16 rounded-full" />
      <div className="flex flex-col justify-center">
        <h4 className="text-lg font-semibold">Chat name</h4>
        <div className="flex gap-6 text-lg text-gray-500">
          <p>Last message</p>
          <p> 2h</p>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
