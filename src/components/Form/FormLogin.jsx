import Form from "./FormElements/BaseForm";

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
            <Form fields={fields} onSubmit={handleSubmit} formClass={"gap-4"} labelClass={"underline"} buttonText={"Entrar"} />
        </div>
    );
};

export default FormLogin;
