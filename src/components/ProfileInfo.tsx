import Woman from "@/assets/woman.jpg";
import Buttons from "@/components/Buttons";

const ProfileInfo = () => {
  return (
    <div className="w-full p-6 md:w-[40%]">
      <img src={Woman} className="w-full rounded-lg" />
      <h2 className="pl-2 mt-[-50px] text-3xl text-white">Kirill, 19</h2>
      {/* <p className="p-2 bg-white box shadow-md mt-7 rounded-lg w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
      <Buttons /> */}
    </div>
  );
};

export default ProfileInfo;
