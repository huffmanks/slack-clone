import { auth, UserButton } from '@clerk/nextjs'
import { Channel } from '@/types'
import Link from 'next/link'

const Home = async () => {
    const res = await fetch('http://localhost:3000/api/channels')
    const channels = await res.json()

    const { userId } = auth()
    return (
        <>
            <div>User Id: {userId}</div>
            <UserButton afterSignOutUrl='/' />

            <div className='mb-1'>Channels</div>
            <div className='flex flex-col gap-1 pl-2'>
                {channels &&
                    channels.map((channel: Channel) => (
                        <Link key={channel.id} href={`/channels/${channel.name}`} className='text-sm text-purple-500'>
                            {channel.name}
                        </Link>
                    ))}
            </div>
        </>
    )
}

export default Home
