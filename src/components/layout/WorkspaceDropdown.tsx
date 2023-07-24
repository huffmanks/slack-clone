'use client'

import Image from 'next/image'
import { Briefcase, ChevronDown, Settings, Settings2 } from 'lucide-react'

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
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DialogDescription, DialogFooter, DialogHeader, DialogItem, DialogTitle } from '@/components/ui/dialog'

const WorkspaceDropdown = () => {
    const { workspace, userInfo, handleChangeWorkspace } = useDashboard()

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
                            <Image src={workspace.logo!} width={32} height={32} className='h-8 w-8 rounded-lg' alt={workspace ? workspace.title : 'Workspace logo'} />

                            <span className='text-lg font-semibold'>{workspace.title}</span>
                        </div>
                        <ChevronDown className='h-4 w-4' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-60'>
                    <DropdownMenuLabel className='truncate'>{workspace.title}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DialogItem icon={<Settings2 className='mr-2 h-4 w-4' />} title='Preferences' shortcut='⇧⌘P'>
                            <>
                                <DialogHeader>
                                    <DialogTitle>Edit preferences</DialogTitle>
                                    <DialogDescription>Make changes to your preferences here.</DialogDescription>
                                </DialogHeader>
                                <div>add preferences inputs here</div>
                                <DialogFooter>
                                    <Button type='submit'>Save changes</Button>
                                </DialogFooter>
                            </>
                        </DialogItem>

                        <DialogItem icon={<Settings className='mr-2 h-4 w-4' />} title='Settings' shortcut='⇧⌘S'>
                            <>
                                <DialogHeader>
                                    <DialogTitle>Edit settings</DialogTitle>
                                    <DialogDescription>Make changes to your settings here.</DialogDescription>
                                </DialogHeader>
                                <div>add settings inputs here</div>
                                <DialogFooter>
                                    <Button type='submit'>Save changes</Button>
                                </DialogFooter>
                            </>
                        </DialogItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <Briefcase className='mr-2 h-4 w-4' />
                            <span>Workspaces</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                {userInfo &&
                                    userInfo.workspaces.map((ws) => (
                                        <DropdownMenuItem key={ws.id} disabled={ws.id === workspace?.id} className='p-0'>
                                            <Button variant='ghost' size='sm' className='px-2 py-1.5 hover:bg-transparent' onClick={(e) => handleChangeWorkspace(ws.id, e)}>
                                                {ws.title} {ws.id === workspace?.id && `(current)`}
                                            </Button>
                                        </DropdownMenuItem>
                                    ))}
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default WorkspaceDropdown
