import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-transparent backdrop-blur-sm text-muted-foreground py-6 mt-12">
            <div className="container flex flex-col items-center sm:flex-row justify-between sm:items-center gap-2">
                <p className="text-center">
                    &copy; {new Date().getFullYear()} LeetTrack
                </p>
                <div className="flex flex-row gap-5">
                    <Link
                        href="/terms"
                        className="hover:text-muted-foreground/90 hover:underline"
                    >
                        Terms and Conditions
                    </Link>
                    <Link
                        href="/privacy"
                        className="hover:text-muted-foreground/90 hover:underline"
                    >
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
}
