import Link from 'next/link';
import Logo from './logo';
import { cn } from '@/lib/utils';
import { buttonVariants } from './button';
import { ArrowRight } from 'lucide-react';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
export default function Header() {
    return (
        <nav className="flex items-center justify-between py-3 mx-4">
            <Link href="/">
                <Logo />
            </Link>

            <SignedOut>
                <Link
                    href={'/sign-in'}
                    className={cn(
                        buttonVariants({
                            variant: 'ghost',
                            size: 'lg',
                        }),
                        'text-base group'
                    )}
                >
                    Sign in
                    <ArrowRight className="transition-transform ease-in-out group-hover:translate-x-1 ml-2 h-4 w-4" />
                </Link>
            </SignedOut>

            <SignedIn>
                <UserButton
                    afterSignOutUrl="/"
                    userProfileMode="navigation"
                    userProfileUrl="http://localhost:3000/account"
                    appearance={{
                        elements: {
                            userButtonPopoverCard:
                                'shadow-md rounded-md border-stone-200',
                            userButtonPopoverActionButtonText: 'text-stone-950',
                        },
                    }}
                />
            </SignedIn>
        </nav>
    );
}
