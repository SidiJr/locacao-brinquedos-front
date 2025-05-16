import BaseList from "../../components/ListElements/BaseList";
import { ListProvider } from "../../contexts/ListContext";

const ListPapeis = () => {
  const fields = ["id", "nome"];

  return (
    <ListProvider>
      <BaseList baseRoute="/papeis" fields={fields} />
    </ListProvider>
  );
};

export default ListPapeis;