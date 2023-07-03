interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string
    icon?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ title, icon, ...props }) => {
    return (
        <button
            {...props}
            className={`rounded-lg bg-purple-700 px-5 py-2.5 font-medium text-zinc-100 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ${
                title && icon && 'inline-flex items-center justify-center gap-2 xs:w-full'
            }`}>
            {icon && icon}
            {title && <span>{title}</span>}
        </button>
    )
}

export default Button
