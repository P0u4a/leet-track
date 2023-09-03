import Image from 'next/image';

export default function Dashboard() {
    return (
        <>
            <section className="container flex flex-col gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
                <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
                    <h1 className="text-3xl font-semibold leading-[1.1] sm:text-3xl md:text-6xl">
                        Dashboard
                    </h1>
                </div>
            </section>
        </>
    );
}
