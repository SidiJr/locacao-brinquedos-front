import BaseForm from "../../components/FormElements/BaseForm";
import { FormProvider } from "../../contexts/FormContext";

const FormMarcas = () => {

    const fields = [
        {
            name: 'nome',
            type: 'text',
            label: 'Nome',
            required: true,
            placeholder: 'Nome da marca',
        },
        {
            name: 'codigo',
            type: 'text',
            label: 'Código',
            required: true,
            placeholder: 'Código da marca',
        }
    ];

    return (
        <FormProvider>
            <BaseForm fields={fields} title={"Marca"} />
        </FormProvider>
    );

}

export default FormMarcas;