import { FormProvider } from "../../contexts/FormContext";
import Form from "./FormElements/BaseForm";

const FormLocacao = () => {

    const fields = [
        {
            name: 'cliente',
            type: 'text',
            label: 'Cliente',
            required: true,
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
            <Form fields={fields} title={"Locação"} showList />
        </FormProvider>
    );

}

export default FormLocacao;