import clsx from 'clsx';
import React from 'react';

const BaseInput = ({ label, type, name, value, onChange, required, inputClass, labelClass }) => {

    return (
        <div>
            {label && <label className={clsx("w-full underline", labelClass)} htmlFor={name}>{label}</label>}
            <input
                className={clsx("border border-neutral-300 rounded-md w-full py-3", inputClass)}
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
};

export default BaseInput;
