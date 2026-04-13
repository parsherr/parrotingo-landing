"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { label: "Blog", href: "/blog" },
    { label: "Word List", href: "/word-list" },
    { label: "Resources", href: "/#why-us" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            id="header"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-[#E8E0D8] backdrop-blur-md border-b border-border/30 py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="mx-auto max-w-5xl px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" id="logo">
                    <div className="bg-[#E69A16] rounded-2xl px-4 py-1 flex items-center gap-2 border-[3px] border-black/30">
                        <Image
                            src="/logo.png"
                            alt="Parrotingo Logo"
                            width={40}
                            height={40}
                            className="w-9 h-9 object-contain"
                        />
                        <span className="text-xl font-black tracking-tight text-white">
                            Parrotingo
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            id={`nav-${item.label.toLowerCase()}`}
                            className={`text-sm font-semibold transition-colors duration-200 ${scrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    {/* Cartoon pill button */}
                    <Link
                        href="https://demo.parrotingo.com"
                        id="nav-start-now"
                        className="text-sm font-extrabold px-6 py-2.5 rounded-full bg-brand-orange text-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-100"
                    >
                        Start Now!
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    id="mobile-menu-toggle"
                    className="md:hidden p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? (
                        <X className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-white"}`} />
                    ) : (
                        <Menu className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-white"}`} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div id="mobile-menu" className="md:hidden bg-[#E8E0D8] border-b border-border">
                    <nav className="flex flex-col items-center gap-2 p-5">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="w-full text-center py-3 text-base font-semibold text-foreground/70 hover:text-foreground rounded-xl hover:bg-muted transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="https://demo.parrotingo.com"
                            onClick={() => setMobileOpen(false)}
                            className="mt-1 w-full text-center py-3 text-base font-extrabold rounded-full bg-brand-orange text-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-100"
                        >
                            Start Now!
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
