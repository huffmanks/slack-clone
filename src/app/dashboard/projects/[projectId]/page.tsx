import Link from 'next/link'
import { Message, Task, Team, User } from '@prisma/client'

import ChatContainer from '@/components/ChatContainer'

interface Props {
    params: { projectId: string }
}

const page = async ({ params }: Props) => {
    const username = 'kaos'

    const res = await fetch(`http://localhost:3000/api/projects/${params.projectId}`)
    const project = await res.json()
    return (
        <>
            {project && (
                <>
                    <h1 className='mb-8 text-2xl font-bold'>{project.title}</h1>

                    <div className='mb-10'>
                        <div className='font-bold mb-1'>Created by:</div>
                        <div>{project.createdBy.firstName}</div>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-lg mb-1 font-bold'>Teams</h2>
                        {project.teams.map((team: Team) => (
                            <div key={team.id}>{team.title}</div>
                        ))}
                    </div>

                    <div className='mb-10'>
                        <h2 className='text-lg mb-1 font-bold'>Clients</h2>
                        {project.clients.map((client: User) => (
                            <div key={client.id}>{client.firstName}</div>
                        ))}
                    </div>

                    <div className='mb-10'>
                        <h2 className='text-lg mb-1 font-bold'>Tasks</h2>
                        {project?.tasks &&
                            project.tasks.map((task: Task) => (
                                <Link className='block underline mb-1 text-purple-500' key={task.id} href={`/dashboard/projects/${params.projectId}/tasks/${task.id}`}>
                                    {task.title}
                                </Link>
                            ))}
                    </div>

                    <div>
                        <h2 className='text-lg mb-2 font-bold'>Messages</h2>
                        <ChatContainer roomId={project.id} roomName='project' title={project.title}>
                            {project?.messages &&
                                project.messages
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
