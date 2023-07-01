'use client'

import { signOut } from 'next-auth/react'

const SignOut = () => {
    return (
        <>
            <button
                type='button'
                onClick={() => signOut({ callbackUrl: '/login' })}
                className='rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-purple-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:shadow-lg dark:shadow-purple-800/80 dark:focus:ring-purple-800'>
                Sign Out
            </button>
        </>
    )
}

export default SignOut
