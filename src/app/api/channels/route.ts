import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
    const requestUrl = new URL(request.url)
    const workspaceId = requestUrl.searchParams.get('workspaceId')

    if (!workspaceId) {
        return NextResponse.json({ message: 'No channels found.' })
    }

    const channels = await prisma.channel.findMany({ where: { workspaceId } })

    if (!channels.length) {
        return NextResponse.json({ message: 'No channels found.' })
    }

    return NextResponse.json(channels)
}
