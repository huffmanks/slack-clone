import { PrismaClient, Prisma } from '@prisma/client'

import { workspaceData, projectData, taskData } from './config'

const prisma = new PrismaClient()

const workspaces: Prisma.WorkspaceCreateInput[] = workspaceData
const projects: Prisma.ProjectCreateInput[] = projectData
const tasks: Prisma.TaskCreateInput[] = taskData

async function main() {
    console.log(`Start seeding ...`)

    for (const workspace of workspaces) {
        const createdWorkspace = await prisma.workspace.create({
            data: workspace,
        })
        console.log(`Created workspace with id: ${createdWorkspace.id}`)
    }

    for (const project of projects) {
        const createdProject = await prisma.project.create({
            data: project,
        })
        console.log(`Created project with id: ${createdProject.id}`)
    }

    for (const task of tasks) {
        const createdTask = await prisma.task.create({
            data: task,
        })
        console.log(`Created task with id: ${createdTask.id}`)
    }

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
