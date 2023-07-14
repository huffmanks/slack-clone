import { NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'
import { Params } from '@/types'

export async function GET(request: Request, { params }: Params) {
    const projectId = params.projectId

    if (!projectId) {
        return NextResponse.json({ message: 'No tasks found.' })
    }

    const tasks = await prisma.task.findMany({ where: { projectId }, include: { assignedTo: true, createdBy: true, messages: true } })

    if (!tasks.length) {
        return NextResponse.json({ message: 'No tasks found.' })
    }

    return NextResponse.json(tasks)
}
