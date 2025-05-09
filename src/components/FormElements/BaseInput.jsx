import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useState } from 'react';
import api from '../../api/axios';
import { inputCss } from './helpers';

const BaseInput = ({ label, type, name, value, onChange, required, placeholder, inputClass, labelClass, route }) => {

    const [selectData, setSelectData] = useState([]);

    useEffect(() => {
        if (type === "select" && route) {
            api
                .get(route)
                .then((response) => {
                    // Adicionar o toast aqui
                    setSelectData(response.data)
                    console.log(response);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }, [type, route]);

    return (
        <div className="my-2">
            {type === 'select' ? (
                <>
                    {label && <label className={clsx("underline", labelClass)} htmlFor={name}>{label}</label>}
                    <select
                        className={clsx(inputCss, inputClass)}
                        name={name}
                        id={name}
                        value={value}
                        onChange={onChange}
                        required={required}
                    >
                        <option value="" disabled selected>Escolha uma opção...</option>

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
                </>
            )}
        </div>
    );
};

export default BaseInput;
