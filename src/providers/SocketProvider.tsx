'use client'

import { io, Socket } from 'socket.io-client'
import { useEffect, useState, createContext, useContext } from 'react'
import { useUser } from '@clerk/nextjs'
import type { UserResource } from '@clerk/types'

interface SocketState {
    socket?: Socket
    user?: UserResource
}

const SocketContext = createContext<SocketState | null>(null)

const SocketProvider = ({ children }: { children: React.ReactNode }) => {
    const [socketState, setSocketState] = useState<SocketState>({})
    const { isSignedIn, user } = useUser()

    useEffect(() => {
        const socket = io({ path: '/api/socket', autoConnect: false, addTrailingSlash: false })

        if (isSignedIn && user) {
            socket.connect()

            socket.on('connect', () => {
                setSocketState({ socket, user })
            })
        }
        socket.on('connect', () => {
            setSocketState({ socket })
        })

        socket.on('disconnect', () => {
            setSocketState({})
        })

        return () => {
            setSocketState({})
            socket.disconnect()
        }
    }, [user])

    return <SocketContext.Provider value={socketState}>{children}</SocketContext.Provider>
}

export default SocketProvider

export const useSocket = () => {
    return useContext(SocketContext)
}
