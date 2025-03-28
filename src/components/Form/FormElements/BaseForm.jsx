import React, { useState, useCallback } from 'react';
import Input from './BaseInput';
import BaseButton from './BaseButton';

// Necessário passar um array de objetos com os fields e a função de submit
const Form = ({ fields, onSubmit }) => {
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
        <form onSubmit={handleSubmit}>
            {fields.map((field) => (
                <div key={field.name}>
                    {field.label && <label htmlFor={field.name}>{field.label}</label>}
                    <Input
                        name={field.name}
                        type={field.type}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        required={field.required}
                    />
                </div>
            ))}
            <BaseButton isForm text={"Entrar"}/>
        </form>
    );
};

export default Form;
