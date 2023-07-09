import { Channel } from '@/types'
import Link from 'next/link'

const layout = async ({ children }: { children: React.ReactNode }) => {
    const res = await fetch('http://localhost:3000/api/channels')
    const channels = await res.json()

    return (
        <div className='flex h-full'>
            <aside className='h-full w-64 bg-zinc-800 p-8'>
                <div className='mb-2'>
                    <Link href='/' className='text-purple-500'>
                        Home
                    </Link>
                </div>
                <div className='mb-1'>Channels</div>
                <div className='flex flex-col gap-1 pl-2'>
                    {channels &&
                        channels.map((channel: Channel) => (
                            <Link key={channel.id} href={`/channels/${channel.name}`} className='text-sm text-purple-500'>
                                {channel.name}
                            </Link>
                        ))}
                </div>
            </aside>

            <main className='w-full max-w-lg p-8'>{children}</main>
        </div>
    )
}

export default layout
