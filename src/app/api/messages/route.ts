import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const body = await request.json()

    const message = await prisma.message.create({
        data: body,
    })

    return NextResponse.json(message)
}
