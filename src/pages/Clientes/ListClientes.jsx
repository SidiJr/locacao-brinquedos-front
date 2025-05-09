import BaseList from "../../components/ListElements/BaseList";
import { ListProvider } from "../../contexts/ListContext";

const ListClientes = () => {
  const fields = ["id", ""];

  return (
    <ListProvider>
      <BaseList baseRoute="/clientes" fields={fields} />
    </ListProvider>
  );
};

export default ListClientes;