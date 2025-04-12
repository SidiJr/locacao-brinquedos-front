import clsx from 'clsx';
import React from 'react';

const BaseButton = ({ isForm, text, buttonClass }) => {


  return (
    <button
      type={isForm ? 'submit' : 'button'}
      className={clsx(
        "px-6 py-2 text-sm",
        "rounded-md",
        "bg-black text-white",
        "hover:bg-neutral-700",
        "cursor-pointer",
        "transition duration-150 ease-in-out",
        "focus:outline-none focus:ring-2 focus:ring-neutral-700"
      )}
    >
      {text}
    </button>
  );
};

export default BaseButton;
