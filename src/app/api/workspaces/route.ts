import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
    const workspaces = await prisma.workspace.findMany({ include: { projects: true, channels: true } })

    if (!workspaces.length) {
        return NextResponse.json({ message: 'No workspaces found.' })
    }

    return NextResponse.json(workspaces)
}
