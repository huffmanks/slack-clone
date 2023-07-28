import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
    try {
        const workspaces = await prisma.workspace.findMany()

        if (!workspaces.length) {
            return NextResponse.json({ message: 'No workspaces found.' })
        }

        return NextResponse.json(workspaces)
    } catch (error) {
        console.log(error)
    }
}
