import BaseForm from "../../components/FormElements/BaseForm";
import { FormProvider } from "../../contexts/FormContext";

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
            <BaseForm fields={fields} title={"Cliente"} baseRoute="/clientes"/>
        </FormProvider>
    );

}

export default FormClientes;