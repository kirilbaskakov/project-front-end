import Woman from "@/assets/woman.jpg";
import Buttons from "./Buttons";
import UserType from "@/types/UserType";
import { useState } from "react";

const SearchProfile = ({ users }: { users: UserType[] }) => {
  const [index, setIndex] = useState(0);
  const currentUser = users[index];

  return (
    <div className="w-[100%] p-6 md:w-[40%]">
      <img src={Woman} className="w-full rounded-lg" />
      <h3 className="relative ml-2 top-[-45px] text-white text-3xl">
        {currentUser?.name}, {currentUser?.age}
      </h3>
      <textarea className="w-full" rows={3} value={currentUser?.description} />
      <Buttons onClick={() => setIndex((index) => index + 1)} />
    </div>
  );
};

export default SearchProfile;
