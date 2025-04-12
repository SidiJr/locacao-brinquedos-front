import clsx from 'clsx'
import React from 'react'
import BaseButton from '../FormElements/BaseButton';
import BaseItemList from './BaseItemList';

const BaseList = () => {

    //Virá da api
    const listExample = [
        {
            name: "Alice",
            age: 28,
            email: "alice@example.com",
        },
        {
            name: "Bruno",
            age: 34,
            email: "bruno@example.com",
        },
        {
            name: "Carla",
            age: 25,
            email: "carla@example.com",
        },
    ];

    return (
        <section className={clsx("w-full flex flex-col items-center bg-red-100 h-screen")}>
            <div className="w-full flex flex-col items-center gap-4 py-4" >
                <BaseButton text={"Incluir"} />
                <div className={clsx("flex flex-col border bg-white p-6 gap-2 rounded-md w-3/4")}>
                    {listExample.map((item, index) => (<BaseItemList key={index} item={item} />))}
                </div>
            </div>
        </section>
    )
}

export default BaseList
