import BaseList from "../../components/ListElements/BaseList";
import { ListProvider } from "../../contexts/ListContext";

const ListPagamentos = () => {
  const fields = ["id", ""];

  return (
    <ListProvider>
      <BaseList baseRoute="/pagamentos" fields={fields} />
    </ListProvider>
  );
};

export default ListPagamentos;