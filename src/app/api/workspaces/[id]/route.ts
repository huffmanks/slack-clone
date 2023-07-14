import { NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'
import type { Params } from '@/types'

export async function GET(request: Request, { params }: Params) {
    const id = params.id

    if (!id) {
        return NextResponse.json({ message: 'No workspace found.' })
    }

    const workspace = await prisma.workspace.findUnique({ where: { id }, include: { teams: true, users: true } })

    if (!workspace) {
        return NextResponse.json({ message: 'No workspace found.' })
    }

    return NextResponse.json(workspace)
}
