import { ButtonProps } from "@/types.common";
import React from "react";

const Button = ({
  title,
  containerStyles,
  textStyles,
  handleClick,
}: ButtonProps) => {
  return (
    <div className="w-full">
      <button
        className={`custom-btn bg-[#1785B3] rounded-xl text-white font-bold ${containerStyles}`}
        onClick={handleClick}
      >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
      </button>
    </div>
  );
};

export default Button;
