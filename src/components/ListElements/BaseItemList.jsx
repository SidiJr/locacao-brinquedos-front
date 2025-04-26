import clsx from 'clsx'
import React from 'react'
import BaseButton from '../FormElements/BaseButton'
import { listItemCss } from './helpers'

const BaseItemList = ({ item }) => {

    const handleDelete = () => {
        //Aqui vai deletar o item da lista e requisitar o back, tem que setar o state, provavelmente criar um contexto pra listagem
    }

    return (
        <div
            className={clsx(
                listItemCss
            )}
        >
            {Object.entries(item).map(([key, value]) => (
                <div key={key} className="items-center truncate">
                    {value}
                </div>
            ))}
            <BaseButton text="Deletar" onClick={handleDelete} />
        </div>
    )
}

export default BaseItemList
