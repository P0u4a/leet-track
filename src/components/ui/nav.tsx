import Link from 'next/link';
import Logo from './logo';
import { cn } from '@/lib/utils';
import { buttonVariants } from './button';
export default function Header() {
    return (
        <div className="relative bg-transparent p-0 flex w-screen items-center justify-center py-3">
            <div className="flex w-[min(80vw,70rem)] items-center justify-between">
                <Link href="/">
                    <Logo />
                </Link>

                <Link
                    href={'/login'}
                    className={cn(
                        buttonVariants({
                            variant: 'ghost',
                            size: 'lg',
                        }),
                        'text-base'
                    )}
                >
                    Login
                </Link>
            </div>
        </div>
    );
}
