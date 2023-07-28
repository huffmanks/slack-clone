import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
    const requestUrl = new URL(request.url)
    const id = requestUrl.searchParams.get('id')

    const messages = await prisma.message.findMany({
        // where: { receiverId: id },
        include: { sender: true, comments: true },
    })

    if (!messages) {
        return NextResponse.json({ message: 'No messages found.' })
    }

    return NextResponse.json(messages)
}

export async function POST(request: Request) {
    const body = await request.json()

    const message = await prisma.message.create({
        data: body,
    })

    return NextResponse.json(message)
}
