'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { X } from 'lucide-react'

import { cn } from '@/utils'
import { DropdownMenuShortcut } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = ({ className, ...props }: DialogPrimitive.DialogPortalProps) => <DialogPrimitive.Portal className={cn(className)} {...props} />
DialogPortal.displayName = DialogPrimitive.Portal.displayName

const DialogOverlay = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn(
            'fixed inset-0 z-50 bg-zinc-900/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 dark:bg-zinc-900/50',
            className
        )}
        {...props}
    />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(({ className, children, ...props }, ref) => (
    <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
            ref={ref}
            className={cn(
                'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-zinc-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full dark:border-zinc-800 dark:bg-zinc-950',
                className
            )}
            {...props}>
            {children}
            <DialogPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-zinc-100 data-[state=open]:text-zinc-500 dark:ring-offset-zinc-950 dark:focus:ring-zinc-800 dark:data-[state=open]:bg-zinc-800 dark:data-[state=open]:text-zinc-400'>
                <X className='h-4 w-4' />
                <span className='sr-only'>Close</span>
            </DialogPrimitive.Close>
        </DialogPrimitive.Content>
    </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title ref={ref} className={cn('text-lg font-semibold leading-none tracking-tight', className)} {...props} />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Description>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>>(({ className, ...props }, ref) => (
    <DialogPrimitive.Description ref={ref} className={cn('text-sm text-zinc-500 dark:text-zinc-400', className)} {...props} />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

interface DialogItemProps {
    className?: string
    icon: React.ReactNode
    title: string
    shortcut?: string
    children: React.ReactNode
    onSelect?: () => void
    onOpenChange?: (open: boolean) => void
}

const DialogItem = React.forwardRef<HTMLDivElement, DialogItemProps>(({ className, icon, title, shortcut, children, onSelect, onOpenChange, ...props }, forwardedRef) => {
    return (
        <Dialog onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <DropdownMenuPrimitive.Item
                    {...props}
                    ref={forwardedRef}
                    className={cn(
                        'relative flex cursor-default select-none items-center rounded-sm text-sm outline-none transition-colors focus:bg-zinc-200 focus:text-zinc-800 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-200',
                        className
                    )}
                    onSelect={(event) => {
                        event.preventDefault()
                        onSelect && onSelect()
                    }}>
                    <Button variant='ghost' size='sm' className='w-full h-auto px-2 py-1.5 rounded-sm hover:bg-transparent'>
                        {icon}
                        <span>{title}</span>
                        <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>
                    </Button>
                </DropdownMenuPrimitive.Item>
            </DialogTrigger>
            <DialogPortal>
                <DialogOverlay />
                <DialogContent className='sm:max-w-[425px]'>{children}</DialogContent>
            </DialogPortal>
        </Dialog>
    )
})

DialogItem.displayName = DialogPrimitive.Root.displayName

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogItem }
