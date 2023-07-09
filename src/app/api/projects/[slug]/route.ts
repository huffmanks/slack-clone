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
        return NextResponse.json({ message: 'No project found.' })
    }

    const project = await prisma.project.findFirst({ where: { title: slug }, include: { teams: true, messages: true, clients: true } })

    if (!project) {
        return NextResponse.json({ message: 'No project found.' })
    }

    return NextResponse.json(project)
}
