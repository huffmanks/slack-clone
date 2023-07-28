import Link from 'next/link'
import { Task, Team, User } from '@prisma/client'

import ChatContainer from '@/components/ChatContainer'

interface Props {
    params: { projectId: string }
}

const page = async ({ params }: Props) => {
    const projectResponse = await fetch(`http://localhost:3000/api/projects/${params.projectId}?workspaceId=51`)
    const project = await projectResponse.json()

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
                        <ChatContainer messages={project?.messages} receiverId={project.id} receiverType='project' />
                    </div>
                </>
            )}
        </>
    )
}

export default page
