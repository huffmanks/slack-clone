import AuthProvider from '@/components/AuthProvider'

import './globals.css'
import { Lato } from 'next/font/google'

const font = Lato({
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
})

export const metadata = {
    title: 'Slack Clone',
    description: 'Get slackin...',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={`${font.className} bg-white text-zinc-900 dark:bg-zinc-900 dark:text-slate-50`}>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    )
}
