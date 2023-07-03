interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode
    isTransparent?: boolean
    className?: string
}

const IconButton: React.FC<ButtonProps> = ({ icon, isTransparent, className, ...props }) => {
    const buttonColors = isTransparent
        ? 'bg-transparent hover:enabled:bg-zinc-200 dark:hover:enabled:bg-zinc-700'
        : 'enabled:bg-purple-700 hover:enabled:bg-purple-800 dark:enabled:bg-purple-600 dark:hover:enabled:bg-purple-700'
    return (
        <button {...props} className={`rounded-full p-1 text-zinc-900 focus:outline-none disabled:text-zinc-600 dark:text-zinc-100 dark:disabled:text-zinc-400 ${buttonColors} ${className}`}>
            {icon}
        </button>
    )
}

export default IconButton
