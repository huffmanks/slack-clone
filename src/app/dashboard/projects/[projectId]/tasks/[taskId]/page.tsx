import ChatContainer from '@/components/ChatContainer'

interface Props {
    params: {
        projectId: string
        taskId: string
    }
}

const page = async ({ params }: Props) => {
    const taskResponse = await fetch(`http://localhost:3000/api/projects/${params.projectId}/tasks/${params.taskId}`)
    const task = await taskResponse.json()

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
                        <ChatContainer messages={task?.messages} receiverId={task.id} receiverType='task' />
                    </div>
                </>
            )}
        </>
    )
}

export default page
