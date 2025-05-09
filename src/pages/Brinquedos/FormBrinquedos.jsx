import BaseForm from "../../components/FormElements/BaseForm";
import { FormProvider } from "../../contexts/FormContext";

const FormClientes = () => {
  const fields = [
    {
      name: "nome",
      type: "text",
      label: "Nome",
      required: true,
    },
    {
      name: "codigo",
      type: "number",
      label: "Código",
      required: true,
    },
    {
      name: "marca_id",
      type: "select",
      route: "/marcas",
      label: "Marca",
      required: true,
    },
    {
      name: "tipo_brinquedo_id",
      type: "select",
      route: "/tipo-brinquedos",
      label: "Tipo do Brinquedo",
      required: true,
    },
    {
      name: "valor_locacao",
      type: "number",
      label: "Valor da Locação",
      required: true,
    },
    {
      name: "data_aquisicao",
      type: "date",
      label: "Data de Aquisição",
      required: true,
    },
  ];

  return (
    <FormProvider>
      <BaseForm fields={fields} title={"Brinquedos"} baseRoute="/brinquedos" hideTotalizador/>
    </FormProvider>
  );
};

export default FormClientes;
