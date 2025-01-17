import Link from 'next/link';
import Logo from './logo';
import { cn } from '@/lib/utils';
import { buttonVariants } from './button';
import { ArrowRight } from 'lucide-react';
import SignedIn from '@/components/auth/signed-in';
import SignedOut from '@/components/auth/signed-out';
import { UserButton } from '@/components/auth/user-button';
export default function Header() {
  return (
    <nav className="flex items-center justify-between py-3 mx-6 md:mx-12">
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
        <div className="flex flex-row gap-4 md:gap-6 items-center">
          <Link
            href={'/dashboard'}
            className={cn(
              buttonVariants({
                variant: 'outline',
                size: 'sm',
              }),
              'text-base group'
            )}
          >
            Dashboard
          </Link>
          <UserButton />
        </div>
      </SignedIn>
    </nav>
  );
}
