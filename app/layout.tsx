import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/shared/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Infinite Scroll and Search Products',
    description:
        'Using this product api to implement the infinite scrolling list for display list of products.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    )
}
