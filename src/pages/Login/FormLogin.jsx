import BaseForm from "../../components/FormElements/BaseForm";
import { FormProvider } from "../../contexts/FormContext";

const FormLogin = () => {
    const fields = [
        {
            name: 'usuario',
            type: 'text',
            label: 'Usuário',
            required: true,
        },
        {
            name: 'password',
            type: 'password',
            label: 'Senha',
            required: true,
        },
    ];

    const handleSubmit = (data) => {
    };

    return (
        <div className="w-full px-20 -mt-15">
            <FormProvider>
                <BaseForm fields={fields} formClass={"w-4/5 min-w-60 max-w-90"} onSubmit={handleSubmit} buttonText={"Entrar"} hideFixedButtons hideTotalizador/>
            </FormProvider>
        </div>
    );
};

export default FormLogin;
