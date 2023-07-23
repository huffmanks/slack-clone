import { Message, User, Workspace } from '@prisma/client'

export interface Params {
    params: {
        [key: string]: string
    }
}

export interface MessageWithSender extends Message {
    sender: User
}

export interface UserWithWorkspaces extends User {
    workspaces: Workspace[]
}
