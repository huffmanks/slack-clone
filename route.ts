// import { NextResponse } from 'next/server'
// import { getServerSession } from 'next-auth/next'

// import { authOptions } from '@/lib/auth'

// export async function GET(request: Request) {
//     const session = await getServerSession(authOptions)

//     if (!session) {
//         return new NextResponse(JSON.stringify({ error: 'unauthorized' }), {
//             status: 401,
//         })
//     }

//     return session

//     // console.log('GET API', session)
//     // return NextResponse.json({ authenticated: !!session })
// }
