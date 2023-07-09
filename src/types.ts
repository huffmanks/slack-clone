export interface User {
    id: string
    username: string
    channels?: Channel[]
    messages?: Message[]
    createdAt: Date
    updatedAt: Date
}

export interface Channel {
    id: string
    name: string
    users?: User[]
    messages?: Message[]
    createdAt: Date
    updatedAt: Date
}

export interface Message {
    id: string
    content: string
    senderId: string
    channelId: string
    createdAt: Date
    updatedAt: Date
}
