import { Message, User } from '@prisma/client'

export interface Params {
    params: {
        [key: string]: string
    }
}

export interface MessageWithSender extends Message {
    sender: User
}
