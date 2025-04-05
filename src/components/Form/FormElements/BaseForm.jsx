import React, { useState, useCallback } from 'react';
import Input from './BaseInput';
import BaseButton from './BaseButton';
import clsx from 'clsx';
import { useForm } from '../../../contexts/FormContext';
import BaseSearchField from './BaseList';

// Necessário passar um array de objetos com os fields e a função de submit
const BaseForm = ({ fields, onSubmit, formClass, labelClass, inputClass, buttonText, title, showList, hideTotalizador, hideFixedButtons, hideCancelar }) => {

    const { formData, updateFormData } = useForm();

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFormData(name, value);
    };

    const handleSubmit = () => {
        //aqui vai ser enviado os dados para o back
    }

    console.log("formData: ", formData);

    return (
        //Envolve todo o componente

        <section className={clsx("w-full flex flex-col items-center bg-red-100 h-screen")}>
            <p >{title}</p>
            <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
                {/* Envolve os campos */}
                <div className={clsx("flex flex-col border bg-white p-10 gap-4 rounded-md w-3/4")}>
                    {fields.map((field) => (
                        // Envolve cada campo
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
                </div>
                {/* Aqui a lista */}
                {showList && (<div className={clsx("flex flex-col border bg-white p-10 gap-4 rounded-md w-3/4 items-center")}>
                    <BaseSearchField />
                </div>)}

                {/* Totalizador e botões */}
                {!hideFixedButtons && <div className={clsx("flex border bg-white p-2 rounded-md w-full items-center justify-between fixed bottom-0")}>
                    {!hideTotalizador && <div className="border bg-white rounded-md p-6" >Aqui vai ter o totalizador</div>}
                    <div className='flex gap-2'>
                        {!hideCancelar && <BaseButton text={"Cancelar"} />}
                        <BaseButton isForm text={buttonText ?? "Salvar"} />
                    </div>
                </div>}

            </form>
        </section>

    );
};

export default BaseForm;
