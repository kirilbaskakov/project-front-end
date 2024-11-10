import Woman from "@/assets/woman.jpg";
import { PiGenderFemale } from "react-icons/pi";

const MyProfile = () => {
  return (
    <div className="w-[40%] p-6">
      <img src={Woman} className="w-full rounded-lg" />
      <form className="flex flex-col gap-4 mt-4">
        <div className="flex justify-between items-center">
          <input type="text" className="w-3/4" />
          <PiGenderFemale className="w-8 h-8" />
        </div>
        <input type="text" className="w-3/4" />
        <input type="text" className="w-3/4" />
        <textarea className="mt-4" rows={3} />
      </form>
    </div>
  );
};

export default MyProfile;
