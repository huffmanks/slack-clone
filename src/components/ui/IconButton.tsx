interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
}

const IconButton: React.FC<ButtonProps> = ({ children, className, ...props }) => {
    return (
        <button {...props} className={`rounded-full focus:outline-none ${className}`}>
            {children}
        </button>
    )
}

export default IconButton
