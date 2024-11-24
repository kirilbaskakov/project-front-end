import Woman from "@/assets/woman.jpg";
import Buttons from "./Buttons";

const SearchProfile = () => {
  return (
    <div className="w-[40%] p-6">
      <img src={Woman} className="w-full rounded-lg" />
      <textarea className="w-full mt-4" rows={3} />
      <Buttons />
    </div>
  );
};

export default SearchProfile;
