import React, { useState, useCallback } from 'react';
import Input from './BaseInput';
import BaseButton from './BaseButton';
import clsx from 'clsx';
import { useForm } from '../../contexts/FormContext';
import BaseSearchField from './BaseSearchField';
import Section from '../UI/Section'
import BaseCard from '../UI/BaseCard';

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

    const handleGetData = () => {
        //Função que recebe os dados do back no update, vai ter que ser ajustado no form
    }

    console.log("formData: ", formData);

    return (
        //Envolve todo o componente

        <Section className="m-10 !border-0 flex flex-col">

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-center">
                <p className='underline'>{title}</p>
                <div className="w-2/4">
                    <BaseCard className="p-6">
                        {fields.map((field) => (
                            // Envolve cada campo
                            <div key={field.name}>
                                <Input
                                    name={field.name}
                                    type={field.type}
                                    value={formData[field.name] || ''}
                                    onChange={handleChange}
                                    required={field.required}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    label={field.label}
                                    placeholder={field.placeholder}
                                />
                            </div>
                        ))}
                    </BaseCard>
                </div>

                <div className="w-2/4">
                    <BaseCard className="p-6">
                        {/* Aqui a lista */}
                        {showList && (<div>
                            <BaseSearchField />
                        </div>)}
                    </BaseCard>
                </div>

                {/* Totalizador e botões */}
                {!hideFixedButtons &&
                    <BaseCard className="flex p-6 justify-between">
                        {!hideTotalizador && <div >Aqui vai ter o totalizador</div>}
                        <div>
                            <BaseButton isForm text={buttonText ?? "Salvar"} />
                        </div>
                    </BaseCard>}

            </form>
        </Section>

    );
};

export default BaseForm;
