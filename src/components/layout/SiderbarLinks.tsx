import Link from 'next/link'

interface Props {
    title: string
    link: string
    icon: React.ReactNode
}

const SiderbarLinks = ({ title, link, icon }: Props) => {
    return (
        <li>
            <Link href={link} className='group flex items-center py-1 px-2 rounded-lg mb-1 hover:bg-zinc-300 dark:hover:bg-zinc-900 transition-colors'>
                {icon}
                <span className='ml-2 pr-1 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors'>{title}</span>
            </Link>
        </li>
    )
}

export default SiderbarLinks
