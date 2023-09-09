import { CaretDown } from "phosphor-react";
import React, { useState } from "react";

const Dropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block ">
   
      <p
        className="cursor-pointer flex items-center gap-1 hover:text-sky-500"
        onClick={toggleDropdown}
      >
        {label}
        <CaretDown weight="fill" />
      </p>
      {isOpen && (
        <div className=" absolute w-fit px-4  mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ul>
            {items.map((item, index) => (
          
              <li
                key={index}
                className="px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
