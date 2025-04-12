import clsx from 'clsx'
import React from 'react'
import BaseButton from '../FormElements/BaseButton'

const BaseItemList = ({ item }) => {

    const handleDelete = () => {
        //Aqui vai deletar o item da lista e requisitar o back, tem que setar o state, provavelmente criar um contexto pra listagem
    }

    return (
        <div
            className={clsx(
                'w-full px-4 py-1 rounded-md border',
                'border-neutral-300 dark:border-neutral-600',
                'bg-white dark:bg-neutral-900',
                'text-neutral-800 dark:text-neutral-100',
                'hover:bg-neutral-100 dark:hover:bg-neutral-800',
                'transition duration-150 ease-in-out',
                'cursor-pointer',
                'flex gap-4'
            )}
        >
            {Object.entries(item).map(([key, value]) => (
                <div key={key} className="flex-1 flex items-center truncate">
                    {value}
                </div>
            ))}
            <BaseButton text="Deletar" onClick={handleDelete}/>
        </div>
    )
}

export default BaseItemList
