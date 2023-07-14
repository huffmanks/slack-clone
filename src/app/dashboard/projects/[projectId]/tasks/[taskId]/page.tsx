import { Message } from '@prisma/client'

import ChatContainer from '@/components/ChatContainer'

interface Props {
    params: {
        projectId: string
        taskId: string
    }
}

const page = async ({ params }: Props) => {
    const username = 'kaos'

    const res = await fetch(`http://localhost:3000/api/projects/${params.projectId}/tasks/${params.taskId}`)
    const task = await res.json()
    return (
        <>
            {task && (
                <>
                    <h1 className='mb-8 text-2xl font-bold'>{task.title}</h1>

                    <div className='mb-10'>
                        <div className='font-bold mb-1'>Created by:</div>
                        <div>{task.createdBy.firstName}</div>
                    </div>

                    <div>
                        <h2 className='text-lg mb-2 font-bold'>Messages</h2>
                        <ChatContainer roomId={task.id} roomName='task' title={task.title}>
                            {task?.messages &&
                                task.messages
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
