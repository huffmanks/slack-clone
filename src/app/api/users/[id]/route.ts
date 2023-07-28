import { NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'
import type { Params } from '@/types'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

export async function GET(request: Request, { params }: Params) {
    const id = params.id

    if (!id) {
        return NextResponse.json({ message: 'No user found.' })
    }

    const user = await prisma.user.findFirst({
        where: { OR: [{ id }, { externalId: id }] },
        include: { workspaces: { select: { id: true, title: true, slug: true } }, lastWorkspace: { include: { projects: true, channels: true } } },
    })

    if (!user) {
        return NextResponse.json({ message: 'No user found.' })
    }

    return NextResponse.json(user)
}

export async function PATCH(request: Request, { params }: Params) {
    const id = params.id

    if (!id) {
        return NextResponse.json({ message: 'Record to update not found.' })
    }

    try {
        const data = await request.json()

        if (data?.workspaceId) {
            await prisma.workspace.update({
                where: {
                    id: data.workspaceId,
                },
                data: {
                    users: {
                        connect: {
                            id,
                        },
                    },
                },
            })
        }

        const user = await prisma.user.update({
            where: { id },
            data,
        })

        return NextResponse.json(user)
    } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
            if (e.code === 'P2025') {
                return NextResponse.json({ message: e?.meta?.cause })
            }
        }
    }
}
