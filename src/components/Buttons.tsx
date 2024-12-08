import { IoIosHeartEmpty } from "react-icons/io";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Buttons = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="w-60  mx-auto mt-4">
      <div className="flex justify-between">
        <button
          className="w-14 h-14 bg-black rounded-full flex justify-center items-center"
          onClick={onClick}
        >
          <IoIosHeartEmpty className="w-12 h-12" />
        </button>
        <button
          className="w-14 h-14 bg-black rounded-full flex justify-center items-center"
          onClick={onClick}
        >
          <RxCross2 className="w-12 h-12" />
        </button>
      </div>
      <div className="flex justify-center gap-4">
        <button
          className="w-14 h-14 bg-black rounded-full flex justify-center items-center"
          onClick={onClick}
        >
          <BiMessageRoundedDots className="w-12 h-12" />
        </button>
        <button
          className="w-14 h-14 bg-black rounded-full flex justify-center items-center"
          onClick={onClick}
        >
          <FaRegStar className="w-12 h-12" />
        </button>
      </div>
    </div>
  );
};

export default Buttons;
