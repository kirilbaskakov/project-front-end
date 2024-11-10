import classNames from "classnames";

const Message = ({
  type,
  text,
  date,
}: {
  type: "sent" | "received";
  text: string;
  date: string;
}) => {
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
        {text}
      </p>
      <p
        className={
          "w-min text-sm text-gray-400 font-semibold " +
          classNames({ "ml-auto": type === "sent" })
        }
      >
        {date}
      </p>
    </div>
  );
};

export default Message;
