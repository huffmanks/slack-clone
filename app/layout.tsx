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
            <body className={`${font.className} bg-slate-900 text-slate-100`}>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    )
}
