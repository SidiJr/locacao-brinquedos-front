import BaseList from "../../components/ListElements/BaseList";
import { ListProvider } from "../../contexts/ListContext";

const ListLocacoes = () => {
  const fields = ["id", "codigo"];

  return (
    <ListProvider>
      <BaseList baseRoute="/locacoes" fields={fields} />
    </ListProvider>
  );
};

export default ListLocacoes;