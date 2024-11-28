import useUser from "@/hooks/useUser";
import MessageType from "@/types/MessageType";
import classNames from "classnames";

const Message = ({ message }: { message: MessageType }) => {
  const { user } = useUser();

  const type = message.sender_id == user?.id ? "sent" : "received";

  return (
    <div
      className={
        "w-auto max-w-[45%] " + classNames({ "self-end": type === "sent" })
      }
    >
      <p
        className={
          "rounded-lg p-2 font-semibold " +
          classNames({
            "bg-white text-blue-400": type === "received",
            "text-white bg-blue-400": type === "sent",
          })
        }
      >
        {message.text}
      </p>
      <p
        className={
          "w-min text-sm text-gray-400 font-semibold " +
          classNames({ "ml-auto": type === "sent" })
        }
      >
        {message.date}
      </p>
    </div>
  );
};

export default Message;
