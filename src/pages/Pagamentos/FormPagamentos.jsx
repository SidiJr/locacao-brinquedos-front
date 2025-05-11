import BaseForm from "../../components/FormElements/BaseForm";
import { FormProvider } from "../../contexts/FormContext";

const FormPagamentos = () => {
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
      type: "text",
      label: "Código",
      required: true,
      placeholder: "Código",
    },
    {
      name: "cpf_cliente",
      type: "text",
      label: "CPF do Cliente",
      required: "true",
      placeholder: "CPF do cliente",
    },
    {
      name: "valor_total_pagamento",
      type: "number",
      label: "Valor Total do Pagamento",
      required: "true",
      placeholder: "Valor Total do Pagamento",
    },
    {
      name: "valor_locacao",
      type: "number",
      label: "Valor Locacao",
      required: "true",
      placeholder: "Valor da Locação",
    },
    {
      name: "data_pagamento",
      type: "date",
      label: "Data do Pagamento",
      required: "true",
    },
    {
      name: "locacao_id",
      type: "select",
      label: "Locação",
      required: "true",
      rota: "/locacoes",
    },
  ];

  return (
    <FormProvider>
      <BaseForm fields={fields} title={"Pagamentos"} baseRoute="/pagamentos" hideTotalizador/>
    </FormProvider>
  );
};

export default FormPagamentos;
