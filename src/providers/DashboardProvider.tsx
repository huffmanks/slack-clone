'use client'

import { useEffect, useState, createContext, useContext } from 'react'
import { useUser } from '@clerk/nextjs'
import { Project, Workspace } from '@prisma/client'

const initialContextState = {
    workspace: {
        id: '',
        title: '',
        logo: '',
    },
    isOpen: {
        sidebarMobileMenu: false,
        workspaceDropdown: false,
    },
}

interface DashboardState {
    workspace?: Workspace | WorkspaceInfo
    projects?: Project[] | null
    isOpen: IsOpen
    handleIsOpen?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

interface WorkspaceInfo {
    id: string
    title: string
    logo: string
}

export interface IsOpen {
    [key: string]: boolean
}

const DashboardContext = createContext<DashboardState>(initialContextState)

const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState<IsOpen>(initialContextState.isOpen)
    const [workspace, setWorkspace] = useState<Workspace | WorkspaceInfo>(initialContextState.workspace)
    const [projects, setProjects] = useState<Project[] | null>(null)

    const { user } = useUser()

    const handleIsOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { id } = e.currentTarget

        setIsOpen((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    useEffect(() => {
        const getWorkspaceInfo = async () => {
            // TODO: send to login
            if (!user) return

            const userResponse = await fetch(`http://localhost:3000/api/users/${user?.id}`)
            const userData = await userResponse.json()

            // TODO: If no workspace send to workspace registration

            if (userData) {
                // TODO: set workspace of last login
                setWorkspace(userData.workspaces?.[0])
            }

            // TODO: only show projects from above workspace
            const projectResponse = await fetch('http://localhost:3000/api/projects')
            const projectData = await projectResponse.json()

            if (projectData) {
                setProjects(projectData)
            }
        }
        getWorkspaceInfo()
    }, [user])

    const value = {
        workspace,
        projects,
        isOpen,
        handleIsOpen,
    }

    return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
}

export default DashboardProvider

export const useDashboard = () => {
    return useContext(DashboardContext)
}
