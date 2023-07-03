'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { FiSearch } from 'react-icons/fi'
import { MdExpandMore } from 'react-icons/md'

import IconButton from './IconButton'

interface Props {
    title: string
    logo: string
    handleSidebar: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const SearchBar = ({ title, logo, handleSidebar }: Props) => {
    const router = useRouter()
    const [userDropdownIsOpen, setUserDropdownIsOpen] = useState(false)
    const [workspaceDropdownIsOpen, setWorkspaceDropdownIsOpen] = useState(false)

    const handleDropdownUser = () => {
        setUserDropdownIsOpen((prev) => !prev)
    }

    const handleDropdownWorkspace = () => {
        setWorkspaceDropdownIsOpen((prev) => !prev)
    }
    return (
        <>
            <nav className='fixed top-0 z-50 w-full border-b border-zinc-300 bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800'>
                <div className='px-3 py-3 lg:px-5 lg:pl-3'>
                    <div className='flex items-center justify-between gap-4 sm:grid sm:grid-cols-[auto_1fr] sm:justify-normal'>
                        <div className='flex items-center'>
                            <button
                                type='button'
                                className='inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden'
                                onClick={handleSidebar}>
                                <span className='sr-only'>Open sidebar</span>
                                <svg className='h-6 w-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        clip-rule='evenodd'
                                        fill-rule='evenodd'
                                        d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'></path>
                                </svg>
                            </button>
                            <button className='hidden w-56 items-center justify-between overflow-hidden rounded-lg hover:bg-zinc-900 sm:mr-4 sm:flex' onClick={handleDropdownWorkspace}>
                                <div className='flex items-center'>
                                    {logo && <Image src={logo} width={32} height={32} className='mr-2 h-8 w-8 rounded-lg' alt={title} />}

                                    <span className='max-w-[156px] self-center truncate text-lg font-semibold dark:text-zinc-100'>{title}</span>
                                </div>
                                <span className='pr-1'>
                                    <MdExpandMore className='h-5 w-5' />
                                </span>
                            </button>
                            <div
                                className={`z-50 my-4 list-none divide-y divide-zinc-200 rounded bg-zinc-100 text-base shadow dark:divide-zinc-600 dark:bg-zinc-700 ${
                                    workspaceDropdownIsOpen ? 'absolute inset-[0px_auto_auto_0px] m-0 block translate-x-0 translate-y-10' : 'hidden'
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
                                <IconButton isTransparent icon={<FaArrowLeft />} onClick={() => router.back()} />
                                <IconButton isTransparent icon={<FaArrowRight />} onClick={() => router.forward()} />
                            </div>
                            <div className='mx-auto flex w-3/4 items-center gap-2 rounded-md bg-zinc-100 px-2 py-1.5 text-zinc-900 dark:bg-zinc-900 dark:text-slate-100'>
                                <FiSearch className='h-4 w-4' />

                                <input type='text' className='w-full bg-transparent outline-none' placeholder={`Search ${title}`} />
                            </div>
                            <div className='flex h-8 w-8 items-center'>
                                <div>
                                    <button
                                        type='button'
                                        className='flex rounded-lg bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
                                        aria-expanded='false'
                                        onClick={handleDropdownUser}>
                                        <span className='sr-only'>Open user menu</span>
                                        <img className='h-8 w-8 rounded-lg' src='/thumbnail.jpg' alt='user photo' />
                                    </button>
                                </div>

                                <div
                                    className={`z-50 my-4 list-none divide-y divide-zinc-200 rounded bg-zinc-100 text-base shadow dark:divide-zinc-600 dark:bg-zinc-700 ${
                                        userDropdownIsOpen ? 'absolute inset-[0px_0px_auto_auto] m-0 block translate-x-0 translate-y-10' : 'hidden'
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
                                        <li>
                                            <Link
                                                href='#'
                                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                                                role='menuitem'>
                                                Settings
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href='#'
                                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                                                role='menuitem'>
                                                Earnings
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href='#'
                                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                                                role='menuitem'>
                                                Sign out
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default SearchBar
