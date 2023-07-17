'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import { Project } from '@prisma/client'
import { MdExpandMore } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'

import { sidebarLinks } from '@/constants/sidebarLinks'
import IconButton from '../ui/IconButton'
import SiderbarLinks from './SiderbarLinks'

interface Props {
    sidebarIsOpen: boolean
}

const Sidebar = ({ sidebarIsOpen }: Props) => {
    const [channelIsExpanded, setChannelIsExpanded] = useState(false)
    const [projects, setProjects] = useState<Project[] | null>(null)

    const handleChannelCollapse = () => {
        setChannelIsExpanded((prev) => !prev)
    }

    useEffect(() => {
        const getProjects = async () => {
            const res = await fetch('http://localhost:3000/api/projects')
            const data = await res.json()
            setProjects(data)
        }
        getProjects()
    }, [])

    return (
        <aside
            className={`fixed left-0 top-0 z-40 h-screen w-64 border-r border-zinc-200 bg-zinc-100 pt-20 transition-transform dark:border-zinc-700 dark:bg-zinc-800 sm:translate-x-0 ${
                sidebarIsOpen ? 'transform-none' : '-translate-x-full'
            }`}
            aria-label='sidebar'>
            <div className='h-full overflow-y-auto bg-zinc-100 px-4 pb-4 dark:bg-zinc-800 font-medium text-sm'>
                <ul className='flex flex-col gap-2 pb-4 mb-4 border-b border-zinc-300 dark:border-zinc-700'>
                    {sidebarLinks.map((link) => (
                        <SiderbarLinks {...link} />
                    ))}
                </ul>
                <div className='mb-4'>
                    <div className='flex items-center justify-between gap-2 mb-2'>
                        <IconButton className='flex items-center p-1 gap-2 bg-transparent rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700' onClick={handleChannelCollapse}>
                            <MdExpandMore className={`w-5 h-5 transition-transform ${channelIsExpanded ? 'rotate-0' : '-rotate-90'}`} />
                            <div className='px-1'>Channels</div>
                        </IconButton>
                        {/* Workspace channels, i.e. #general */}

                        <IconButton className='bg-transparent rounded-full p-1 hover:bg-zinc-100 dark:hover:bg-zinc-700' onClick={() => console.log('hello')}>
                            <AiOutlinePlus className='w-3.5 h-3.5' />
                        </IconButton>
                    </div>
                    {channelIsExpanded && (
                        <div className='mb-2 pb-2 px-6 overflow-y-auto max-h-64 border-b border-zinc-300 dark:border-zinc-700'>
                            <div className='flex items-center gap-1 mb-1'>
                                <span>#</span>
                                <Link href='#'>general</Link>
                            </div>
                        </div>
                    )}
                </div>
                <div className='mb-4'>
                    <div className='flex items-center justify-between gap-2 mb-2'>
                        <IconButton className='flex items-center p-1 gap-2 bg-transparent rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700' onClick={handleChannelCollapse}>
                            <MdExpandMore className={`w-5 h-5 transition-transform ${channelIsExpanded ? 'rotate-0' : '-rotate-90'}`} />
                            <div className='px-1'>Projects</div>
                        </IconButton>

                        <IconButton className='bg-transparent rounded-full p-1 hover:bg-zinc-100 dark:hover:bg-zinc-700' onClick={() => console.log('hello')}>
                            <AiOutlinePlus className='w-3.5 h-3.5' />
                        </IconButton>
                    </div>
                    {channelIsExpanded && (
                        <div className='mb-2 pb-2 px-6 overflow-y-auto max-h-64 border-b border-zinc-300 dark:border-zinc-700'>
                            {projects &&
                                projects.map((project: Project) => (
                                    <div className='flex items-center gap-1 mb-1'>
                                        <span>#</span>
                                        <Link key={project.id} href={`/dashboard/projects/${project.id}`}>
                                            {project.title}
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
