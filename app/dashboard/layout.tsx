'use client'
import SignOut from '@/components/SignOut'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <div>DashboardLayout</div>
            <SignOut />
            {children}
        </main>
    )
}

export default DashboardLayout
