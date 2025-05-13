import BaseForm from "../../components/FormElements/BaseForm";
import { FormProvider } from "../../contexts/FormContext";

const FormPermissoes = () => {

    const fields = [

    ];

    return (
        <FormProvider>
            <BaseForm fields={fields} title={"Permissões"} baseRoute="/permissoes" hideTotalizador/>
        </FormProvider>
    );

}

export default FormPermissoes;