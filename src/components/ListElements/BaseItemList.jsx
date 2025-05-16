import clsx from "clsx";
import React from "react";
import BaseButton from "../FormElements/BaseButton";
import { listItemCss } from "./helpers";
import api from "../../api/axios";
import { useList } from "../../contexts/ListContext";

const BaseItemList = ({ item, fields, baseRoute, id, canEdit = true }) => {
  const { listData, setListData } = useList();

  const handleDelete = () => {
    api
      .delete(`${baseRoute}/${id}`)
      .then((response) => {
        const newList = listData.filter((i) => i.id !== id);
        setListData(newList);
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
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
          <BaseButton text="Editar" route={`${baseRoute}/form/${id}`} />
          <BaseButton text="Deletar" onClick={handleDelete} />
        </div>
      }
    </div>
  );
};

export default BaseItemList;
