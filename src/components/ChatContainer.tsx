'use client'

import { useRef } from 'react'

import { useSocket } from '@/providers/SocketProvider'
import { useDashboard } from '@/providers/DashboardProvider'

import ChatForm from './ChatForm'

interface Props {
    roomId: string
    roomName: string
    title: string
    children: React.ReactNode
}

const ChatContainer = ({ roomId, roomName, title, children }: Props) => {
    const messagesRef = useRef<HTMLDivElement>(null)
    const ws = useSocket()
    const { userInfo } = useDashboard()

    if (ws?.socket) {
        ws.socket.emit(`join_${roomName}`, { userId: userInfo?.id, title })

        ws.socket.on('message', ({ id, content, senderId, projectId }) => {
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
