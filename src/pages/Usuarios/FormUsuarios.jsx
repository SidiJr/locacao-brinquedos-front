import BaseForm from "../../components/FormElements/BaseForm";
import { FormProvider } from "../../contexts/FormContext";

const FormUsuarios = () => {
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
      name: "telefone",
      type: "tel",
      label: "Telefone",
      required: true,
      placeholder: "Telefone",
    },
    {
      name: "papel_id",
      type: "select",
      label: "Papel",
      required: true,
      placeholder: "Papel",
      route: "papeis"
    },
  ];

  return (
    <FormProvider>
      <BaseForm
        fields={fields}
        title={"Usuários"}
        baseRoute="/usuarios"
        hideTotalizador
      />
    </FormProvider>
  );
};

export default FormUsuarios;
