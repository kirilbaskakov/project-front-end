import ChatType from "@/types/ChatType";

const getChats = (userId: number): ChatType[] => {
  return [
    {
      id: 1,
      consumer_id: 1,
    },
    {
      id: 2,
      consumer_id: 2,
    },
    {
      id: 3,
      consumer_id: 3,
    },
    {
      id: 4,
      consumer_id: 4,
    },
  ];
};

export default getChats;
