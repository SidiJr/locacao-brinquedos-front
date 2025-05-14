import BaseForm from "../../components/FormElements/BaseForm";
import { FormProvider } from "../../contexts/FormContext";

const FormPermissoes = () => {
  const fields = [
    {
      name: "nome",
      type: "text",
      label: "Nome",
      required: true,
      placeholder: "Nome",
    },
    {
      name: "codigo",
      type: "number",
      label: "Código",
      required: true,
      placeholder: "Código",
    },
  ];

  return (
    <FormProvider>
      <BaseForm
        fields={fields}
        title={"Permissões"}
        baseRoute="/permissoes"
        hideTotalizador
      />
    </FormProvider>
  );
};

export default FormPermissoes;
