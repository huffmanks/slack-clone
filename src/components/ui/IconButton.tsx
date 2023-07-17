interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
}

const IconButton: React.FC<ButtonProps> = ({ children, className, ...props }) => {
    return (
        <button {...props} className={`rounded-full text-zinc-900 focus:outline-none disabled:text-zinc-600 dark:text-zinc-100 dark:disabled:text-zinc-400 ${className}`}>
            {children}
        </button>
    )
}

export default IconButton
