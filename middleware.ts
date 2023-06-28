import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    // const response = NextResponse.next()

    const cookies = request?.cookies?.get('next-auth.session-token')?.value
    const res = await fetch('http://localhost:3000/api/session', {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json',
        },
        body: cookies,
    })

    const data = await res.json()
    // return response
}

export const config = {
    matcher: ['/dashboard', '/dashboard/:path*'],
}
