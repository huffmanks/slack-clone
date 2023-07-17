import { SignIn } from '@clerk/nextjs'
import Link from 'next/link'

const Home = () => {
    return (
        <>
            <h1>Landing Page</h1>
            <p>You can sign up here or learn more about us!</p>
            <SignIn />
            <Link href='/dashboard'>Dashboard</Link>
        </>
    )
}

export default Home
