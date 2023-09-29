import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-stone-100 text-stone-800 py-6 mt-12">
            <div className="container flex flex-col items-center sm:flex-row justify-between sm:items-center gap-2">
                <p className="text-center">
                    &copy; {new Date().getFullYear()} LeetTrack
                </p>
                <div className="flex flex-row gap-5">
                    <Link
                        href="/terms"
                        className="text-stone-800 hover:text-stone-800/90 hover:underline"
                    >
                        Terms and Conditions
                    </Link>
                    <Link
                        href="/privacy"
                        className="text-stone-800 hover:text-stone-800/90 hover:underline"
                    >
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
}
