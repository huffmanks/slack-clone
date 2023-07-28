import { PrismaClient, Prisma } from '@prisma/client'

import { userData, workspaceData, channelData, projectData, taskData, messageData } from './config'

const prisma = new PrismaClient()

const users: Prisma.UserCreateInput[] = userData
const workspaces: Prisma.WorkspaceCreateInput[] = workspaceData
const channels: Prisma.ChannelCreateInput[] = channelData
const projects: Prisma.ProjectCreateInput[] = projectData
const tasks: Prisma.TaskCreateInput[] = taskData
const messages: Prisma.MessageCreateInput[] = messageData

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

    const createdMessages = await Promise.all(
        messages.map(async (message) => {
            const createdMessage = await prisma.message.create({
                data: message,
            })
            return createdMessage
        })
    )

    const updatedUsers = await Promise.all([
        (async () => {
            const user1 = await prisma.user.update({
                where: {
                    id: '14',
                },
                data: {
                    lastWorkspace: {
                        connect: {
                            id: '51',
                        },
                    },
                },
            })
            return user1
        })(),
        (async () => {
            const user2 = await prisma.user.update({
                where: {
                    id: '15',
                },
                data: {
                    lastWorkspace: {
                        connect: {
                            id: '51',
                        },
                    },
                },
            })
            return user2
        })(),
    ])

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
