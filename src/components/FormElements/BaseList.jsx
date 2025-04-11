import clsx from 'clsx';
import React, { useState } from 'react'
import { useForm } from '../../contexts/FormContext';

const BaseSearchField = () => {

    const { formData, updateFormData } = useForm();
    const [query, setQuery] = useState(""); // Para armazenar o texto de pesquisa
    const [selectedItems, setSelectedItems] = useState([]); // Para armazenar itens selecionados
    const [options, setOptions] = useState([
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5"
    ]); // Lista de opções disponíveis

    // Filtra as opções com base no texto de pesquisa
    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(query.toLowerCase())
    );

    // Adiciona o item à lista de selecionados
    const handleAddItem = (item) => {
        if (!selectedItems.includes(item)) {
            setSelectedItems([...selectedItems, item]);
            updateFormData("list", [...selectedItems, item])
        }
        setQuery(""); // Limpa o campo de pesquisa após adicionar o item
    };


    return (
        <>
            {/* Campo de pesquisa */}
            <input
                type="text"
                className={clsx("w-full px-4 py-3 rounded-md border",
                    "border-neutral-300 dark:border-neutral-600",
                    "bg-white dark:bg-neutral-900",
                    "placeholder-neutral-400 dark:placeholder-neutral-500",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    "transition duration-150 ease-in-out",)}
                placeholder="Pesquise por itens"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            {/* Lista de opções filtradas */}
            {query && (
                <ul className="border border-neutral-300 rounded-md mt-2 p-2 max-h-40 overflow-y-auto w-full">
                    {filteredOptions.map((option) => (
                        <li
                            key={option}
                            className="cursor-pointer py-1 px-2 hover:bg-neutral-200"
                            onClick={() => handleAddItem(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}

            {/* Itens selecionados */}
            {selectedItems.length > 0 && (
                <div className="mt-4 w-full">
                    <h3>Itens Selecionados:</h3>
                    <ul>
                        {selectedItems.map((item, index) => (
                            <li key={index} className="border border-neutral-300 rounded-md mt-1 p-2">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default BaseSearchField;
