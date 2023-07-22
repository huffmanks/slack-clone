import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
    const requestUrl = new URL(request.url)
    const workspaceId = requestUrl.searchParams.get('workspaceId')

    if (!workspaceId) {
        return NextResponse.json({ message: 'No projects found.' })
    }

    const projects = await prisma.project.findMany({ where: { workspaceId } })

    if (!projects.length) {
        return NextResponse.json({ message: 'No projects found.' })
    }

    return NextResponse.json(projects)
}
