import { Inbox, AtSign, MessagesSquare, Users2 } from 'lucide-react'

export const sidebarLinks = [
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
