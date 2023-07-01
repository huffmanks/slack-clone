import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
    const cookie = request.cookies.get('next-auth.session-token')?.value

    if (!cookie) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    const url = `${process.env.NEXTAUTH_URL}/api/session/${cookie}`

    const res = await fetch(url)
    const data = await res.json()

    const token = data.sessionToken

    if (!token || cookie !== token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard', '/dashboard/:path*'],
}
