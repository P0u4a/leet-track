import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/ui/nav';
import Footer from '@/components/ui/footer';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'LeetTrack',
    description: 'Track your Leetcode progress with just one click.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body
                    className={`flex flex-col min-h-screen bg-background font-sans antialiased ${inter.className}`}
                >
                    <Nav />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </body>
            </html>
        </ClerkProvider>
    );
}
