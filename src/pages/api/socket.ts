import { prisma } from '@/lib/prisma'
import { Server } from 'socket.io'

const SocketHandler = async (req: Request, res: any) => {
    if (!res.socket.server.io) {
        console.log('Socket is initializing')

        const io = new Server(res.socket.server, {
            path: '/api/socket',
            addTrailingSlash: false,
        })

        io.on('connection', (socket) => {
            console.log('New client connected')

            // Handle joining project
            socket.on('join_project', async ({ userId, channelName }) => {
                const user = await prisma.user.findUnique({ where: { id: userId } })
                if (user) {
                    socket.join(channelName)
                    socket.to(channelName).emit('joined', { username: user.username, content: `${user.username} has joined the chat` })
                }
            })

            socket.on('leave_project', async ({ userId, channelName }) => {
                socket.leave(channelName)
            })

            // Handle joining task
            socket.on('join_task', async ({ userId, taskName }) => {
                const user = await prisma.user.findUnique({ where: { id: userId } })
                if (user) {
                    socket.join(taskName)
                    socket.to(taskName).emit('joined', { username: user.username, content: `${user.username} has joined the chat` })
                }
            })

            socket.on('leave_task', async ({ userId, taskName }) => {
                socket.leave(taskName)
            })

            // Handle chat messages
            socket.on('chat_message', async ({ id, content, senderId, channelId }) => {
                // find out which room message is coming from and update that project or task
                //
                // const user = await prisma.user.findUnique({ where: { id: senderId } })
                // const channel = await prisma.channel.findUnique({ where: { id: channelId } })
                // if (channel) {
                //     console.log('server message: ', content)
                //     socket.to(channel.name).emit('message', { id, content, senderId, channelId })
                // }
            })

            // socket.on('input-change', (msg) => {
            //     socket.broadcast.emit('update-input', msg)
            // })
        })

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
