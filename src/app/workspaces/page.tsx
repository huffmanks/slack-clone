'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { useAuth } from '@clerk/nextjs'
import { Workspace } from '@prisma/client'

import MainLayout from '@/components/layout/MainLayout'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const page = () => {
    const [workspaces, setWorkspaces] = useState<Workspace[]>([])

    const { userId } = useAuth()
    const router = useRouter()

    useEffect(() => {
        const getWorkspaces = async () => {
            const res = await fetch('http://localhost:3000/api/workspaces')
            const data = await res.json()
            setWorkspaces(data)
        }

        getWorkspaces()
    }, [])

    const handleClick = async (workspaceId: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        try {
            const user = await fetch(`http://localhost:3000/api/users/${userId}`)
            const { id } = await user.json()

            const res = await fetch(`http://localhost:3000/api/users/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({ workspaceId }),
            })

            if (res.ok) {
                router.push('/dashboard')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <MainLayout>
                <h1 className='font-bold text-3xl mb-2'>Workspaces</h1>
                <p className='mb-12'>Join one of the workspaces below.</p>

                <div className='grid grid-cols-2 gap-8'>
                    {workspaces &&
                        workspaces.map((workspace) => (
                            <Card key={workspace.id}>
                                <CardHeader>
                                    <CardTitle>{workspace.title}</CardTitle>
                                    <CardDescription>{workspace.slug}</CardDescription>
                                </CardHeader>

                                <CardFooter>
                                    <Button className='ml-auto' onClick={(e) => handleClick(workspace.id, e)}>
                                        Join
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                </div>
            </MainLayout>
        </>
    )
}

export default page
