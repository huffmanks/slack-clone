import { prisma } from '@/lib/prisma'

import { NextResponse } from 'next/server'

interface Props {
    params: {
        [key: string]: string
    }
}

export async function GET(request: Request, { params }: Props) {
    const slug = params.slug

    if (!slug) {
        return NextResponse.json({ message: 'No task found.' })
    }

    const task = await prisma.task.findFirst({ where: { title: slug }, include: { assignedTo: true, messages: true } })

    if (!task) {
        return NextResponse.json({ message: 'No task found.' })
    }

    return NextResponse.json(task)
}
