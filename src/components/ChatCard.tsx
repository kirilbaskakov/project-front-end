import Woman from "@/assets/woman.jpg";
import classNames from "classnames";
import { useNavigate, useSearchParams } from "react-router-dom";

const ChatCard = ({ id }: { id: number }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isOpen = String(id) == searchParams.get("chat_id");

  const onClick = () => {
    navigate(`/chat?chat_id=${id}`);
  };

  return (
    <div
      className={
        "flex gap-8 w-full cursor-pointer rounded-2xl pr-4 " +
        classNames({ "bg-blue-200": isOpen })
      }
      onClick={onClick}
    >
      <img src={Woman} className="w-16 h-16 rounded-full object-cover" />
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
