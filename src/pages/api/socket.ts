import { prisma } from '@/lib/prisma'
import { Server } from 'socket.io'

const SocketHandler = async (req: Request, res: any) => {
    if (!res.socket.server.io) {
        console.log('Socket is initializing')

        const io = new Server(res.socket.server, {
            path: '/api/socket',
            addTrailingSlash: false,
        })

        // Server-Side Socket.js setup
        io.on('connection', (socket) => {
            console.log('User connected: ', socket.id)

            socket.on('join_room', (data) => {
                const { username, receiverId, receiverType } = data
                socket.join(receiverId)
                console.log(`${username} joined ${receiverType} ${receiverId}`)
            })

            socket.on('leave_room', (data) => {
                const { username, receiverId, receiverType } = data
                socket.leave(receiverId)
                console.log(`${username} left ${receiverType} ${receiverId}`)
            })

            socket.on('chat_message', async (data) => {
                const { id, content, senderId, receiverId, receiverType } = data

                try {
                    await prisma.message.create({
                        data: {
                            id,
                            content,
                            sender: {
                                connect: {
                                    id: senderId,
                                },
                            },
                            ...(receiverType === 'channel' && {
                                channel: {
                                    connect: {
                                        id: receiverId,
                                    },
                                },
                            }),
                            ...(receiverType === 'project' && {
                                project: {
                                    connect: {
                                        id: receiverId,
                                    },
                                },
                            }),
                            ...(receiverType === 'task' && {
                                task: {
                                    connect: {
                                        id: receiverId,
                                    },
                                },
                            }),
                            ...(receiverType === 'users' && {
                                users: {
                                    connect: {
                                        id: receiverId,
                                    },
                                },
                            }),
                        },
                    })

                    socket.to(receiverId).emit('message', { id, content, senderId, receiverId })
                } catch (error) {
                    console.error('Error saving private message to database:', error)
                }
            })

            socket.on('disconnect', () => {
                console.log('User disconnected:', socket.id)
            })
        })

        //     // socket.on('input-change', (msg) => {
        //     //     socket.broadcast.emit('update-input', msg)
        //     // })
        // })

        res.socket.server.io = io
    }
    res.end()
}

export const config = {
    api: {
        bodyParser: false,
    },
}

export default SocketHandler
