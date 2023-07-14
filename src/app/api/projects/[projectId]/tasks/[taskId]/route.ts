import { NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'
import { Params } from '@/types'

export async function GET(request: Request, { params }: Params) {
    const { projectId, taskId } = params

    if (!projectId || !taskId) {
        return NextResponse.json({ message: 'No task found.' })
    }

    const task = await prisma.task.findUnique({ where: { id: taskId }, include: { assignedTo: true, createdBy: true, messages: true } })

    if (!task) {
        return NextResponse.json({ message: 'No task found.' })
    }

    return NextResponse.json(task)
}
