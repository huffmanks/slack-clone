import { auth, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const Home = () => {
    // const { userId } = auth()
    return (
        <>
            {/* <div>User Id: {userId}</div>
            <UserButton afterSignOutUrl='/' /> */}
            <h1>Landing Page</h1>
            <p>You can sign up here or learn more about us!</p>
            <Link href='/dashboard'>Dashboard</Link>
        </>
    )
}

export default Home
