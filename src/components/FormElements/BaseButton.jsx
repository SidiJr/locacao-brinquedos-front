import clsx from 'clsx';
import React from 'react';

const BaseButton = ({ isForm, text, className }) => {


  return (
    <button
      type={isForm ? 'submit' : 'button'}
      className={clsx(
        "px-6 py-2 text-sm font-medium",
        "rounded-md",
        "bg-black text-white",
        "hover:bg-neutral-700",
        "shadow-sm hover:shadow-md",
        "transition-transform duration-150 ease-in-out",
        "active:scale-95",
        "outline-none focus:outline-none",
        "cursor-pointer",
        className
      )}
    >
      {text}
    </button>
  );
};

export default BaseButton;
