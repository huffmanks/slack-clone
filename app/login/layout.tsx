const LoginLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div
                tabIndex={-1}
                aria-modal='true'
                aria-label='login'
                role='dialog'
                className='fixed left-0 right-0 top-0 z-50 h-screen max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0'>
                <div className='relative mx-auto flex h-full w-full max-w-md items-center justify-center'>{children}</div>
            </div>
        </>
    )
}

export default LoginLayout
