'use client'

import { useRef } from 'react'
import ChatForm from './ChatForm'
import { useSocket } from '@/providers/SocketProvider'

interface Props {
    roomId: string
    roomName: string
    title: string
    children: React.ReactNode
}

const ChatContainer = ({ roomId, roomName, title, children }: Props) => {
    const messagesRef = useRef<HTMLDivElement>(null)
    const ws = useSocket()

    const username = 'kaos'

    if (ws?.socket) {
        ws.socket.emit(`join_${roomName}`, { username, title })

        ws.socket.on('message', ({ id, content, senderId }) => {
            console.log('client message: ', content)
        })
    }
    return (
        <div ref={messagesRef} className='mb-4 max-h-96 overflow-y-auto'>
            {children}
            <ChatForm messagesRef={messagesRef} roomId={roomId} roomName={roomName} />
        </div>
    )
}

export default ChatContainer
