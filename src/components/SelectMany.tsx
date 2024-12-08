import { useState } from "react";

const SelectMany = ({
  label,
  tags,
  onSelect,
}: {
  label: string;
  tags: string[];
  onSelect: (tags: string[]) => void;
}) => {
  const [selectedTags, setSelectedTags] = useState<string[]>(tags);

  const toggleTag = (tag: string) => {
    setSelectedTags((prevSelected) => {
      const newTags = prevSelected.includes(tag)
        ? prevSelected.filter((t) => t !== tag)
        : [...prevSelected, tag];
      onSelect(newTags);
      return newTags;
    });
  };

  return (
    <div className="4 w-full">
      <p className="text-center mb-2 text-xl">{label}</p>
      <div className="grid grid-cols-2 gap-4">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-4 py-2 rounded-3xl transition-colors duration-200 
            ${selectedTags.includes(tag) ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-800"}`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectMany;
