import { NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'
import type { Params } from '@/types'

export async function GET(request: Request, { params }: Params) {
    const id = params.channelId

    if (!id) {
        return NextResponse.json({ message: 'No channel found.' })
    }

    const channel = await prisma.channel.findUnique({ where: { id }, include: { createdBy: true, messages: { include: { sender: true } } } })

    if (!channel) {
        return NextResponse.json({ message: 'No channel found.' })
    }

    return NextResponse.json(channel)
}
