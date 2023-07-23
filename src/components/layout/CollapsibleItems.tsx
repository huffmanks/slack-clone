import Link from 'next/link'

import { Channel, Project } from '@prisma/client'
import { Hash } from 'lucide-react'

import { toKebabCase } from '@/utils/toKebabCase'

interface Props {
    basePath: string
    items: Project[] | Channel[]
}

const CollapsibleItems = ({ basePath, items }: Props) => {
    return (
        <>
            {items &&
                items.map((item) => (
                    <Link
                        key={item.id}
                        href={`${basePath}${item.id}`}
                        className='group flex items-center py-1 px-2 rounded-lg mb-2 transition-colors focus-visible:outline-none hover:bg-zinc-300 dark:hover:bg-zinc-900 focus-visible:bg-zinc-300 dark:focus-visible:bg-zinc-900 ring-offset-zinc-400 focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-zinc-300 dark:ring-offset-zinc-800 dark:focus-visible:ring-zinc-900'>
                        <Hash className='w-4 h-4 text-zinc-500 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-focus-visible:text-zinc-900 dark:group-focus-visible:text-zinc-100' />
                        <span className='truncate ml-3 pr-1 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-focus-visible:text-zinc-900 dark:group-focus-visible:text-zinc-100'>
                            {toKebabCase(item.title)}
                        </span>
                    </Link>
                ))}
        </>
    )
}

export default CollapsibleItems
