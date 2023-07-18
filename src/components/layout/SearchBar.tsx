'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { UserButton } from '@clerk/nextjs'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { FiSearch } from 'react-icons/fi'
import { MdExpandMore } from 'react-icons/md'

import { useDashboard } from '@/providers/DashboardProvider'
import IconButton from '../ui/IconButton'

const SearchBar = () => {
    const router = useRouter()
    const { workspace, isOpen, handleIsOpen } = useDashboard()

    return (
        <>
            <nav className='fixed top-0 z-50 w-full border-b border-zinc-300 bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800'>
                <div className='px-3 py-3 lg:px-5 lg:pl-3'>
                    <div className='flex items-center justify-between gap-4 sm:grid sm:grid-cols-[auto_1fr] sm:justify-normal'>
                        <div className='flex items-center'>
                            <button
                                id='sidebarMobileMenu'
                                type='button'
                                className='inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden'
                                onClick={handleIsOpen}>
                                <span className='sr-only'>Open sidebar</span>
                                <svg className='h-6 w-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        clipRule='evenodd'
                                        fillRule='evenodd'
                                        d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'></path>
                                </svg>
                            </button>
                            <button id='workspaceDropdown' className='hidden w-56 items-center justify-between overflow-hidden rounded-lg hover:bg-zinc-900 sm:mr-4 sm:flex' onClick={handleIsOpen}>
                                <div className='flex items-center'>
                                    {workspace?.logo && <Image src={workspace.logo} width={32} height={32} className='mr-2 h-8 w-8 rounded-lg' alt={workspace.title} />}

                                    <span className='max-w-[156px] self-center truncate text-lg font-semibold dark:text-zinc-100'>{workspace?.title}</span>
                                </div>
                                <span className='pr-1'>
                                    <MdExpandMore className='h-5 w-5' />
                                </span>
                            </button>
                            <div
                                className={`z-50 my-4 list-none divide-y divide-zinc-200 rounded bg-zinc-100 text-base shadow dark:divide-zinc-600 dark:bg-zinc-700 ${
                                    isOpen.workspaceDropdown ? 'absolute inset-[0px_auto_auto_0px] m-0 block translate-x-0 translate-y-10' : 'hidden'
                                }`}>
                                <div className='px-4 py-3' role='none'>
                                    <p className='text-sm text-gray-900 dark:text-white' role='none'>
                                        Neil Sims
                                    </p>
                                    <p className='truncate text-sm font-medium text-gray-900 dark:text-gray-300' role='none'>
                                        neil.sims@flowbite.com
                                    </p>
                                </div>
                                <ul className='py-1' role='none'>
                                    <li>
                                        <Link
                                            href='#'
                                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                                            role='menuitem'>
                                            Dashboard
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex w-full items-center justify-between gap-4'>
                            <div className='hidden gap-2 md:flex'>
                                <IconButton className='p-1 bg-transparent hover:enabled:bg-zinc-200 dark:hover:enabled:bg-zinc-700' onClick={() => router.back()}>
                                    <FaArrowLeft />
                                </IconButton>
                                <IconButton className='p-1 bg-transparent hover:enabled:bg-zinc-200 dark:hover:enabled:bg-zinc-700' onClick={() => router.forward()}>
                                    <FaArrowRight />
                                </IconButton>
                            </div>
                            <div className='mx-auto flex w-3/4 items-center gap-2 rounded-md bg-zinc-100 px-2 py-1.5 text-zinc-900 dark:bg-zinc-900 dark:text-slate-100'>
                                <FiSearch className='h-4 w-4' />

                                <input type='text' className='w-full bg-transparent outline-none' placeholder={`Search ${workspace?.title}`} />
                            </div>

                            <UserButton afterSignOutUrl='/' />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default SearchBar
