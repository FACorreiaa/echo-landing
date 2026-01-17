"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between mt-4">
                    {/* Logo and Nav Links Container */}
                    <div className="flex items-center gap-1 glass rounded-full px-2 py-2">
                        {/* Logo with Cyan Glow */}
                        <Link
                            href="/"
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors"
                        >
                            <div className="relative">
                                {/* Cyan glow behind logo */}
                                <div className="absolute inset-0 bg-[#2DA6FA] blur-[12px] opacity-30 rounded-full" />
                                <img 
                                    src="/echo-logo.png" 
                                    alt="Echo OS" 
                                    className="h-8 relative z-10"
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="px-4 py-1.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="#waitlist"
                            className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                        >
                            Log in
                        </Link>
                        <Link
                            href="#waitlist"
                            className="px-4 py-2 text-sm font-medium text-zinc-900 bg-white rounded-full hover:bg-zinc-100 transition-colors"
                        >
                            Get started
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        className="md:hidden p-2 text-zinc-300 hover:text-white glass rounded-full"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden mt-2 glass rounded-2xl p-4">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <hr className="border-white/10 my-2" />
                            <Link
                                href="#waitlist"
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                            >
                                Log in
                            </Link>
                            <Link
                                href="#waitlist"
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-2 text-sm font-medium text-center text-zinc-900 bg-white rounded-lg hover:bg-zinc-100 transition-colors"
                            >
                                Get started
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
