'use client'

import { useEffect, useState, createContext, useContext } from 'react'
import { useRouter } from 'next/navigation'

import { useUser } from '@clerk/nextjs'
import { Channel, Project, Workspace } from '@prisma/client'
import { ProjectOrChannelFlat, UserInfoFlat, UserWithWorkspaces, WorkspaceFlat } from '@/types'

const initialContextState = {
    workspace: {
        id: '',
        title: 'Workspace',
        logo: 'https://dummyimage.com/64x64/5656ff/5656ff.png',
    },
    projects: [
        {
            id: '',
            title: '',
        },
    ],
    channels: [
        {
            id: '',
            title: '',
        },
    ],
    userInfo: {
        id: '',
        workspaces: [],
    },
    isOpen: {
        sidebarMobileMenu: false,
        workspaceDropdown: false,
    },
    handleIsOpen: () => {},
    handleChangeWorkspace: () => {},
}

interface DashboardState {
    workspace: Workspace | WorkspaceFlat
    projects: Project[] | ProjectOrChannelFlat[]
    channels: Channel[] | ProjectOrChannelFlat[]
    userInfo: UserWithWorkspaces | UserInfoFlat
    isOpen: IsOpen
    handleIsOpen: (e: React.MouseEvent<HTMLButtonElement>) => void
    handleChangeWorkspace: (workspaceId: string, e: React.MouseEvent<HTMLButtonElement>) => void
}

export interface IsOpen {
    [key: string]: boolean
}

const DashboardContext = createContext<DashboardState>(initialContextState)

const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState<IsOpen>(initialContextState.isOpen)
    const [workspace, setWorkspace] = useState(initialContextState.workspace)
    const [projects, setProjects] = useState(initialContextState.projects)
    const [channels, setChannels] = useState(initialContextState.channels)
    const [userInfo, setUserInfo] = useState(initialContextState.userInfo)

    const router = useRouter()
    const { user } = useUser()

    const handleIsOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { id } = e.currentTarget

        setIsOpen((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }
    const getWorkspace = async () => {
        // TODO: send to login
        if (!user) return

        try {
            const userResponse = await fetch(`http://localhost:3000/api/users/${user?.id}`)
            const userData = await userResponse.json()

            if (!userData) return

            const { lastWorkspace } = userData
            const { projects: ws_projects, channels: ws_channels, ...workspaceInfo } = lastWorkspace

            setWorkspace(workspaceInfo)
            setChannels(ws_channels)
            setProjects(ws_projects)
            setUserInfo(userData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getWorkspace()
    }, [user, userInfo])

    const handleChangeWorkspace = (workspaceId: string, e: React.MouseEvent<HTMLButtonElement>) => {
        const updateWorkspace = async () => {
            const res = await fetch(`http://localhost:3000/api/users/${userInfo.id}`, {
                method: 'PATCH',
                body: JSON.stringify({ workspaceId }),
            })

            return res.json()
        }

        updateWorkspace()

        setUserInfo((prev) => ({
            ...prev,
            workspaceId,
        }))

        router.push('/dashboard')
    }

    const value = {
        workspace,
        projects,
        channels,
        userInfo,
        isOpen,
        handleIsOpen,
        handleChangeWorkspace,
    }

    return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
}

export default DashboardProvider

export const useDashboard = () => {
    return useContext(DashboardContext)
}
