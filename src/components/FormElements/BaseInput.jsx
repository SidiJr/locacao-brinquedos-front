import clsx from 'clsx';
import React from 'react';

const BaseInput = ({ label, type, name, value, onChange, required, placeholder, inputClass, labelClass }) => {

    return (
        <div>
            {label && <label className={clsx("w-full underline", labelClass)} htmlFor={name}>{label}</label>}
            <input
                className={clsx(
                    "w-full px-4 py-1 rounded-md border",
                    "border-neutral-300 dark:border-neutral-600",
                    "bg-white dark:bg-neutral-900",
                    "text-neutral-800 dark:text-neutral-100",
                    "placeholder-neutral-400 dark:placeholder-neutral-500",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    "transition duration-150 ease-in-out",
                    inputClass
                )}
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
            />
        </div>
    );
};

export default BaseInput;
