import BaseForm from "../../components/FormElements/BaseForm";
import { FormProvider } from "../../contexts/FormContext";

const FormPapeis = () => {

    const fields = [
        {
            name: 'nome',
            type: 'text',
            label: 'Nome',
            required: true,
            placeholder: 'Nome do papel',
        },
        {
            name: 'codigo',
            type: 'text',
            label: 'Código',
            required: true,
            placeholder: 'Código do papel',
        },
    ];

    return (
        <FormProvider>
            <BaseForm fields={fields} title={"Papeis"} baseRoute="/papeis"/>
        </FormProvider>
    );

}

export default FormPapeis;