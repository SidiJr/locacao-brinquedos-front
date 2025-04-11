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

    // Função para processar o envio do formulário
    const handleSubmit = (data) => {
        console.log('Formulário de login enviado com os dados:', data);
        // Aqui você pode chamar uma API ou executar qualquer ação com os dados
    };

    return (
        <div className="w-full px-50">
            <FormProvider>
                <BaseForm fields={fields} onSubmit={handleSubmit} buttonText={"Entrar"} hideFixedButtons/>
            </FormProvider>
        </div>
    );
};

export default FormLogin;
