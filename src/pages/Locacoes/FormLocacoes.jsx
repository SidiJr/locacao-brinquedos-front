import BaseForm from "../../components/FormElements/BaseForm";
import { FormProvider } from "../../contexts/FormContext";

const FormLocacoes = () => {

    const fields = [
        {
            name: 'cpf',
            type: 'text',
            label: 'CPF',
            required: true,
            placeholder: 'CPF do Cliente',
        },
        {
            name: 'data_atual',
            type: 'date',
            label: 'Data Atual',
            required: true,
        },
        {
            name: 'data_devolucao',
            type: 'date',
            label: 'Data Devolução',
            required: true,
        },
    ];

    return (
        <FormProvider>
            <BaseForm fields={fields} title={"Locação"} showList />
        </FormProvider>
    );

}

export default FormLocacoes;