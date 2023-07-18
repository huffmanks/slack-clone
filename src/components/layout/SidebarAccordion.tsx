'use client'

import Link from 'next/link'
import { Channel, Project } from '@prisma/client'

import { AiOutlinePlus } from 'react-icons/ai'
import { MdExpandMore } from 'react-icons/md'

import { useDashboard } from '@/providers/DashboardProvider'
import { toKebabCase } from '@/utils/toKebabCase'
import IconButton from '../ui/IconButton'

interface Props {
    id: string
    title: string
    basePath: string
    items: Project[] | Channel[]
}

const SidebarAccordion = ({ id, title, basePath, items }: Props) => {
    const { isOpen, handleIsOpen } = useDashboard()

    return (
        <div className='mb-4'>
            <div className='flex items-center justify-between gap-2 mb-2'>
                <IconButton id={id} className='flex items-center p-1 gap-2 bg-transparent rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700' onClick={handleIsOpen}>
                    <MdExpandMore className={`w-5 h-5 transition-transform ${isOpen[id] ? 'rotate-0' : '-rotate-90'}`} />
                    <div className='px-1'>{title}</div>
                </IconButton>

                <IconButton className='bg-transparent rounded-full p-1 hover:bg-zinc-100 dark:hover:bg-zinc-700' onClick={() => console.log('hello')}>
                    <AiOutlinePlus className='w-3.5 h-3.5' />
                </IconButton>
            </div>
            {isOpen[id] && (
                <div className='mb-2 pb-2 px-6 overflow-y-auto max-h-64 border-b border-zinc-300 dark:border-zinc-700'>
                    {items.map((item) => (
                        <div key={item.id} className='mb-2 truncate'>
                            <span className='mr-1'>#</span>
                            <Link key={item.id} href={`${basePath}${item.id}`}>
                                {toKebabCase(item.title)}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SidebarAccordion
