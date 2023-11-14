"use client";

import Link from "next/link";
import React, { useState } from "react";

interface DropdownProps {
  btnText?: string;
  btnIcon?: React.JSX.Element;
  options: string[];
  onSelect: (selected: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  btnText,
  btnIcon,
  options,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    onSelect(value);
  };

  return (
    <>
      <div className="relative inline-block text-left">
        <>
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={toggling}
          >
            {btnText || ""}
            {btnIcon || ""}
          </button>
        </>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-56 z-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {options.map((option) => (
                <Link
                  href="#"
                  key={Math.random()}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={onOptionClicked(option)}
                >
                  {option}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
