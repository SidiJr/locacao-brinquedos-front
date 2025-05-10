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
        {
            name: 'valor_locacao',
            type: 'number',
            label: 'Valor Locacao',
            required: 'true',
            placeholder: 'Valor total do pagamento',
            
        },
        {
            name: 'data_pagamento',
            type: 'date',
            label: 'Data Pagamento',
            required: 'true',
            placeholder: 'Data do pagamento',
            
        },
        {
            name: 'locacao_id',
            type: 'select',
            label: 'Locação',
            required: 'true',
            placeholder: 'Locação',
            
        },
    ];

    return (
        <FormProvider>
            <BaseForm fields={fields} title={"Pagamentos"} baseRoute="/pagamentos"/>
        </FormProvider>
    );

}

export default FormPagamentos;