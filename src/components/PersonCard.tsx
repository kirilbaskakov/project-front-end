import Woman from "@/assets/woman.jpg";

const PersonCard = () => {
  return (
    <div className="w-20">
      <img src={Woman} className="w-20 h-20 rounded-full object-cover" />
      <p className="text-lg mt-2 text-center">lorem</p>
    </div>
  );
};

export default PersonCard;
