'use client'

import { useState } from 'react'
import Link from 'next/link'

import { Channel, Project } from '@prisma/client'
import { Plus, ChevronDown, Hash } from 'lucide-react'

import { toKebabCase } from '@/utils/toKebabCase'

import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

interface Props {
    id: string
    title: string
    basePath: string
    items: Project[] | Channel[]
}

const SidebarCollapsible = ({ id, title, basePath, items }: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className='mb-4'>
            <div className='flex items-center justify-between gap-2 px-1'>
                <CollapsibleTrigger asChild>
                    <Button
                        id={id}
                        aria-label='Toggle collapsible'
                        variant='ghost'
                        size='icon'
                        className='group flex items-center py-1 px-2 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-900 focus-visible:bg-zinc-300 dark:focus-visible:bg-zinc-900'>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-0' : '-rotate-90'}`} />
                        <span className='ml-3 pr-1 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-focus-visible:text-zinc-900 dark:group-focus-visible:text-zinc-100 transition-colors'>
                            {title}
                        </span>
                    </Button>
                </CollapsibleTrigger>
                <Button
                    aria-label={`Create a ${title}`}
                    variant='ghost'
                    size='icon'
                    className='rounded-full p-1 hover:bg-zinc-300 dark:hover:bg-zinc-900 focus-visible:bg-zinc-300 dark:focus-visible:bg-zinc-900'
                    onClick={() => console.log('hello')}>
                    <Plus className='w-4 h-4' />
                </Button>
            </div>

            <CollapsibleContent className='mb-4 pt-3 pb-4 px-1 overflow-y-auto max-h-64 border-b border-zinc-300 dark:border-zinc-700 transition-colors'>
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
            </CollapsibleContent>
        </Collapsible>
    )
}

export default SidebarCollapsible
