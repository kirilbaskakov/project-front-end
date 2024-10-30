import LikeIcon from "@/assets/like-icon.png";
import ChatIcon from "@/assets/chat-icon.png";
import StarIcon from "@/assets/star-icon.png";
import CancelIcon from "@/assets/cancel-icon.png";

const Buttons = () => {
    return (
        <div className='flex justify-center gap-4 mt-4'>
            <button className="w-12 h-12 bg-black rounded-full p-1">
                <img src={LikeIcon} className="w-12 h-12 object-center"/>
            </button>
            <button className="w-12 h-12 bg-black rounded-full overflow-hidden p-1">
                <img src={ChatIcon} className="w-12 h-12 object-contain"/>
            </button>
            <button className="w-12 h-12 bg-black rounded-full overflow-hidden p-1">
                <img src={StarIcon} className="w-12 h-12 object-contain"/>
            </button>
            <button className="w-12 h-12 bg-black rounded-full overflow-hidden p-1">
                <img src={CancelIcon} className="w-12 h-12 object-contain"/>
            </button>
        </div>
    );
};

export default Buttons;