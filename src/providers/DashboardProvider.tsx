'use client'

import { useEffect, useState, createContext, useContext } from 'react'
import { useUser } from '@clerk/nextjs'
import { Channel, Project, User, Workspace } from '@prisma/client'
import { UserWithWorkspaces } from '@/types'

const initialContextState = {
    isOpen: {
        sidebarMobileMenu: false,
        workspaceDropdown: false,
    },
}

interface DashboardState {
    workspace?: Workspace | null
    projects?: Project[] | null
    channels?: Channel[] | null
    userInfo?: UserWithWorkspaces | null
    isOpen: IsOpen
    handleIsOpen?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export interface IsOpen {
    [key: string]: boolean
}

const DashboardContext = createContext<DashboardState>(initialContextState)

const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState<IsOpen>(initialContextState.isOpen)
    const [workspace, setWorkspace] = useState(null)
    const [projects, setProjects] = useState(null)
    const [channels, setChannels] = useState(null)
    const [userInfo, setUserInfo] = useState(null)

    const { user } = useUser()

    const handleIsOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { id } = e.currentTarget

        setIsOpen((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    useEffect(() => {
        const getWorkspace = async () => {
            // TODO: send to login
            if (!user) return

            try {
                const userResponse = await fetch(`http://localhost:3000/api/users/${user?.id}`)
                const userData = await userResponse.json()

                if (!userData) return

                const { lastWorkspace, ...rest } = userData
                const { projects: ws_projects, channels: ws_channels, ...workspaceInfo } = lastWorkspace

                setWorkspace(workspaceInfo)
                setChannels(ws_channels)
                setProjects(ws_projects)
                setUserInfo(rest)
            } catch (error) {
                console.log(error)
            }
        }
        getWorkspace()
    }, [user])

    const value = {
        workspace,
        projects,
        channels,
        userInfo,
        isOpen,
        handleIsOpen,
    }

    return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
}

export default DashboardProvider

export const useDashboard = () => {
    return useContext(DashboardContext)
}
