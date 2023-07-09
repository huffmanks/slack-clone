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
        return NextResponse.json({ message: 'No workspace found.' })
    }

    const workspace = await prisma.workspace.findFirst({ where: { title: slug }, include: { teams: true, users: true } })

    if (!workspace) {
        return NextResponse.json({ message: 'No workspace found.' })
    }

    return NextResponse.json(workspace)
}
