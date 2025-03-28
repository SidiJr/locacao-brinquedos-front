import React from 'react';

const Input = ({ label, type, name, value, onChange, required }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                className="border border-neutral-300 rounded-md"
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

export default Input;
