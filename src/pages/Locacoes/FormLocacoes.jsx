import BaseForm from "../../components/FormElements/BaseForm";
import { FormProvider } from "../../contexts/FormContext";

const FormLocacoes = () => {
  const fields = [
    {
      name: "codigo",
      type: "number",
      label: "Código",
      required: true,
      placeholder: "Código",
    },
    {
      name: "cliente_id",
      type: "select",
      label: "Cliente",
      required: true,
      placeholder: "Cliente",
      route: "/clientes",
    },
    {
      name: "data_atual",
      type: "date",
      label: "Data Atual",
      required: true,
    },
    // Vão estar no searchField / Totalizador
    // {
    //   name: "valor_unitario",
    //   type: "number",
    //   label: "Valor Unitário",
    //   required: true,
    // },
    // {
    //   name: "valor_total",
    //   type: "number",
    //   label: "Valor Total",
    //   required: true,
    // },
    {
      name: "data_devolucao",
      type: "date",
      label: "Data de Devolução",
      required: true,
    },
  ];

  return (
    <FormProvider>
      <BaseForm
        fields={fields}
        title={"Locação"}
        showList
        baseRoute="/locacoes"
      />
    </FormProvider>
  );
};

export default FormLocacoes;
