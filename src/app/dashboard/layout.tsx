import { redirect } from 'next/navigation'
import { auth, UserButton } from '@clerk/nextjs'

import { prisma } from '@/lib/prisma'
import Navigation from '@/components/Navigation'

const layout = async ({ children }: { children: React.ReactNode }) => {
    const { userId } = auth()

    // console.log(userId)

    const user = await prisma.user.findUnique({ where: { externalId: userId! }, include: { workspaces: true } })
    if (!user) {
        // send to workspace registration
        redirect('/sign-in')
    }

    const workspace = user.workspaces[0]
    // const workspace = { id: '1', title: 'Marketing', logo: '', createdAt: new Date('2023-07-13T14:46:44.289Z'), updatedAt: new Date('2023-07-13T14:46:44.289Z') }

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
