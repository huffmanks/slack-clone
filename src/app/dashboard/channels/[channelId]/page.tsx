import { Message } from '@prisma/client'

import ChatContainer from '@/components/ChatContainer'
import { MessageWithSender } from '@/types'

interface Props {
    params: { channelId: string }
}

const page = async ({ params }: Props) => {
    const channelResponse = await fetch(`http://localhost:3000/api/channels/${params.channelId}?workspaceId=51`)
    const channel = await channelResponse.json()

    const messagesResponse = await fetch(`http://localhost:3000/api/messages?id=${params.channelId}`)
    const messages = await messagesResponse.json()

    return (
        <>
            {channel && (
                <>
                    <h1 className='mb-8 text-2xl font-bold'>{channel.title}</h1>

                    <div className='mb-10'>
                        <div className='font-bold mb-1'>Created by:</div>
                        <div>{channel.createdBy.firstName}</div>
                    </div>

                    <div>
                        <h2 className='text-lg mb-2 font-bold'>Messages</h2>
                        <ChatContainer roomId={channel.id} roomName='channel' title={channel.title}>
                            {messages &&
                                messages
                                    .sort((a: Message, b: Message) => new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf())
                                    .map((message: MessageWithSender) => (
                                        <div key={message.id}>
                                            <div className='mb-1 text-sm'>{message.sender.username}</div>
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
