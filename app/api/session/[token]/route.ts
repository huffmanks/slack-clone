import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

interface Props {
    params: { token: string }
}

export async function GET(request: Request, { params }: Props) {
    try {
        const origin = request.headers.get('x-forwarded-host')

        if (origin !== process.env.NEXTAUTH_URL?.split('//')[1]) {
            const accessToken = request.headers.get('authorization')?.split(' ')[1]

            if (!accessToken) {
                return NextResponse.json({ message: 'You are not authorized.' })
            }
            const isAuthorized = await prisma.account.findFirst({ where: { access_token: accessToken } })

            if (!isAuthorized) {
                return NextResponse.json({ message: 'You are not authorized.' })
            }
        }

        const token = params.token
        const session = await prisma.session.findUnique({ where: { sessionToken: token } })

        if (!session) {
            return NextResponse.json({ message: 'No session token found.' })
        }

        return NextResponse.json(session)
    } catch (err) {
        console.error(err)
    }
}
