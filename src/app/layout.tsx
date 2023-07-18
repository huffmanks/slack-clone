import './globals.css'

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import type { Appearance } from '@clerk/types/dist/appearance'

import ThemeProvider from '@/providers/ThemeProvider'
import SocketProvider from '@/providers/SocketProvider'

const inter = Inter({ subsets: ['latin'] })

const appearance: Appearance = {
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
    title: 'Slack Clone',
    description: 'Get started today!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider appearance={appearance}>
            <html lang='en' className='h-full dark' style={{ colorScheme: 'dark' }}>
                <body className={`${inter.className} h-full bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors`}>
                    <ThemeProvider>
                        <SocketProvider>{children}</SocketProvider>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    )
}
