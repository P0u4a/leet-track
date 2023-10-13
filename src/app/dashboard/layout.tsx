export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="container flex flex-col gap-6 py-8 md:py-12">
            <div className="w-[min(80vw,70rem)] mx-auto flex flex-col gap-8">
                {children}
            </div>
        </section>
    );
}
