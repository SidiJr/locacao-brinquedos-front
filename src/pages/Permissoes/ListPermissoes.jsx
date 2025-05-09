import BaseList from "../../components/ListElements/BaseList";
import { ListProvider } from "../../contexts/ListContext";

const ListPermissoes = () => {
  const fields = ["id", ""];

  return (
    <ListProvider>
      <BaseList baseRoute="/permissoes" fields={fields} />
    </ListProvider>
  );
};

export default ListPermissoes;