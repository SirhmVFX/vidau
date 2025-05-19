"use client"
import { ButtonHTMLAttributes } from "react";
import { ButtonArrow } from "./Icons";

interface ArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  bgColor?: string;
  className?: string;
}

function ArrowButton({ 
  text, 
  bgColor = "#000", 
  className = "", 
  ...props 
}: ArrowButtonProps) {
  return (
    <button 
      className={`${bgColor} p-2 pl-3 rounded-full text-[10px] flex items-center gap-1 text-white ${className}`}
      style={{ backgroundColor: bgColor }}
      {...props}
    >
      {text}
      <span className="bg-white p-1 rounded-full">
       <ButtonArrow />
      </span>
    </button>
  );
}

export default ArrowButton;