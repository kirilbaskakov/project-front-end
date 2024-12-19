import classNames from "classnames";
import { useState } from "react";

const SelectOne = ({
  optionLeft,
  optionRight,
  onSelect,
}: {
  optionLeft: string;
  optionRight: string;
  onSelect: (option: string) => void;
}) => {
  const [selected, setSelected] = useState<string>(optionLeft);

  const onClick = (option: string) => () => {
    setSelected(option);
    onSelect(option);
  };

  return (
    <div className="w-full flex items-center border-2 rounded-3xl border-gray-400 ">
      <button
        className={
          "flex-1 text-center bg-transparent text-black p-0 border-r-2 rounded-l-3xl border-r-gray-400 rounded-none py-2 " +
          classNames({ "bg-[#E8DEF8]": selected == optionLeft })
        }
        onClick={onClick(optionLeft)}
      >
        {selected == optionLeft && "✓"} {optionLeft}
      </button>
      <button
        className={
          "flex-1 text-center bg-transparent text-black p-0 py-2 rounded-r-3xl " +
          classNames({ "bg-[#E8DEF8]": selected == optionRight })
        }
        onClick={onClick(optionRight)}
      >
        {selected == optionRight && "✓"} {optionRight}
      </button>
    </div>
  );
};

export default SelectOne;
