'use client'

import Image from 'next/image'
import { UserButton, useUser } from '@clerk/nextjs'

const ProfileButton = () => {
    const { isLoaded } = useUser()

    return (
        <>
            <div className='w-8 h-8 rounded-full'>
                {isLoaded ? <UserButton afterSignOutUrl='/' /> : <Image className='w-8 h-8 rounded-full' width={32} height={32} src='/assets/user-profile.png' alt='user profile' />}
            </div>
        </>
    )
}

export default ProfileButton
