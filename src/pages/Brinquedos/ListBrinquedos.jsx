import BaseList from "../../components/ListElements/BaseList";
import { ListProvider } from "../../contexts/ListContext";

const ListBrinquedos = () => {
  const fields = ["id", "nome"];

  return (
    <ListProvider>
      <BaseList baseRoute="/brinquedos" fields={fields} />
    </ListProvider>
  );
};

export default ListBrinquedos;