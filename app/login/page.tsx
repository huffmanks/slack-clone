'use client'

import { useSearchParams, redirect } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'

import { FaDiscord, FaGithub, FaGoogle } from 'react-icons/fa6'
import Button from '@/components/Button'

const Login = () => {
    const { status } = useSession()

    if (status === 'authenticated') {
        redirect('/dashboard')
    }

    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'
    return (
        <>
            <div className='relative w-full rounded-lg border border-gray-200 bg-white px-6 py-10 shadow dark:border-gray-700 dark:bg-gray-800'>
                <h1 className='mb-8 text-3xl font-medium leading-none tracking-[2px] text-green-500 first-letter:text-gray-900  dark:first-letter:text-white md:text-4xl lg:text-5xl'>Login</h1>
                <p className='text-center text-gray-500 dark:text-gray-400'>Continue with one of the providers below.</p>

                <hr className='mx-auto my-8 h-px w-64 max-w-[85.9%] rounded border-0 bg-gray-100 dark:bg-gray-700' />

                <div className='flex flex-wrap justify-center gap-x-4 gap-y-8 rounded-md shadow-sm' role='group'>
                    <Button
                        type='button'
                        onClick={() => signIn('discord', { callbackUrl })}
                        title='Discord'
                        aria-label='Sign in to Discord'
                        icon={<FaDiscord className='h-4 w-4 fill-current' fill='currentColor' />}
                    />
                    <Button
                        type='button'
                        // onClick={() => signIn('github', { callbackUrl })}
                        title='Github'
                        aria-label='Sign in to Github'
                        icon={<FaGithub className='h-4 w-4 fill-current' fill='currentColor' />}
                    />
                    <Button
                        type='button'
                        // onClick={() => signIn('google', { callbackUrl })}
                        title='Google'
                        aria-label='Sign in to Google'
                        icon={<FaGoogle className='h-4 w-4 fill-current' fill='currentColor' />}
                    />
                </div>
            </div>
        </>
    )
}

export default Login
