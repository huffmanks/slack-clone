'use client'

import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'

import SignOut from '@/components/SignOut'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const { data: session, status } = useSession()

    if (status === 'unauthenticated') {
        redirect('/login')
    }
    return (
        <>
            <div className='flex items-center justify-center gap-4 p-4'>
                <div>DashboardLayout</div>
                {session?.user?.name}
                <SignOut />
            </div>
            <main>{children}</main>
        </>
    )
}

export default DashboardLayout
