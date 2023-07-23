'use client'

import { Search } from 'lucide-react'

import { useDashboard } from '@/providers/DashboardProvider'
import { Input } from '@/components/ui/input'

const SearchInput = () => {
    const { workspace } = useDashboard()

    return (
        <div className='mx-auto flex w-3/4 items-center gap-2 rounded-md px-2 py-1.5 border border-zinc-300 bg-zinc-100 ring-offset-zinc-400 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-950 dark:bg-zinc-900 dark:ring-offset-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-900'>
            <Search className='h-4 w-4' />

            <Input type='text' variant='ghost' placeholder={`Search ${workspace ? workspace.title : 'Workspace'}`} />
        </div>
    )
}

export default SearchInput
