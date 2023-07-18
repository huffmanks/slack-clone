import Navigation from '@/components/layout/Navigation'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navigation />

            <main className='p-4 sm:ml-64'>
                <div className='mt-14 p-4'>{children}</div>
            </main>
        </>
    )
}

export default layout
