'use client'

import { useEffect, useRef } from 'react'

import { useSocket } from '@/providers/SocketProvider'

import ChatForm from './ChatForm'
import { useDashboard } from '@/providers/DashboardProvider'

interface Props {
    receiverId: string
    receiverType: string
    children: React.ReactNode
}

const ChatContainer = ({ receiverId, receiverType, children }: Props) => {
    const messagesRef = useRef<HTMLDivElement>(null)
    const ws = useSocket()
    const { userInfo } = useDashboard()

    useEffect(() => {
        ws?.socket?.emit('join_room', { username: userInfo.username, receiverId, receiverType })

        return () => {
            ws?.socket?.emit('leave_room', { username: userInfo.username, receiverId, receiverType })
        }
    }, [])

    if (ws?.socket) {
        ws.socket.on('message', (data) => {
            console.log('client message: ', data.content)
        })
    }
    return (
        <div ref={messagesRef} className='mb-4 max-h-96 overflow-y-auto'>
            {children}
            <ChatForm messagesRef={messagesRef} receiverId={receiverId} receiverType={receiverType} />
        </div>
    )
}

export default ChatContainer
