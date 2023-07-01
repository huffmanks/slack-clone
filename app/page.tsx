import Link from 'next/link'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function Home() {
    const session = await getServerSession(authOptions)

    if (session) {
        redirect('/dashboard')
    }
    return (
        <>
            <div>Home</div>
            <Link href='/login'>Login</Link>
        </>
    )
}
