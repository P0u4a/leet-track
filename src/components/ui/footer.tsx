import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="absolute bottom-0 w-full flex md:flex-row items-center justify-center gap-10 bg-stone-100 text-stone-800 p-6 text-sm md:text-base">
            <p>Copyright © 2023 LeetTrack</p>
            <Link href={'/terms'} className="hover:underline">
                Terms
            </Link>
            <Link href={'/privacy'} className="hover:underline">
                Privacy Policy
            </Link>
        </footer>
    );
}
