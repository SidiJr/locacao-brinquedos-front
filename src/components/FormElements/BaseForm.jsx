import React, { useState, useCallback, useEffect } from "react";
import Input from "./BaseInput";
import BaseButton from "./BaseButton";
import { useForm } from "../../contexts/FormContext";
import BaseSearchField from "./BaseSearchField";
import Section from "../UI/Section";
import BaseCard from "../UI/Cards/BaseCard";
import api from "../../api/axios";
import { useNavigate, useParams } from "react-router-dom";

// Necessário passar um array de objetos com os fields e a função de submit
const BaseForm = ({
  fields,
  formClass,
  labelClass,
  inputClass,
  buttonText,
  title,
  showList,
  hideTotalizador,
  hideFixedButtons,
  baseRoute,
}) => {
  const { formData, updateFormData } = useForm();
  const navigate = useNavigate();
  const {id} = useParams();

  console.log(id)

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  const handleSubmit = (e) => {
    //aqui vão ser enviados os dados para o back
    e.preventDefault();
    api
      .post(baseRoute, formData)
      .then((response) => {
        //falta o toast
        console.log(response);
        navigate(`${baseRoute}/list`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // Esperar rota do back
  useEffect(()=>{
    api
      .get(baseRoute)
      .then((response) => {
        //falta o toast
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  },[])

  return (
    //Envolve todo o componente
    <Section className="m-10 !border-0 flex flex-col">
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-6 items-center`}
      >
        <p className="underline">{title}</p>
        <div className={`w-2/4 ${formClass}`}>
          <BaseCard className="p-6">
            {fields.map((field) => (
              // Envolve cada campo
              <div key={field.name}>
                <Input
                  name={field.name}
                  type={field.type}
                  value={formData[field.name] || ""}
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

        {showList && (
          <div className="w-2/4">
            <BaseCard className="p-6">
              {/* Aqui a lista */}
              <div>
                <BaseSearchField />
              </div>
            </BaseCard>
          </div>
        )}

        {/* Totalizador e botões */}
        {!hideFixedButtons && (
          <BaseCard className="fixed bottom-0 left-60 right-0 flex justify-between items-center px-6 py-4 bg-white shadow z-50">
            {!hideTotalizador && <div>Aqui vai ter o totalizador</div>}
            <div>
              <BaseButton
                isForm
                text={buttonText ?? "Salvar"}
                onCLick={() => handleSubmit(e)}
              />
            </div>
          </BaseCard>
        )}
        {hideFixedButtons && (
          <BaseButton
            isForm
            text={buttonText ?? "Salvar"}
            onCLick={() => handleSubmit(e)}
          />
        )}
      </form>
    </Section>
  );
};

export default BaseForm;
