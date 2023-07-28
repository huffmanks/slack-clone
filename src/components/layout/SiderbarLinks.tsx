import Link from 'next/link'

import { LayoutDashboard, Inbox, AtSign, MessagesSquare, Users2 } from 'lucide-react'

export const sidebarLinks = [
    {
        title: 'Dashboard',
        link: '/dashboard',
        icon: (
            <LayoutDashboard className='h-5 w-5 text-zinc-500 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-focus-visible:text-zinc-900 dark:group-focus-visible:text-zinc-100' />
        ),
    },
    {
        title: 'Tasks',
        link: '#',
        icon: (
            <Inbox className='h-5 w-5 text-zinc-500 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-focus-visible:text-zinc-900 dark:group-focus-visible:text-zinc-100' />
        ),
    },
    {
        title: 'Mentions',
        link: '#',
        icon: (
            <AtSign className='h-5 w-5 text-zinc-500 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-focus-visible:text-zinc-900 dark:group-focus-visible:text-zinc-100' />
        ),
    },
    {
        title: 'Direct Messages',
        link: '#',
        icon: (
            <MessagesSquare className='h-5 w-5 text-zinc-500 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-focus-visible:text-zinc-900 dark:group-focus-visible:text-zinc-100' />
        ),
    },
    {
        title: 'People & Teams',
        link: '#',
        icon: (
            <Users2 className='h-5 w-5 text-zinc-500 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-focus-visible:text-zinc-900 dark:group-focus-visible:text-zinc-100' />
        ),
    },
]

const SiderbarLinks = () => {
    return (
        <>
            {sidebarLinks.map((item) => (
                <li key={item.title}>
                    <Link
                        href={item.link}
                        className='group flex items-center py-1 px-2 rounded-lg mb-2 transition-colors focus-visible:outline-none hover:bg-zinc-300 dark:hover:bg-zinc-900 focus-visible:bg-zinc-300 dark:focus-visible:bg-zinc-900 ring-offset-zinc-400 focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-zinc-300 dark:ring-offset-zinc-800 dark:focus-visible:ring-zinc-900'>
                        {item.icon}
                        <span className='ml-2 pr-1 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-focus-visible:text-zinc-900 dark:group-focus-visible:text-zinc-100'>
                            {item.title}
                        </span>
                    </Link>
                </li>
            ))}
        </>
    )
}

export default SiderbarLinks
