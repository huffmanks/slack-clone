import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils'

const inputVariants = cva('w-full outline-none', {
    variants: {
        variant: {
            default:
                'flex h-10 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-800',
            ghost: 'bg-transparent',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
})

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, variant, type, ...props }, ref) => {
    return <input type={type} className={cn(inputVariants({ variant, className }))} ref={ref} {...props} />
})
Input.displayName = 'Input'

export { Input, inputVariants }
