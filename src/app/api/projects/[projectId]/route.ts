import { NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'
import type { Params } from '@/types'

export async function GET(request: Request, { params }: Params) {
    const id = params.projectId

    if (!id) {
        return NextResponse.json({ message: 'No project found.' })
    }

    const project = await prisma.project.findUnique({ where: { id }, include: { tasks: true, teams: true, messages: true, clients: true, createdBy: true } })

    if (!project) {
        return NextResponse.json({ message: 'No project found.' })
    }

    return NextResponse.json(project)
}
