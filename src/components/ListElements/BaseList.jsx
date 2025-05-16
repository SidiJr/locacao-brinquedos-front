import React, { useEffect } from "react";
import BaseButton from "../FormElements/BaseButton";
import BaseCard from "../UI/Cards/BaseCard";
import Section from "../UI/Section";
import BaseItemList from "./BaseItemList";
import api from "../../api/axios";
import { useList } from "../../contexts/ListContext";

const BaseList = ({ baseRoute, fields, canEdit = true }) => {
  const { listData, setListData } = useList();

  useEffect(() => {
    api
      .get(baseRoute)
      .then((response) => {
        setListData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Section className="m-10 !border-0 flex flex-col items-center gap-2">
      {canEdit && <BaseButton text={"Incluir"} route={`${baseRoute}/form`} />}

      <BaseCard className="gap-2 flex flex-col p-5">
        {listData.length > 0 ? (
          listData.map((item, index) => (
            <BaseItemList
              key={index}
              item={item}
              fields={fields}
              baseRoute={baseRoute}
              id={item.id}
              canEdit={canEdit}
            />
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </BaseCard>
    </Section>
  );
};

export default BaseList;
