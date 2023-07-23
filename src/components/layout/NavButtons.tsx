'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

const NavButtons = () => {
    const router = useRouter()

    return (
        <div className='hidden gap-2 md:flex'>
            <Button
                aria-label='Go back'
                variant='ghost'
                size='icon'
                className='hover:bg-zinc-300 dark:hover:bg-zinc-900 focus-visible:bg-zinc-300 dark:focus-visible:bg-zinc-900'
                onClick={() => router.back()}>
                <ArrowLeft className='h-5 w-5' />
            </Button>
            <Button
                aria-label='Go forward'
                variant='ghost'
                size='icon'
                className='hover:bg-zinc-300 dark:hover:bg-zinc-900 focus-visible:bg-zinc-300 dark:focus-visible:bg-zinc-900'
                onClick={() => router.forward()}>
                <ArrowRight className='h-5 w-5' />
            </Button>
        </div>
    )
}

export default NavButtons
