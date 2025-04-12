import clsx from 'clsx'
import React from 'react'

const BaseItemList = ({ item }) => {
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
                <div key={key} className="flex-1 truncate">
                    {value}
                </div>
            ))}
        </div>
    )
}

export default BaseItemList
