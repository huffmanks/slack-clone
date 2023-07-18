import { PrismaClient, Prisma } from '@prisma/client'

import { userData, workspaceData, channelData, projectData, taskData } from './config'

const prisma = new PrismaClient()

const users: Prisma.UserCreateInput[] = userData
const workspaces: Prisma.WorkspaceCreateInput[] = workspaceData
const channels: Prisma.ChannelCreateInput[] = channelData
const projects: Prisma.ProjectCreateInput[] = projectData
const tasks: Prisma.TaskCreateInput[] = taskData

async function main() {
    console.log(`Start seeding ...`)

    const createdUsers = await Promise.all(
        users.map(async (user) => {
            const createdUser = await prisma.user.create({
                data: user,
            })
            return createdUser
        })
    )

    const createdWorkspaces = await Promise.all(
        workspaces.map(async (workspace) => {
            const createdWorkspace = await prisma.workspace.create({
                data: workspace,
            })
            return createdWorkspace
        })
    )

    const createdChannels = await Promise.all(
        channels.map(async (channel) => {
            const createdChannel = await prisma.channel.create({
                data: channel,
            })
            return createdChannel
        })
    )

    const createdProjects = await Promise.all(
        projects.map(async (project) => {
            const createdProject = await prisma.project.create({
                data: project,
            })
            return createdProject
        })
    )

    const createdTasks = await Promise.all(
        tasks.map(async (task) => {
            const createdTask = await prisma.task.create({
                data: task,
            })
            return createdTask
        })
    )

    console.log(`Seeding finished.`)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
