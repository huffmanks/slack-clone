'use client'

import { useState } from 'react'
import { createId } from '@paralleldrive/cuid2'
import { useSocket } from '@/providers/SocketProvider'

interface Props {
    messagesRef: any
    channelId: string
}

const ChatForm = ({ messagesRef, channelId }: Props) => {
    const [newMessage, setNewMessage] = useState('')
    const ws = useSocket()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const messageObj = {
            id: createId(),
            content: newMessage,
            senderId: '6563aec4-e124-4a05-b493-29d1fa25c764',
            channelId,
        }

        const createMessage = async () => {
            const res = await fetch('http://localhost:3000/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(messageObj),
            })
            return res.json()
        }

        createMessage()

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
                <input className='w-full bg-transparent px-3 py-1.5 outline-none' type='text' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
                <button className='border-none bg-transparent px-3 py-1.5 text-sm outline-none'>Send</button>
            </div>
        </form>
    )
}

export default ChatForm
