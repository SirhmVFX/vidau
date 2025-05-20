"use client"

import { ArrowDown } from "./Icons";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  name: string;
  className?: string;
  active?: boolean;
}

function SelectComponent({ label}: SelectProps) {
  return (
    
      <div
        className={`flex items-center justify-between w-full p-2 border-none rounded-sm text-[12px] hover:bg-[#3353F9] hover:text-white  text-[#3353F9] cursor-pointer `}
      >
        <p className="text-[12px] font-bold" >{label}</p>
       <ArrowDown hover={false} />
      </div>
  );
}

export default SelectComponent;
