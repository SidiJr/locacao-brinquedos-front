import clsx from 'clsx';
import React from 'react';
import { inputCss } from './helpers';

const BaseInput = ({ label, type, name, value, onChange, required, placeholder, inputClass, labelClass }) => {

    return (
        <div className="my-2">
            {label && <label className={clsx("underline", labelClass)} htmlFor={name}>{label}</label>}
            <input
                className={clsx(
                    inputCss,
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
