import { FormProvider } from "../../contexts/FormContext";
import Form from "./FormElements/BaseForm";

const FormClientes = () => {

    const fields = [
        {
            name: 'nome',
            type: 'text',
            label: 'Nome',
            required: true,
        },
        {
            name: 'cpf',
            type: 'text',
            label: 'CPF',
            required: true,
        },
        {
            name: 'data_nascimento',
            type: 'date',
            label: 'Data Nascimento',
            required: true,
        },
        {
            name: 'endereco',
            type: 'text',
            label: 'Endereço',
            required: true,
        },
        {
            name: 'telefone',
            type: 'tel',
            label: 'Telefone',
            required: true,
        },
    ];

    return (
        <FormProvider>
            <Form fields={fields} title={"Cliente"} />
        </FormProvider>
    );

}

export default FormClientes;