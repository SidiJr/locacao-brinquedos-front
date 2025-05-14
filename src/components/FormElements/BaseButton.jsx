import clsx from "clsx";
import React from "react";
import { useNavigate } from "react-router-dom";

const BaseButton = ({ isForm, text, className, onClick, route, action, icon }) => {
  const navigate = useNavigate();

  const colorClasses = {
  deletar: "bg-red-400 hover:bg-red-300",
  editar: "bg-blue-400 hover:bg-blue-300",
  incluir: "bg-emerald-400 hover:bg-emerald-300",
};

const buttonClass = colorClasses[action] || "bg-black hover:bg-neutral-700";

  const handleClick = () => {
    if (route) {
      navigate(route);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={isForm ? "submit" : "button"}
      onClick={handleClick}
      className={clsx(
        "px-6 py-2 text-sm font-medium",
        "rounded-md",
        "text-white",
        "shadow-sm hover:shadow-md",
        "transition-transform duration-150 ease-in-out",
        "active:scale-95",
        "outline-none focus:outline-none",
        "cursor-pointer",
        className,
        buttonClass,
        icon && icon,
      )}
    >
      {text}
    </button>
  );
};

export default BaseButton;
