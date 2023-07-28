'use client'

import { useState } from 'react'
import { createId } from '@paralleldrive/cuid2'
import { useSocket } from '@/providers/SocketProvider'
import { useDashboard } from '@/providers/DashboardProvider'

interface Props {
    messagesRef: any
    receiverId: string
    receiverType: string
}

const ChatForm = ({ messagesRef, receiverId, receiverType }: Props) => {
    const [newMessage, setNewMessage] = useState('')
    const ws = useSocket()
    const { userInfo } = useDashboard()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewMessage(e.target.value)

        if (ws?.socket) {
            ws.socket.emit('input_change', { receiverId, username: userInfo.username })
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const messageObj = {
            id: createId(),
            content: newMessage,
            senderId: userInfo?.id,
            receiverId,
            receiverType,
        }

        if (ws?.socket) {
            ws.socket.emit('chat_message', messageObj)
        }

        setTimeout(() => {
            if (messagesRef?.current) {
                messagesRef.current.scrollTop = messagesRef.current.scrollHeight
            }
        }, 100)

        setNewMessage('')
    }

    return (
        <form className='ml-auto max-w-xs' onSubmit={handleSubmit}>
            <div className='flex w-full rounded-lg bg-zinc-800'>
                <input className='w-full bg-transparent px-3 py-1.5 outline-none' type='text' value={newMessage} onChange={handleChange} />
                <button className='border-none bg-transparent px-3 py-1.5 text-sm outline-none'>Send</button>
            </div>
        </form>
    )
}

export default ChatForm
