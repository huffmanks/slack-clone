import { SignInButton, SignUpButton } from '@clerk/nextjs'

const Home = async () => {
    return (
        <>
            <h1>Landing Page</h1>
            <p>You can sign up here or learn more about us!</p>
            <div className='flex items-center gap-4'>
                <SignInButton afterSignInUrl='/dashboard' />
                <SignUpButton afterSignUpUrl='/dashboard' />
            </div>
        </>
    )
}

export default Home
