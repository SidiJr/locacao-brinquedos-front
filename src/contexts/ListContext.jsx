import React, { createContext, useState, useContext } from "react";

const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [listData, setListData] = useState([]);

  return (
    <ListContext.Provider value={{ listData, setListData }}>
      {children}
    </ListContext.Provider>
  );
};

export const useList = () => {
  return useContext(ListContext);
};
