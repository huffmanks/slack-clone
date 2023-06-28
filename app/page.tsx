import Link from 'next/link'

export default async function Home() {
    return (
        <>
            <div>Home</div>
            <Link href='/auth/login'>Login</Link>
        </>
    )
}
