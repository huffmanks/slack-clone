import { NextResponse, type NextRequest } from 'next/server'

import { authMiddleware } from '@clerk/nextjs'
import { AuthObject } from '@clerk/nextjs/dist/types/server'
import { Prisma } from '@prisma/client'

type UserWithWorkspaces = Prisma.UserGetPayload<{
    include: { workspaces: { select: { id: true; title: true; slug: true } }; lastWorkspace: { include: { projects: true; channels: true } } }
}>
const middleware = async (auth: AuthObject, request: NextRequest) => {
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        const res = await fetch(`http://localhost:3000/api/users/${auth.userId}`)
        const user: UserWithWorkspaces = await res.json()

        if (!user) {
            return NextResponse.rewrite(new URL('/sign-in', request.url))
        }

        if (!user?.workspaces?.length) {
            return NextResponse.redirect(new URL('/workspaces', request.url))
        }

        if (!user?.lastWorkspace) {
            try {
                await fetch(`http://localhost:3000/api/users/${user.id}`, {
                    method: 'PATCH',
                    body: JSON.stringify({ workspaceId: user.workspaces[0].id }),
                })
            } catch (error) {
                console.log(error)
            }
        }

        return NextResponse.next()
    }
}

export default authMiddleware({
    publicRoutes: ['/assets'],
    afterAuth: (auth, req, evt) => {
        return middleware(auth, req)
    },
})

export const config = {
    // matcher: ['/((?!api|_next|dashboard|public)/:path*)', '/'],
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
