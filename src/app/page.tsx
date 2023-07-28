import MainLayout from '@/components/layout/MainLayout'

const Home = async () => {
    return (
        <MainLayout>
            <h1 className='font-bold text-2xl'>Landing Page</h1>
            <p>You can sign up here or learn more about us!</p>
        </MainLayout>
    )
}

export default Home
