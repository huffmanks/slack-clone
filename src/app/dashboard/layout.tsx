import DashboardProvider from '@/providers/DashboardProvider'
import NavBar from '@/components/layout/NavBar'
import Sidebar from '@/components/layout/Sidebar'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <DashboardProvider>
            <NavBar />
            <Sidebar />

            <main className='p-4 sm:ml-64'>
                <div className='mt-14 p-4'>{children}</div>
            </main>
        </DashboardProvider>
    )
}

export default layout
