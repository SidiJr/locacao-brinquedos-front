import BaseList from "../../components/ListElements/BaseList";
import { ListProvider } from "../../contexts/ListContext";

const ListMarcas = () => {
  const fields = ["id", "nome"];

  return (
    <ListProvider>
      <BaseList baseRoute="/marcas" fields={fields} />
    </ListProvider>
  );
};

export default ListMarcas;
