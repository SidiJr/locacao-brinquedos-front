import BaseForm from "../../components/FormElements/BaseForm";
import { FormProvider } from "../../contexts/FormContext";

const FormPagamentos = () => {

    const fields = [
        {
            name: 'nome',
            type: 'text',
            label: 'Nome',
            required: true,
            placeholder: 'Nome do cliente',
        },
        {
            name: 'codigo',
            type: 'text',
            label: 'Código',
            required: true,
            placeholder: 'Código do cliente',
        },
        {
            name: 'cpf_cliente',
            type: 'text',
            label: 'CPF Cliente',
            required: 'true',
            placeholder: 'CPF do cliente',
            
        },
        {
            name: 'valor_total_pagamento',
            type: 'number',
            label: 'Valor Total Pagamento',
            required: 'true',
            placeholder: 'Valor total do pagamento',
            
        },
    ];

    return (
        <FormProvider>
            <BaseForm fields={fields} title={"Pagamentos"} />
        </FormProvider>
    );

}

export default FormPagamentos;