'use client'

import Link from 'next/link'
import Image from 'next/image'

import { SignInButton, SignOutButton, SignUpButton, auth, useAuth } from '@clerk/nextjs'

import { Button } from '../ui/button'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const { sessionId } = useAuth()
    return (
        <main className='max-w-4xl mx-auto p-8'>
            <header className='flex items-center justify-between mb-12'>
                <div className=''>
                    <Image src='/assets/slack-clone_logo.png' alt='logo' width={100} height={25} />
                </div>
                <div className='flex items-center gap-4'>
                    {sessionId ? (
                        <>
                            <Button asChild>
                                <Link href='/dashboard'>Dashboard</Link>
                            </Button>
                            <SignOutButton />
                        </>
                    ) : (
                        <>
                            <Button asChild>
                                <SignInButton />
                            </Button>
                            <SignUpButton />
                        </>
                    )}
                </div>
            </header>
            {children}
        </main>
    )
}

export default MainLayout
