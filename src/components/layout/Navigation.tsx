'use client'

import DashboardProvider from '@/providers/DashboardProvider'
import SearchBar from './SearchBar'
import Sidebar from './Sidebar'

const Navigation = () => {
    return (
        <DashboardProvider>
            <SearchBar />
            <Sidebar />
        </DashboardProvider>
    )
}

export default Navigation
