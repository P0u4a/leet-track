import Link from 'next/link';
import Logo from './logo';
import { cn } from '@/lib/utils';
import { buttonVariants } from './button';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
export default function Header() {
    return (
        <div className="relative bg-transparent p-0 flex w-full items-center justify-center py-3">
            <div className="flex w-[min(80vw,70rem)] items-center justify-between">
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
                            'text-base'
                        )}
                    >
                        Sign in
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
                                userButtonPopoverActionButtonText:
                                    'text-stone-950',
                            },
                        }}
                    />
                </SignedIn>
            </div>
        </div>
    );
}
