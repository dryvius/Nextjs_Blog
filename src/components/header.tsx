"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINK_DATA = [
    {
        name: "Performance",
        href: "/performance",
    },
    {
        name: "Reliability",
        href: "/reliability",
    },
    {
        name: "Scale",
        href: "/scale",
    },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <>
            <header className="absolute w-full text-white z-10">
                <div className="flex justify-between item-center container mx-auto py-4">
                    <Link className="text-3xl font-bold" href={"/"}>
                        Home
                    </Link>
                    <div className="text-xl space-x-4">
                        {LINK_DATA.map(link => (
                            <Link
                                key={link.name}
                                className={pathname === link.href ? "text-blue-500" : ""}
                                href={link.href}>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </>
    );
}
