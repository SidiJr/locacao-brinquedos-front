import BaseForm from "../../components/FormElements/BaseForm";
import { FormProvider } from "../../contexts/FormContext";

const FormTipoBrinquedos = () => {

    const fields = [
        {
            name: 'nome',
            type: 'text',
            label: 'Nome',
            required: true,
            placeholder: 'Tipo do brinquedo',
        },
        {
            name: 'codigo',
            type: 'text',
            label: 'Código',
            required: true,
            placeholder: 'Código do tipo de brinquedo',
        },
        {
            name: 'cpf_cliente',
            type: 'text',
            label: 'CPF Cliente',
            required: 'true',
            placeholder: 'CPF do cliente',
            
        },
    ];

    return (
        <FormProvider>
            <BaseForm fields={fields} title={"Tipos de Brinquedos"} baseRoute="/tipo-brinquedos"/>
        </FormProvider>
    );

}

export default FormTipoBrinquedos;