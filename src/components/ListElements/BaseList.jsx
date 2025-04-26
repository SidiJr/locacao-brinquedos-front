import clsx from 'clsx'
import React from 'react'
import BaseButton from '../FormElements/BaseButton';
import BaseCard from '../UI/Cards/BaseCard';
import Section from '../UI/Section';
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
        <Section className="m-10 !border-0 flex flex-col items-center gap-2">
            <BaseButton text={"Incluir"}/>

            <BaseCard className="gap-2 flex flex-col p-5">
                {listExample.map((item, index) => (<BaseItemList key={index} item={item} />))}
            </BaseCard>
        </Section>
    )
}

export default BaseList
