import BaseList from "../../components/ListElements/BaseList";
import { ListProvider } from "../../contexts/ListContext";

const ListTipoBrinquedos = () => {
  const fields = ["id", "nome"];

  return (
    <ListProvider>
      <BaseList baseRoute="/tipo-brinquedos" fields={fields} />
    </ListProvider>
  );
};

export default ListTipoBrinquedos;