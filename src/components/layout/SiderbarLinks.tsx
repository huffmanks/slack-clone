import Link from 'next/link'

interface Props {
    title: string
    link: string
    icon: React.ReactNode
}

const SiderbarLinks = ({ title, link, icon }: Props) => {
    return (
        <li>
            <Link href={link} className='flex items-center rounded-lg p-1 text-zinc-900 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-700'>
                {icon}
                <span className='ml-3'>{title}</span>
            </Link>
        </li>
    )
}

export default SiderbarLinks
