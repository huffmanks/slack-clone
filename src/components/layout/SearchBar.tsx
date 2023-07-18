'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { useTheme } from 'next-themes'
import { UserButton } from '@clerk/nextjs'
import { ArrowLeft, ArrowRight, Search, ChevronDown, MoonStar, Sun } from 'lucide-react'

import { useDashboard } from '@/providers/DashboardProvider'
import useIsMounted from '@/app/hooks/useIsMounted'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const SearchBar = () => {
    const router = useRouter()
    const { workspace, isOpen, handleIsOpen } = useDashboard()
    const { resolvedTheme, setTheme } = useTheme()

    if (!useIsMounted()) return null

    return (
        <>
            <nav className='fixed top-0 z-50 w-full border-b border-zinc-300 bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 transition-colors'>
                <div className='px-3 py-3 lg:px-5 lg:pl-3'>
                    <div className='flex items-center justify-between gap-4 sm:gap-8 lg:gap-6 sm:grid sm:grid-cols-[auto_1fr] sm:justify-normal'>
                        <div className='flex items-center justify-between sm:w-56 lg:w-[232px]'>
                            <Button
                                aria-label='Toggle mobile sidebar'
                                id='sidebarMobileMenu'
                                variant='ghost'
                                size='icon'
                                className='sm:hidden hover:bg-zinc-300 dark:hover:bg-zinc-900 focus-visible:bg-zinc-300 dark:focus-visible:bg-zinc-900'
                                onClick={handleIsOpen}>
                                <svg className='h-6 w-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        clipRule='evenodd'
                                        fillRule='evenodd'
                                        d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'></path>
                                </svg>
                            </Button>
                            <Button
                                aria-label='Workspace dropdown'
                                id='workspaceDropdown'
                                variant='ghost'
                                size='workspace'
                                className='hidden sm:flex w-full items-center justify-between gap-2 rounded-lg overflow-hidden hover:bg-zinc-300 dark:hover:bg-zinc-900 focus-visible:bg-zinc-300 dark:focus-visible:bg-zinc-900'
                                onClick={handleIsOpen}>
                                <div className='flex items-center gap-2 truncate'>
                                    <Image
                                        src={workspace?.logo || 'https://dummyimage.com/64x64/5656ff/5656ff.png'}
                                        width={32}
                                        height={32}
                                        className='h-8 w-8 rounded-lg'
                                        alt={workspace?.title || 'logo'}
                                    />

                                    <span className='text-lg font-semibold'>{workspace?.title}</span>
                                </div>
                                <ChevronDown className='h-4 w-4' />
                            </Button>
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
                                <Button
                                    aria-label='Go back'
                                    variant='ghost'
                                    size='icon'
                                    className='hover:bg-zinc-300 dark:hover:bg-zinc-900 focus-visible:bg-zinc-300 dark:focus-visible:bg-zinc-900'
                                    onClick={() => router.back()}>
                                    <ArrowLeft className='h-5 w-5' />
                                </Button>
                                <Button
                                    aria-label='Go forward'
                                    variant='ghost'
                                    size='icon'
                                    className='hover:bg-zinc-300 dark:hover:bg-zinc-900 focus-visible:bg-zinc-300 dark:focus-visible:bg-zinc-900'
                                    onClick={() => router.forward()}>
                                    <ArrowRight className='h-5 w-5' />
                                </Button>
                            </div>
                            <div className='mx-auto flex w-3/4 items-center gap-2 rounded-md px-2 py-1.5 border border-zinc-300 bg-zinc-100 ring-offset-zinc-400 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-950 dark:bg-zinc-900 dark:ring-offset-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-900'>
                                <Search className='h-4 w-4' />

                                <Input type='text' variant='ghost' placeholder={`Search ${workspace?.title}`} />
                            </div>

                            <div className='flex items-center gap-4'>
                                <Button
                                    aria-label='Toggle theme'
                                    variant='ghost'
                                    size='icon'
                                    className='p-1.5 hover:bg-zinc-300 dark:hover:bg-zinc-900 focus-visible:bg-zinc-300 dark:focus-visible:bg-zinc-900'
                                    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
                                    {resolvedTheme === 'dark' ? <Sun className='h-5 w-5 text-orange-300' /> : <MoonStar className='h-5 w-5 text-zinc-900' />}
                                </Button>

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
