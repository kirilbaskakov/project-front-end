import { useState } from "react";
import NewFollowers from "./NewFollowers";
import NewMessages from "./NewMessages";
import classNames from "classnames";
import Follows from "./Follows";

const Messages = () => {
  const [tab, setTab] = useState<"messages" | "followers">("messages");

  return (
    <div className="flex-1">
      <div className="flex px-12 py-2 justify-between">
        <button
          className={
            "text-blue-600 text-3xl bg-transparent " +
            classNames({ "opacity-50": tab !== "messages" })
          }
          onClick={() => setTab("messages")}
        >
          Messages
        </button>
        <button
          className={
            "text-blue-600 text-3xl bg-transparent " +
            classNames({ "opacity-50": tab !== "followers" })
          }
          onClick={() => setTab("followers")}
        >
          Followers
        </button>
      </div>
      {tab == "messages" ? (
        <>
          <NewFollowers />
          <NewMessages />
        </>
      ) : (
        <Follows />
      )}
    </div>
  );
};

export default Messages;
