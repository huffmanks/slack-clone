import { RectangleStackIcon, AtSymbolIcon, ChatBubbleLeftRightIcon, UserGroupIcon } from '@heroicons/react/24/solid'

export const sidebarLinks = [
    {
        title: 'Tasks',
        link: '#',
        icon: <RectangleStackIcon className='h-5 w-5 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors' />,
    },
    {
        title: 'Mentions',
        link: '#',
        icon: <AtSymbolIcon className='h-5 w-5 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors' />,
    },
    {
        title: 'Direct Messages',
        link: '#',
        icon: <ChatBubbleLeftRightIcon className='h-5 w-5 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors' />,
    },
    {
        title: 'People & Teams',
        link: '#',
        icon: <UserGroupIcon className='h-5 w-5 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors' />,
    },
]
