import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import api from '../../api/axios';
import { inputCss } from './helpers';

const BaseInput = ({ label, type, name, value, onChange, required, placeholder, inputClass, labelClass, route }) => {

    const [selectData, setSelectData] = useState([]);
    const [selectedValue, setSelectedValue] = useState(value);

    // Função chamada ao selecionar uma opção
    const handleSelectChange = (e) => {
        const newValue = e.target.value;
        setSelectedValue(newValue);
        onChange && onChange(e);
    };

    useEffect(() => {
        if (type === "select" && route) {
            api
                .get(route)
                .then((response) => {
                    setSelectData(response.data);
                    console.log(response);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }, [type, route]);

    useEffect(() => {
        setSelectedValue(value);
    }, [value]);

    return (
        <div className="my-2">
            {type === 'select' ? (
                <>
                    {label && <label className={clsx("underline", labelClass)} htmlFor={name}>{label}</label>}
                    <select
                        className={clsx(inputCss, inputClass)}
                        name={name}
                        id={name}
                        value={selectedValue}
                        onChange={handleSelectChange}
                        required={required}
                    >
                        <option value="" disabled>Escolha uma opção...</option>
                        {selectData.map((option, index) => (
                            <option key={index} value={option.id}>
                                {option.nome}
                            </option>
                        ))}
                    </select>
                </>
            ) : (
                <>
                    {label && <label className={clsx("underline", labelClass)} htmlFor={name}>{label}</label>}
                    <input
                        className={clsx(inputCss, inputClass)}
                        type={type}
                        name={name}
                        id={name}
                        value={value}
                        onChange={onChange}
                        required={required}
                        placeholder={placeholder}
                    />
                </>
            )}
        </div>
    );
};

export default BaseInput;
