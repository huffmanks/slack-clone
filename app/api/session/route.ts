import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

const handler = async (request: NextRequest, response: NextResponse) => {
    console.log('hi')
    console.log(request.body)
    // const cookies = request?.cookies?.get('next-auth.session-token')?.value
    // console.log('*** cookies ***', request.cookies)
    // if (!cookies) {
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }
    // const session = await prisma.session.findUnique({
    //     where: {
    //         sessionToken: cookies,
    //     },
    // })
    // console.log(session)
    // if (!session) {
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }
    // return NextResponse.json(session)
}
export { handler as POST, handler as OPTION }
