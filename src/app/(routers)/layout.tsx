import Header from "@/components/header";

export default function ServiceLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {/* header */}
            <Header />

            {children}
        </>
    );
}
