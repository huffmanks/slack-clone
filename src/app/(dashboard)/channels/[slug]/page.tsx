import ChatContainer from '@/components/ChatContainer'
import { Message } from '@/types'

const page = async ({ params }: { params: { slug: string } }) => {
    const username = 'kaos'

    const res = await fetch(`http://localhost:3000/api/channels/${params?.slug}`)
    const channel = await res.json()

    return (
        <>
            {channel && (
                <>
                    <h1 className='mb-8 text-2xl font-bold'>{channel.name}</h1>
                    <div>
                        <ChatContainer channelId={channel.id} channelName={channel.name}>
                            {channel?.messages &&
                                channel.messages
                                    .sort((a: Message, b: Message) => new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf())
                                    .map((message: Message) => (
                                        <div key={message.id}>
                                            <div className='mb-1 text-sm'>{username}</div>
                                            <div className='w-fit rounded-full bg-zinc-700 px-3 py-1'>{message.content}</div>
                                        </div>
                                    ))}
                        </ChatContainer>
                    </div>
                </>
            )}
        </>
    )
}

export default page
