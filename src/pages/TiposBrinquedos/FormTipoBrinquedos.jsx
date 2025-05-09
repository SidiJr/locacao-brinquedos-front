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
    ];

    return (
        <FormProvider>
            <BaseForm fields={fields} title={"Tipos de Brinquedos"} baseRoute="/tipo-brinquedos" hideTotalizador/>
        </FormProvider>
    );

}

export default FormTipoBrinquedos;