import React, { useState, useCallback } from 'react';
import Input from './BaseInput';
import BaseButton from './BaseButton';
import clsx from 'clsx';

// Necessário passar um array de objetos com os fields e a função de submit
const Form = ({ fields, onSubmit, formClass, labelClass, inputClass, buttonText }) => {
    const [formData, setFormData] = useState({});

    // Função para atualizar os dados do formulário com base nos inputs
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }, []);

    // Função para o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        // Chama a função de submit passada como prop
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className={clsx("flex flex-col", formClass)}>
            {fields.map((field) => (
                <div key={field.name} >
                    <Input
                        name={field.name}
                        type={field.type}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        required={field.required}
                        labelClass={labelClass}
                        inputClass={inputClass}
                        label={field.label}
                    />
                </div>
            ))}
            <BaseButton isForm text={buttonText} />
        </form>
    );
};

export default Form;
