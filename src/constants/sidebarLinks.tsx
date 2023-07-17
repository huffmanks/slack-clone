const TaskIcon = () => {
    return (
        <svg aria-hidden='true' className='h-5 w-5 transition duration-75' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='currentColor'>
            <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
            <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
        </svg>
    )
}

const MentionIcon = () => {
    return (
        <svg aria-hidden='true' className='h-5 w-5 transition duration-75' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='currentColor'>
            <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'></path>
        </svg>
    )
}

const MessageIcon = () => {
    return (
        <svg aria-hidden='true' className='h-5 w-5 transition duration-75' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='currentColor'>
            <path d='M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z'></path>
            <path d='M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z'></path>
        </svg>
    )
}

const PeopleIcon = () => {
    return (
        <svg aria-hidden='true' className='h-5 w-5 transition duration-75' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='currentColor'>
            <path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd'></path>
        </svg>
    )
}

export const sidebarLinks = [
    {
        title: 'Tasks',
        link: '#',
        icon: <TaskIcon />,
    },
    {
        title: 'Mentions',
        link: '#',
        icon: <MentionIcon />,
    },
    {
        title: 'Direct Messages',
        link: '#',
        icon: <MessageIcon />,
    },
    {
        title: 'People & Teams',
        link: '#',
        icon: <PeopleIcon />,
    },
]
