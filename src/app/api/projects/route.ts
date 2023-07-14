import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
    const projects = await prisma.project.findMany()

    if (!projects.length) {
        return NextResponse.json({ message: 'No projects found.' })
    }

    return NextResponse.json(projects)
}
