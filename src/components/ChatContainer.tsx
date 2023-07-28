'use client'

import { useEffect, useRef, useState } from 'react'

import { useSocket } from '@/providers/SocketProvider'

import ChatForm from './ChatForm'
import { useDashboard } from '@/providers/DashboardProvider'
import { MessageWithSender } from '@/types'

interface Props {
    messages: MessageWithSender[]
    receiverId: string
    receiverType: string
}

const ChatContainer = ({ messages, receiverId, receiverType }: Props) => {
    const messagesRef = useRef<HTMLDivElement>(null)
    const ws = useSocket()
    const { userInfo } = useDashboard()

    const [chatMessages, setChatMessages] = useState(messages)
    const [userTyping, setUserTyping] = useState('')

    useEffect(() => {
        ws?.socket?.emit('join_room', { username: userInfo.username, receiverId, receiverType })

        return () => {
            ws?.socket?.emit('leave_room', { username: userInfo.username, receiverId, receiverType })
        }
    }, [])

    if (ws?.socket) {
        ws.socket.off('message').on('message', (data) => {
            setChatMessages((prev) => [...prev, data])
        })

        if (!userTyping) {
            ws.socket.off('user_typing').on('user_typing', (data) => {
                setUserTyping(data.username)

                setTimeout(() => {
                    setUserTyping('')
                }, 1000)
            })
        }
    }
    return (
        <div ref={messagesRef} className='mb-4 max-h-96 overflow-y-auto'>
            {chatMessages &&
                chatMessages
                    .sort((a, b) => new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf())
                    .map((message) => (
                        <div key={message.id}>
                            <div className='mb-1 text-sm'>{message.sender.username}</div>
                            <div className='w-fit rounded-full bg-zinc-700 px-3 py-1'>{message.content}</div>
                        </div>
                    ))}
            {userTyping && <div>{userTyping} is typing...</div>}
            <ChatForm messagesRef={messagesRef} receiverId={receiverId} receiverType={receiverType} />
        </div>
    )
}

export default ChatContainer
