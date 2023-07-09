'use client'

import { useRef } from 'react'
import ChatForm from './ChatForm'
import { useSocket } from '@/providers/SocketProvider'

interface Props {
    channelId: string
    channelName: string
    children: React.ReactNode
}

const ChatContainer = ({ channelId, channelName, children }: Props) => {
    const messagesRef = useRef<HTMLDivElement>(null)
    const ws = useSocket()

    const username = 'kaos'

    if (ws?.socket) {
        ws.socket.emit('join_channel', { username, channelName })

        ws.socket.on('message', ({ id, content, senderId, channelId }) => {
            console.log('client message: ', content)
        })
    }
    return (
        <div ref={messagesRef} className='mb-4 max-h-96 overflow-y-auto'>
            {children}
            <ChatForm messagesRef={messagesRef} channelId={channelId} />
        </div>
    )
}

export default ChatContainer
