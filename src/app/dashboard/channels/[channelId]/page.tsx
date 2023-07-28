import ChatContainer from '@/components/ChatContainer'

interface Props {
    params: { channelId: string }
}

const page = async ({ params }: Props) => {
    const channelResponse = await fetch(`http://localhost:3000/api/channels/${params.channelId}?workspaceId=51`)
    const channel = await channelResponse.json()

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
                        <ChatContainer messages={channel?.messages} receiverId={channel.id} receiverType='channel' />
                    </div>
                </>
            )}
        </>
    )
}

export default page
