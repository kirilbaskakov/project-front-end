import React from "react";
import PersonCard from "./PersonCard";

const NewFollowers = () => {
  return (
    <div>
      <h4 className="text-blue-600 text-lg">New followers</h4>
      <div className="flex gap-1 justify-between mt-2">
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
      </div>
    </div>
  );
};

export default NewFollowers;
