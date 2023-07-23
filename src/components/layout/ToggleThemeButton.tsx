'use client'

import { useTheme } from 'next-themes'
import { MoonStar, Sun, SunMoon } from 'lucide-react'

import useIsMounted from '@/hooks/useIsMounted'
import { Button } from '@/components/ui/button'

const ToggleThemeButton = () => {
    const { resolvedTheme, setTheme } = useTheme()
    const isMounted = useIsMounted()

    return (
        <Button
            aria-label='Toggle theme'
            variant='ghost'
            size='icon'
            className='p-1.5 hover:bg-zinc-300 dark:hover:bg-zinc-900 focus-visible:bg-zinc-300 dark:focus-visible:bg-zinc-900'
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
            {!isMounted ? <SunMoon className='h-5 w-5 text-orange-300' /> : resolvedTheme === 'dark' ? <Sun className='h-5 w-5 text-orange-300' /> : <MoonStar className='h-5 w-5 text-zinc-900' />}
        </Button>
    )
}

export default ToggleThemeButton
