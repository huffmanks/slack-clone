import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

interface Props {
    params: { id: string }
}

export async function GET(request: Request, { params }: Props) {
    try {
        const id = params.id
        const user = await prisma.user.findUnique({ where: { id } })

        return NextResponse.json(user)
    } catch (err) {
        console.error(err)
    }
}
