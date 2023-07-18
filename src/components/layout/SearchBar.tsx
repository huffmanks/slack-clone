'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { useTheme } from 'next-themes'
import { UserButton } from '@clerk/nextjs'
import { ArrowSmallLeftIcon, ArrowSmallRightIcon, MagnifyingGlassIcon, ChevronDownIcon, MoonIcon, SunIcon } from '@heroicons/react/24/solid'

import { useDashboard } from '@/providers/DashboardProvider'
import useIsMounted from '@/app/hooks/useIsMounted'

import IconButton from '../ui/IconButton'

const SearchBar = () => {
    const router = useRouter()
    const { workspace, isOpen, handleIsOpen } = useDashboard()
    const { resolvedTheme, setTheme } = useTheme()

    if (!useIsMounted()) return null

    return (
        <>
            <nav className='fixed top-0 z-50 w-full border-b border-zinc-300 bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 transition-colors'>
                <div className='px-3 py-3 lg:px-5 lg:pl-3'>
                    <div className='flex items-center justify-between gap-4 sm:grid sm:grid-cols-[auto_1fr] sm:justify-normal'>
                        <div className='flex items-center'>
                            <button
                                id='sidebarMobileMenu'
                                type='button'
                                className='inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden transition-colors'
                                onClick={handleIsOpen}>
                                <span className='sr-only'>Open sidebar</span>
                                <svg className='h-6 w-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        clipRule='evenodd'
                                        fillRule='evenodd'
                                        d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'></path>
                                </svg>
                            </button>
                            <button
                                id='workspaceDropdown'
                                className='hidden w-56 items-center justify-between overflow-hidden rounded-lg sm:mr-4 sm:flex hover:bg-zinc-300 dark:hover:bg-zinc-900'
                                onClick={handleIsOpen}>
                                <div className='flex items-center'>
                                    {workspace && (
                                        <>
                                            <Image
                                                src={workspace.logo || 'http://dummyimage.com/100x100.png/dddddd/000000'}
                                                width={32}
                                                height={32}
                                                className='mr-2 h-8 w-8 rounded-lg'
                                                alt={workspace.title}
                                            />

                                            <span className='max-w-[156px] self-center truncate text-lg font-semibold'>{workspace.title}</span>
                                        </>
                                    )}
                                </div>
                                <span className='pr-1'>
                                    <ChevronDownIcon className='h-4 w-4' />
                                </span>
                            </button>
                            <div
                                className={`z-50 my-4 list-none divide-y divide-zinc-200 rounded bg-zinc-100 text-base shadow dark:divide-zinc-600 dark:bg-zinc-700 transition-colors ${
                                    isOpen.workspaceDropdown ? 'absolute inset-[0px_auto_auto_0px] m-0 block translate-x-0 translate-y-10' : 'hidden'
                                }`}>
                                <div className='px-4 py-3' role='none'>
                                    <p className='text-sm' role='none'>
                                        Neil Sims
                                    </p>
                                    <p className='truncate text-sm font-medium' role='none'>
                                        neil.sims@flowbite.com
                                    </p>
                                </div>
                                <ul className='py-1' role='none'>
                                    <li>
                                        <Link href='#' className='block px-4 py-2 text-sm' role='menuitem'>
                                            Dashboard
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex w-full items-center justify-between gap-4'>
                            <div className='hidden gap-2 md:flex'>
                                <IconButton
                                    className='p-1 bg-transparent transition-colors disabled:text-zinc-400 dark:disabled:text-zinc-500 hover:enabled:bg-zinc-300 dark:hover:enabled:bg-zinc-900'
                                    onClick={() => router.back()}>
                                    <ArrowSmallLeftIcon className='h-5 w-5' />
                                </IconButton>
                                <IconButton
                                    className='p-1 bg-transparent transition-colors disabled:text-zinc-400 dark:disabled:text-zinc-500 hover:enabled:bg-zinc-300 dark:hover:enabled:bg-zinc-900'
                                    onClick={() => router.forward()}>
                                    <ArrowSmallRightIcon className='h-5 w-5' />
                                </IconButton>
                            </div>
                            <div className='mx-auto flex w-3/4 items-center gap-2 rounded-md bg-zinc-100 px-2 py-1.5 dark:bg-zinc-900 transition-colors'>
                                <MagnifyingGlassIcon className='h-4 w-4' />

                                <input type='text' className='w-full bg-transparent outline-none' placeholder={`Search ${workspace?.title}`} />
                            </div>

                            <div className='flex items-center gap-4'>
                                <IconButton
                                    aria-label='Toggle Dark Mode'
                                    className='flex items-center justify-center rounded-full p-2 transition-colors hover:bg-zinc-300 dark:hover:bg-zinc-900'
                                    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
                                    {resolvedTheme === 'dark' ? <SunIcon className='h-5 w-5 text-orange-300' /> : <MoonIcon className='h-5 w-5 text-zinc-900' />}
                                </IconButton>

                                <UserButton afterSignOutUrl='/' />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default SearchBar
