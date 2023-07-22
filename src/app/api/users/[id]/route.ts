import { NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'
import type { Params } from '@/types'

export async function GET(request: Request, { params }: Params) {
    const id = params.id

    if (!id) {
        return NextResponse.json({ message: 'No user found.' })
    }

    const user = await prisma.user.findFirst({ where: { OR: [{ id }, { externalId: id }] }, include: { workspaces: true, projects_assignedTo: true, channels_joined: true } })

    if (!user) {
        return NextResponse.json({ message: 'No user found.' })
    }

    return NextResponse.json(user)
}
