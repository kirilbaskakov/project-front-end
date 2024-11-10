import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";
import { HiOutlinePaperClip, HiOutlineMicrophone } from "react-icons/hi2";
import { IoMdSend } from "react-icons/io";

const MessageInput = ({ onSent }: { onSent: (text: string) => void }) => {
  const [message, setMessage] = useState("");

  const onKeyDown: KeyboardEventHandler = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Предотвращаем переход на новую строку
      onSent(message);
      setMessage("");
    }
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMessage(e.target.value);
  };

  const onClick = () => {
    onSent(message);
    setMessage("");
  };

  return (
    <div className="flex relative mt-2">
      <textarea
        className="w-full p-lg p-r"
        rows={1}
        value={message}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="Type a message..."
      />
      <div className="flex -ml-10 gap-3 mt-2 absolute right-4">
        {message ? (
          <IoMdSend className="w-6 h-6 cursor-pointer" onClick={onClick} />
        ) : (
          <>
            <HiOutlinePaperClip className="w-6 h-6 cursor-pointer" />
            <HiOutlineMicrophone className="w-6 h-6 cursor-pointer" />
          </>
        )}
      </div>
    </div>
  );
};

export default MessageInput;
