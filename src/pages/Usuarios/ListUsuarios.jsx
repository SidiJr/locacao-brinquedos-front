import BaseList from "../../components/ListElements/BaseList";
import { ListProvider } from "../../contexts/ListContext";

const ListUsuarios = () => {
  const fields = ["id", "nome"];

  return (
    <ListProvider>
      <BaseList baseRoute="/usuarios" fields={fields} />
    </ListProvider>
  );
};

export default ListUsuarios;