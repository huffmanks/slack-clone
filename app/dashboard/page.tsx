import { prisma } from '@/lib/prisma'

const Dashboard = async () => {
    const workspaces = await prisma.workspace.findMany()
    const teams = await prisma.team.findMany()
    const projects = await prisma.project.findMany()
    const tasks = await prisma.task.findMany()
    const users = await prisma.user.findMany()
    return (
        <>
            <div>
                <div className='mb-8'>
                    <h2 className='text-xl font-bold'>Workspaces</h2>
                    {workspaces.map((workspace) => (
                        <div key={workspace.id}>{workspace.title}</div>
                    ))}
                </div>

                <div className='mb-8'>
                    <h2 className='text-xl font-bold'>Teams</h2>
                    {teams.map((team) => (
                        <div key={team.id}>{team.title}</div>
                    ))}
                </div>

                <div className='mb-8'>
                    <h2 className='text-xl font-bold'>Projects</h2>
                    {projects.map((project) => (
                        <div key={project.id}>{project.title}</div>
                    ))}
                </div>

                <div className='mb-8'>
                    <h2 className='text-xl font-bold'>Tasks</h2>
                    {tasks.map((task) => (
                        <div key={task.id}>{task.title}</div>
                    ))}
                </div>

                <div className='mb-8'>
                    <h2 className='text-xl font-bold'>users</h2>
                    {users.map((user) => (
                        <div key={user.id}>{user.displayName}</div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Dashboard
