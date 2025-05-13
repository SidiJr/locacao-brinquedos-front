import BaseForm from "../../components/FormElements/BaseForm";
import { FormProvider } from "../../contexts/FormContext";

const FormUsuarios = () => {

    const fields = [
        {
            name: 'nome',
            type: 'text',
            label: 'Nome',
            required: true,
            placeholder: 'Nome',
        },
        {
            name: 'cpf_usuario',
            type: 'text',
            label: 'CPF',
            required: true,
            placeholder: 'CPF',
            
        },
        {
            name: 'telefone',
            type: 'text',
            label: 'Telefone',
            required: true,
            placeholder: 'Telefone',
            
        },
    ];

    return (
        <FormProvider>
            <BaseForm fields={fields} title={"Usuários"} baseRoute="/usuarios" hideTotalizador/>
        </FormProvider>
    );

}

export default FormUsuarios;