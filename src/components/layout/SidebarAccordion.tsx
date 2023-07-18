'use client'

import Link from 'next/link'

import { PlusIcon, ChevronDownIcon, HashtagIcon } from '@heroicons/react/24/solid'

import { useDashboard } from '@/providers/DashboardProvider'
import useIsMounted from '@/app/hooks/useIsMounted'
import { toKebabCase } from '@/utils/toKebabCase'

import IconButton from '../ui/IconButton'

interface Props {
    id: string
    title: string
    basePath: string
}

const SidebarAccordion = ({ id, title, basePath }: Props) => {
    const { projects: items, isOpen, handleIsOpen } = useDashboard()

    if (!useIsMounted()) return null

    return (
        <div className='mb-4'>
            <div className='flex items-center justify-between gap-2 mb-3'>
                <IconButton id={id} className='group flex items-center py-1 px-2 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-900 transition-colors' onClick={handleIsOpen}>
                    <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen[id] ? 'rotate-0' : '-rotate-90'}`} />
                    <span className='ml-3 pr-1 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors'>{title}</span>
                </IconButton>

                <IconButton className='rounded-full p-1 hover:bg-zinc-300 dark:hover:bg-zinc-900 transition-colors' onClick={() => console.log('hello')}>
                    <PlusIcon className='w-3.5 h-3.5' />
                </IconButton>
            </div>
            {isOpen[id] && (
                <div className='mb-4 pb-4 overflow-y-auto max-h-64 border-b border-zinc-300 dark:border-zinc-700 transition-colors'>
                    {items &&
                        items.map((item) => (
                            <Link key={item.id} href={`${basePath}${item.id}`} className='group flex items-center py-1 px-2 rounded-lg mb-1 hover:bg-zinc-300 dark:hover:bg-zinc-900 transition-colors'>
                                <HashtagIcon className='w-4 h-4 text-zinc-500 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors' />
                                <span className='truncate ml-3 pr-1 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors'>
                                    {toKebabCase(item.title)}
                                </span>
                            </Link>
                        ))}
                </div>
            )}
        </div>
    )
}

export default SidebarAccordion
