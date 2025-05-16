import clsx from "clsx";
import React from "react";
import BaseButton from "../FormElements/BaseButton";
import { listItemCss } from "./helpers";
import api from "../../api/axios";
import { useList } from "../../contexts/ListContext";
import { toast } from "react-toastify";

const BaseItemList = ({ item, fields, baseRoute, id, canEdit = true }) => {
  const { listData, setListData } = useList();

  const handleDelete = () => {
    api
      .delete(`${baseRoute}/${id}`)
      .then((response) => {
        const newList = listData.filter((i) => i.id !== id);
        setListData(newList);
        toast.success(response.data.message ?? "Excluído com sucesso!");
      })
      .catch((error) => {
        console.error(error);
        if (error.response?.data?.error) {
          toast.error(error.response.data.error);
        } else {
          toast.error("Erro desconhecido ao deletar.");
        }
      });
  };

  return (
    <div className={clsx(listItemCss)}>
      {Object.entries(item)
        .filter(([key]) => fields.includes(key))
        .map(([key, value]) => (
          <div key={key} className="items-center truncate">
            {value}
          </div>
        ))}
      {canEdit &&
        <div className="flex gap-2">
          <BaseButton
            route={`${baseRoute}/form/${id}`}
            action="editar"
            icon="fa-solid fa-pen"
          />
          <BaseButton
            onClick={handleDelete}
            action="deletar"
            icon="fa-solid fa-trash"
          />
        </div>
      }
    </div>
  );
};

export default BaseItemList;
