import { useEffect, useMemo, useState } from "react";
import Input from "./BaseInput";
import BaseButton from "./BaseButton";
import { useForm } from "../../contexts/FormContext";
import BaseSearchField from "./BaseSearchField";
import Section from "../UI/Section";
import BaseCard from "../UI/Cards/BaseCard";
import api from "../../api/axios";
import { useNavigate, useParams } from "react-router-dom";
import { generateSchema } from "./helpers";
import { toast } from "react-toastify";

// Necessário passar um array de objetos com os fields
const BaseForm = ({
  fields,
  formClass,
  labelClass,
  inputClass,
  buttonText,
  title,
  showList,
  hideTotalizador,
  baseRoute,
}) => {
  const { formData, updateFormData, setFormData } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const schema = generateSchema(fields);

    schema
      .validate(formData, { abortEarly: false })
      .then(() => {
        const requestUrl = id ? `${baseRoute}/${id}` : baseRoute;
        const method = id ? "put" : "post";

        return api[method](requestUrl, formData);
      })
      .then((response) => {
        toast.success(response.data);
        navigate(`${baseRoute}/list`);
      })
      .catch((err) => {
        if (err.name === "ValidationError") {
          const errors = {};
          err.inner.forEach((error) => {
            errors[error.path] = error.message;
          });
          setValidationErrors(errors);
        } else {
          console.error(err);
          toast.error(err.response.data.message);
        }
      });
  };

  useEffect(() => {
    if (id) {
      api
        .get(`${baseRoute}/${id}`)
        .then((response) => {
          setFormData(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [baseRoute, id, setFormData]);

  const total = useMemo(() => {
    return (
      formData.items?.reduce((acc, item) => {
        return acc + (item.quantidade || 0) * (item.valor_locacao || 0);
      }, 0) || 0
    ).toFixed(2);
  }, [formData.items]);

  useEffect(() => {
    if (!hideTotalizador && total) {
      updateFormData("valor_total", total);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  console.log(formData, total);

  return (
    //Envolve todo o componente
    <Section className="m-10 !border-0 flex flex-col">
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-6 items-center`}
        noValidate
      >
        <p className="underline">{title}</p>
        <div className={`w-96 ${formClass}`}>
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
                  route={field.route}
                  error={validationErrors[field.name]}
                />
              </div>
            ))}
          </BaseCard>
        </div>

        {showList && (
          <div className="w-96">
            <BaseCard className="p-6">
              {/* Aqui a lista */}
              <div>
                <BaseSearchField baseRoute={baseRoute} />
              </div>
            </BaseCard>
          </div>
        )}

        {/* Totalizador e botões */}

        {hideTotalizador ? (
          <BaseButton
            isForm
            text={buttonText ?? "Salvar"}
            type="submit"
            action="incluir"
          />
        ) : (
          !hideTotalizador && (
            <BaseCard className="fixed bottom-0 left-60 right-0 flex justify-between items-center px-6 py-4 bg-white shadow z-50">
              <div>Valor Total da Locação: R$ {total}</div>
              <div>
                <BaseButton
                  isForm
                  text={buttonText ?? "Salvar"}
                  type="submit"
                  action="incluir"
                />
              </div>
            </BaseCard>
          )
        )}
      </form>
    </Section>
  );
};

export default BaseForm;
