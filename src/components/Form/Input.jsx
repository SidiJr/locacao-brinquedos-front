import React from 'react'

const Input = ({ label, label, type, name, value, onChange, required }) => {
    return (
        <div>
            <label>{label}</label>
            <input
                className="border border-neutral-300 rounded-md"
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    )
}

export default Input
