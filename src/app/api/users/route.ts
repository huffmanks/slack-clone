import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
    const users = await prisma.user.findMany({ include: { workspaces: true } })

    if (!users.length) {
        return NextResponse.json({ message: 'No users found.' })
    }

    return NextResponse.json(users)
}
