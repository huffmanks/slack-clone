'use client'

import { useState } from 'react'

import { Plus, ChevronDown } from 'lucide-react'

import { useDashboard } from '@/providers/DashboardProvider'

import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import CollapsibleItems from '@/components/layout/CollapsibleItems'

interface Props {
    title: string
    basePath: string
    isChannel?: boolean
}

const SidebarCollapsible = ({ title, basePath, isChannel }: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    const { channels, projects } = useDashboard()

    const channelsExist = isChannel && channels && channels.length > 0
    const projectsExist = !isChannel && projects && projects.length > 0

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className='mb-4'>
            <div className='flex items-center justify-between gap-2 px-1'>
                <CollapsibleTrigger asChild>
                    <Button
                        aria-label='Toggle collapsible'
                        disabled={channelsExist ? false : projectsExist ? false : true}
                        variant='ghost'
                        size='icon'
                        className='group flex items-center py-1 px-2 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-900 focus-visible:bg-zinc-300 dark:focus-visible:bg-zinc-900'>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-0' : '-rotate-90'}`} />
                        <span className='ml-3 pr-1 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-focus-visible:text-zinc-900 dark:group-focus-visible:text-zinc-100 transition-colors'>
                            {title}
                        </span>
                    </Button>
                </CollapsibleTrigger>
                <Button
                    aria-label={`Create a ${title}`}
                    variant='ghost'
                    size='icon'
                    className='rounded-full p-1 hover:bg-zinc-300 dark:hover:bg-zinc-900 focus-visible:bg-zinc-300 dark:focus-visible:bg-zinc-900'
                    onClick={() => console.log('hello')}>
                    <Plus className='w-4 h-4' />
                </Button>
            </div>

            <CollapsibleContent className='mb-4 pt-3 pb-4 px-1 overflow-y-auto max-h-64 border-b border-zinc-300 dark:border-zinc-700 transition-colors'>
                <CollapsibleItems basePath={basePath} items={channelsExist ? channels : projectsExist ? projects : []} />
            </CollapsibleContent>
        </Collapsible>
    )
}

export default SidebarCollapsible
