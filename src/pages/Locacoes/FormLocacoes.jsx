import BaseForm from "../../components/FormElements/BaseForm";
import { FormProvider } from "../../contexts/FormContext";

const FormLocacoes = () => {

    const fields = [
        {
            name: 'data_atual',
            type: 'date',
            label: 'Data Atual',
            required: true,
        },
        {
            name: 'valor_unitario',
            type: 'number',
            label: 'Valor Unitario',
            required: true,
        },
        {
            name: 'valor_total',
            type: 'number',
            label: 'Valor Total',
            required: true,
        },
        {
            name: 'data_devolucao',
            type: 'date',
            label: 'Data Devolução',
            required: true,
        },
        {
            name: 'cpf',
            type: 'text',
            label: 'CPF',
            required: true,
            placeholder: 'CPF do Cliente',
        },

    ];

    return (
        <FormProvider>
            <BaseForm fields={fields} title={"Locação"} showList baseRoute="/locacoes"/>
        </FormProvider>
    );

}

export default FormLocacoes;