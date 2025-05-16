import BaseForm from "../../components/FormElements/BaseForm";
import { FormProvider } from "../../contexts/FormContext";

const FormClientes = () => {
  const fields = [
    {
      name: "nome",
      type: "text",
      label: "Nome",
      required: true,
      placeholder: "Nome",
    },
    {
      name: "cpf",
      type: "text",
      label: "CPF",
      required: true,
      placeholder: "CPF",
    },
    {
      name: "data_nascimento",
      type: "date",
      label: "Data de Nascimento",
      required: true,
    },
    {
      name: "endereco",
      type: "text",
      label: "Endereço",
      required: true,
      placeholder: "Endereço",
    },
    {
      name: "telefone",
      type: "tel",
      label: "Telefone",
      required: true,
      placeholder: "Telefone",
    },
  ];

  return (
    <FormProvider>
      <BaseForm
        fields={fields}
        title={"Clientes"}
        baseRoute="/clientes"
        hideTotalizador
      />
    </FormProvider>
  );
};

export default FormClientes;
