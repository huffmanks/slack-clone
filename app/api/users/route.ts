import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
    try {
        const data = await prisma.user.findMany()

        return NextResponse.json(data)
    } catch (err) {
        console.error(err)
    }
}
