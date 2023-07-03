import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { prisma } from '@/lib/prisma'
import { authOptions } from '@/lib/auth'

import Navigation from '@/components/Navigation'

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/login')
    }

    const email = session.user?.email!

    const user = await prisma.user.findUnique({ where: { email }, include: { workspaces: true } })
    if (!user) {
        // send to workspace registration
        redirect('/login')
    }

    const workspace = user.workspaces[0]

    return (
        <>
            <Navigation {...workspace} />

            <main className='p-4 sm:ml-64'>
                <div className='mt-14 p-4'>{children}</div>
            </main>
        </>
    )
}

export default DashboardLayout
