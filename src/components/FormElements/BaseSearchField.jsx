import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "../../contexts/FormContext";
import { inputCss } from "./helpers";
import api from "../../api/axios";
import BaseButton from "./BaseButton";
import { toast } from "react-toastify";

const BaseSearchField = () => {
  const { formData, updateFormData } = useForm();
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

  //aqui
  const [loadFormData, setLoadFormData] = useState(true);

  useEffect(() => {
    if (
      loadFormData &&
      Array.isArray(formData.items) &&
      formData.items.length > 0
    ) {
      const updatedItems = formData.items.map((item) => ({
        ...item,
      }));
      setSelectedItems(updatedItems);
      setLoadFormData(false);
    }
  }, [formData, loadFormData]);

  const handleAddItem = (item) => {
    if (!selectedItems.some((i) => i.id === item.id)) {
      const updated = [
        ...selectedItems,
        {
          id: item.id,
          quantidade: 1,
          brinquedo_id: item.id,
          valor_unitario: item.valor_locacao,
          valor_total_item: item.valor_locacao,
          nome: item.nome,
        },
      ];
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
    api
      .delete(`/locacao-items/${id}`)
      .then((response) => {
        toast.success(response.data.message);
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
                <div>
                  <p>{item.nome ?? item.brinquedo_nome}</p>
                  <p>R${Number(item.valor_total_item).toFixed(2)}</p>
                </div>

                <div className="flex items-center gap-2">
                  {/* Botão diminuir quantidade */}
                  <button
                    type="button"
                    className="px-2 py-1 border rounded hover:bg-gray-200"
                    onClick={() => {
                      const updated = selectedItems.map((i) => {
                        if (i.id === item.id) {
                          const novaQuantidade = Math.max(
                            1,
                            (i.quantidade || 1) - 1
                          );
                          return {
                            ...i,
                            quantidade: novaQuantidade,
                            valor_total_item: i.valor_unitario * novaQuantidade,
                          };
                        }
                        return i;
                      });
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
                      const updated = selectedItems.map((i) => {
                        if (i.id === item.id) {
                          const novaQuantidade = (i.quantidade || 1) + 1;
                          return {
                            ...i,
                            quantidade: novaQuantidade,
                            valor_total_item: i.valor_unitario * novaQuantidade,
                          };
                        }
                        return i;
                      });
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
