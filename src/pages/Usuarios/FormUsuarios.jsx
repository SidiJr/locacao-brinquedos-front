import BaseForm from "../../components/FormElements/BaseForm";
import { FormProvider } from "../../contexts/FormContext";

const FormUsuarios = () => {

    const fields = [
        {
            name: 'nome',
            type: 'text',
            label: 'Nome',
            required: true,
            placeholder: 'Nome do usuario',
        },
        {
            name: 'cpf_usuario',
            type: 'text',
            label: 'CPF Usuario',
            required: 'true',
            placeholder: 'CPF do usuário',
            
        },
        {
            name: 'telefone',
            type: 'text',
            label: 'Telefone Usuario',
            required: 'true',
            placeholder: 'Telefone do usuário',
            
        },
    ];

    return (
        <FormProvider>
            <BaseForm fields={fields} title={"Usuários"} />
        </FormProvider>
    );

}

export default FormUsuarios;