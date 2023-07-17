'use client'

import { useState } from 'react'

import { Workspace } from '@prisma/client'

import SearchBar from './SearchBar'
import Sidebar from './Sidebar'

const Navigation = (workspace: Workspace) => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

    const handleSidebar = (e: React.MouseEvent<HTMLButtonElement>) => {
        setSidebarIsOpen((prev) => !prev)
    }
    return (
        <>
            <SearchBar title={workspace.title} logo={workspace?.logo || ''} handleSidebar={handleSidebar} />
            <Sidebar sidebarIsOpen={sidebarIsOpen} />
        </>
    )
}

export default Navigation
