import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs'

import { prisma } from '@/lib/prisma'
import Navigation from '@/components/layout/Navigation'

const layout = async ({ children }: { children: React.ReactNode }) => {
    const { userId } = auth()

    const user = await prisma.user.findUnique({ where: { externalId: userId! }, include: { workspaces: true } })
    if (!user) {
        // send to workspace registration
        redirect('/sign-in')
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

export default layout
