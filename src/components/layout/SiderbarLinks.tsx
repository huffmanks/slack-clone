import Link from 'next/link'

interface Props {
    title: string
    link: string
    icon: React.ReactNode
}

const SiderbarLinks = ({ title, link, icon }: Props) => {
    return (
        <li>
            <Link
                href={link}
                className='group flex items-center py-1 px-2 rounded-lg mb-2 transition-colors focus-visible:outline-none hover:bg-zinc-300 dark:hover:bg-zinc-900 focus-visible:bg-zinc-300 dark:focus-visible:bg-zinc-900 ring-offset-zinc-400 focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-zinc-300 dark:ring-offset-zinc-800 dark:focus-visible:ring-zinc-900'>
                {icon}
                <span className='ml-2 pr-1 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-focus-visible:text-zinc-900 dark:group-focus-visible:text-zinc-100'>
                    {title}
                </span>
            </Link>
        </li>
    )
}

export default SiderbarLinks
