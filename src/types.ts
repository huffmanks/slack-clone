import { Message, User, Workspace } from '@prisma/client'

export interface Params {
    params: {
        [key: string]: string
    }
}

export interface WorkspaceFlat {
    id: string
    title: string
    logo: string
}

export interface ProjectOrChannelFlat {
    id: string
    title: string
}

export interface UserWithWorkspaces extends User {
    workspaces: Workspace[]
    workspaceId: string
}

export interface UserInfoFlat {
    id: string
    username?: string
    workspaces: Workspace[] | []
}

export interface MessageWithSender extends Message {
    sender: User
}
