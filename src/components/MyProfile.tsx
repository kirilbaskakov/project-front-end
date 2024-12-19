import Woman from "@/assets/woman.jpg";
import { PiGenderFemale } from "react-icons/pi";

const MyProfile = () => {
  return (
    <div className="w-[40%] p-6">
      <img src={Woman} className="w-full rounded-lg" />
      <form className="flex flex-col gap-4 mt-4">
        <div className="flex justify-between items-center">
          <input type="text" className="w-3/4" placeholder="Name" />
          <PiGenderFemale className="w-8 h-8" />
        </div>
        <input type="text" className="w-3/4" placeholder="Surname" />
        <input type="text" className="w-3/4" placeholder="Place" />
        <textarea className="mt-4" rows={3} placeholder="Description" />
      </form>
    </div>
  );
};

export default MyProfile;
