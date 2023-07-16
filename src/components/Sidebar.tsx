'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import { MdExpandMore } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'

import IconButton from './IconButton'
import { Project } from '@prisma/client'

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
            <div className='h-full overflow-y-auto bg-zinc-100 px-3 pb-4 dark:bg-zinc-800'>
                <ul className='space-y-2 font-medium text-sm pb-4 mb-4 border-b border-zinc-300 dark:border-zinc-700'>
                    <li>
                        <Link href='#' className='flex items-center rounded-lg p-2 text-zinc-900 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-700'>
                            <svg
                                aria-hidden='true'
                                className='h-5 w-5 text-zinc-500 transition duration-75 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-100'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
                                <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
                            </svg>
                            <span className='ml-3'>Tasks</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='#' className='flex items-center rounded-lg p-2 text-zinc-900 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-700'>
                            <svg
                                aria-hidden='true'
                                className='h-5 w-5 flex-shrink-0 text-zinc-500 transition duration-75 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-100'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'></path>
                            </svg>
                            <span className='ml-3 flex-1 whitespace-nowrap'>Mentions</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='#' className='flex items-center rounded-lg p-2 text-zinc-900 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-700'>
                            <svg
                                aria-hidden='true'
                                className='h-5 w-5 flex-shrink-0 text-zinc-500 transition duration-75 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-100'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z'></path>
                                <path d='M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z'></path>
                            </svg>
                            <span className='ml-3 flex-1 whitespace-nowrap'>Direct Messages</span>
                            <span className='ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300'>
                                3
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href='#' className='flex items-center rounded-lg p-2 text-zinc-900 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-700'>
                            <svg
                                aria-hidden='true'
                                className='h-5 w-5 flex-shrink-0 text-zinc-500 transition duration-75 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-100'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd'></path>
                            </svg>
                            <span className='ml-3 flex-1 whitespace-nowrap'>People & Teams</span>
                        </Link>
                    </li>
                </ul>
                <div className='mb-8 text-sm pl-1 pr-2'>
                    <div className='flex items-center justify-between gap-2 mb-4'>
                        <div className='flex items-center gap-2'>
                            <IconButton isTransparent icon={<MdExpandMore className='w-5 h-5' />} onClick={handleChannelCollapse} />
                            {/* Workspace channels, i.e. #general */}
                            <div className='font-bold'>Channels</div>
                        </div>
                        <IconButton isTransparent icon={<AiOutlinePlus />} onClick={() => console.log('hello')} />
                    </div>
                    {channelIsExpanded && (
                        <div className='px-4'>
                            <div className='flex items-center gap-2'>
                                <span>#</span>
                                <Link href='#'>general</Link>
                            </div>
                        </div>
                    )}
                </div>

                <div className='mb-8 text-sm pl-1 pr-2'>
                    <div className='flex items-center justify-between gap-2 mb-4'>
                        <div className='flex items-center gap-2'>
                            <IconButton isTransparent icon={<MdExpandMore className='w-5 h-5' />} onClick={handleChannelCollapse} />
                            <div className='font-bold'>Projects</div>
                        </div>
                        <IconButton isTransparent icon={<AiOutlinePlus />} onClick={() => console.log('hello')} />
                    </div>
                    {channelIsExpanded && (
                        <div className='px-4'>
                            {projects &&
                                projects.map((project: Project) => (
                                    <div className='flex items-center gap-2'>
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
