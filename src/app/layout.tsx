import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/ui/nav';
import Footer from '@/components/ui/footer';
import Toast from '@/components/ui/toast';
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
                    className={`flex flex-col min-h-screen bg-background font-sans antialiased ${inter.className} bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]`}
                >
                    <Nav />
                    <Toast />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </body>
            </html>
        </ClerkProvider>
    );
}
