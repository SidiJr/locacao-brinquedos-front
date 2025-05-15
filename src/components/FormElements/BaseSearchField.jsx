import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "../../contexts/FormContext";
import { inputCss } from "./helpers";
import api from "../../api/axios";
import BaseButton from "./BaseButton";

const BaseSearchField = () => {
  const { updateFormData } = useForm();
  const [query, setQuery] = useState("");
  const [resultados, setResultados] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef(null);

  useEffect(() => {
    if (!query) {
      setResultados([]);
      setLoading(false);
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    setLoading(true);

    debounceRef.current = setTimeout(() => {
      api
        .get("/brinquedos/filtros", {
          params: { nome: query },
        })
        .then((res) => {
          setResultados(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Erro ao buscar brinquedos:", err);
          setLoading(false);
        });
    }, 500);
  }, [query]);

  const handleAddItem = (item) => {
    if (!selectedItems.some((i) => i.id === item.id)) {
      const updated = [...selectedItems, { ...item, quantidade: 1 }];
      setSelectedItems(updated);
      updateFormData("items", updated);
    }
    setQuery("");
    setResultados([]);
  };

  const handleRemoveItem = (id) => {
    const updated = selectedItems.filter((item) => item.id !== id);
    setSelectedItems(updated);
    updateFormData("items", updated);
  };

  return (
    <>
      <input
        type="text"
        className={clsx(inputCss)}
        placeholder="Pesquise por Itens"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && (
        <div className="border-2 border-gray-200 rounded-md mt-2 p-2 max-h-40 overflow-y-auto w-full">
          {loading && <p className="text-gray-500">Buscando...</p>}

          {!loading && resultados.length === 0 && (
            <p className="text-gray-500">Nenhum resultado encontrado.</p>
          )}

          {!loading && resultados.length > 0 && (
            <ul>
              {resultados.map((option) => (
                <li
                  key={option.id}
                  className="cursor-pointer py-1 px-1 hover:bg-gray-200"
                  onClick={() => handleAddItem(option)}
                >
                  {option.nome}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {selectedItems.length > 0 && (
        <div className="mt-4 w-full">
          <h3>Itens Selecionados:</h3>
          <ul>
            {selectedItems.map((item) => (
              <li
                key={item.id}
                className="border-2 border-gray-200 rounded-md mt-1 p-1 flex justify-between items-center"
              >
                <span>{item.nome}</span>

                <div className="flex items-center gap-2">
                  {/* Botão diminuir quantidade */}
                  <button
                    type="button"
                    className="px-2 py-1 border rounded hover:bg-gray-200"
                    onClick={() => {
                      const updated = selectedItems.map((i) =>
                        i.id === item.id
                          ? {
                              ...i,
                              quantidade: Math.max(1, (i.quantidade || 1) - 1),
                            }
                          : i
                      );
                      setSelectedItems(updated);
                      updateFormData("items", updated);
                    }}
                  >
                    -
                  </button>

                  {/* Quantidade atual */}
                  <span>{item.quantidade || 1}</span>

                  {/* Botão aumentar quantidade */}
                  <button
                    type="button"
                    className="px-2 py-1 border rounded hover:bg-gray-200"
                    onClick={() => {
                      const updated = selectedItems.map((i) =>
                        i.id === item.id
                          ? { ...i, quantidade: (i.quantidade || 1) + 1 }
                          : i
                      );
                      setSelectedItems(updated);
                      updateFormData("items", updated);
                    }}
                  >
                    +
                  </button>

                  {/* Botão deletar */}
                  <BaseButton
                    onClick={() => handleRemoveItem(item.id)}
                    action="deletar"
                    icon="fa-solid fa-trash"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default BaseSearchField;
