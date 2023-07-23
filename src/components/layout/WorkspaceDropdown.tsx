'use client'

import Image from 'next/image'
import { ChevronDown, Settings, User, Users } from 'lucide-react'

import { useDashboard } from '@/providers/DashboardProvider'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const WorkspaceDropdown = () => {
    const { workspace } = useDashboard()

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        aria-label='Workspace dropdown'
                        id='workspaceDropdown'
                        variant='ghost'
                        size='workspace'
                        className='flex w-full items-center justify-between gap-2 rounded-lg overflow-hidden hover:bg-zinc-300 dark:hover:bg-zinc-900 focus-visible:bg-zinc-300 dark:focus-visible:bg-zinc-900'>
                        <div className='flex items-center gap-2 truncate'>
                            <Image
                                src={workspace?.logo || 'https://dummyimage.com/64x64/5656ff/5656ff.png'}
                                width={32}
                                height={32}
                                className='h-8 w-8 rounded-lg'
                                alt={workspace ? workspace.title : 'Workspace logo'}
                            />

                            <span className='text-lg font-semibold'>{workspace ? workspace.title : 'Workspace'}</span>
                        </div>
                        <ChevronDown className='h-4 w-4' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-60'>
                    <DropdownMenuLabel>Workspace</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <User className='mr-2 h-4 w-4' />
                            <span>Preferences</span>
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className='mr-2 h-4 w-4' />
                            <span>Settings</span>
                            <DropdownMenuShortcut>⇧⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <Users className='mr-2 h-4 w-4' />
                            <span>Switch Workspaces</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem disabled>
                                    <span>Marketing (current)</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Workspace 2</span>
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default WorkspaceDropdown
