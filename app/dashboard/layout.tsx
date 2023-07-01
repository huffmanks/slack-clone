import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { prisma } from '@/lib/prisma'
import { authOptions } from '@/lib/auth'

import SignOut from '@/components/SignOut'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

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
            <div className='grid grid-cols-[auto_1fr]'>
                <Sidebar {...workspace} />

                <div>
                    <Navbar />
                    {/* <SignOut /> */}
                    <main className='px-6 pb-10 pt-4'>{children}</main>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout
