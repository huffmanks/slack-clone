import { ClerkProvider } from '@clerk/nextjs'

import { dark } from '@clerk/themes'
import SocketProvider from '@/providers/SocketProvider'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Appearance } from '@clerk/types/dist/appearance'

const inter = Inter({ subsets: ['latin'] })

const theme: Appearance = {
    baseTheme: dark,
    layout: {
        logoPlacement: 'inside',
        socialButtonsPlacement: 'bottom',
        socialButtonsVariant: 'iconButton',
        showOptionalFields: true,
        helpPageUrl: 'https://clerk.dev/support',
        privacyPageUrl: 'https://clerk.dev/privacy',
        termsPageUrl: 'https://clerk.dev/terms',
    },
}

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider appearance={theme}>
            <html lang='en' className='h-full'>
                <body className={`${inter.className} h-full bg-zinc-900 text-zinc-100`}>
                    <SocketProvider>{children}</SocketProvider>
                </body>
            </html>
        </ClerkProvider>
    )
}
