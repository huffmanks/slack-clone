import { PrismaClient, Prisma } from '@prisma/client'

import { users, workspaces, projects, tasks } from './config'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = users
const workspaceData: Prisma.WorkspaceCreateInput[] = workspaces
const projectData: Prisma.ProjectCreateInput[] = projects
const taskData: Prisma.TaskCreateInput[] = tasks

async function main() {
    console.log(`Start seeding ...`)

    for (const u of userData) {
        const user = await prisma.user.create({
            data: u,
        })
        console.log(`Created user with id: ${user.id}`)
    }

    for (const w of workspaceData) {
        const workspace = await prisma.workspace.create({
            data: w,
        })
        console.log(`Created workspace with id: ${workspace.id}`)
    }

    for (const p of projectData) {
        const project = await prisma.project.create({
            data: p,
        })
        console.log(`Created project with id: ${project.id}`)
    }

    for (const t of taskData) {
        const task = await prisma.task.create({
            data: t,
        })
        console.log(`Created task with id: ${task.id}`)
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
