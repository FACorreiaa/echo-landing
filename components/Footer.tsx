import Link from "next/link";
import { Github, Twitter } from "lucide-react";

const footerLinks = {
    product: [
        { label: "Overview", href: "#" },
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
    ],
    company: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#blog" },
        { label: "Careers", href: "#" },
    ],
    resources: [
        { label: "Help Center", href: "#" },
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
    ],
};

export function Footer() {
    return (
        <footer className="relative border-t border-white/5 bg-[oklch(0.08_0.02_250)] overflow-hidden">
            {/* Gradient Top Border */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.65_0.18_220_/_0.3)] to-transparent" />

            {/* Watermark */}
            <div className="absolute -bottom-24 -right-12 text-[12rem] font-bold text-white/[0.02] pointer-events-none select-none tracking-tighter">
                Echo
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {/* Brand */}
                    <div className="col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4 group">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[oklch(0.65_0.18_220)] to-[oklch(0.55_0.2_170)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                <span className="text-white font-bold text-sm">E</span>
                            </div>
                            <span className="font-semibold text-white text-lg tracking-tight">Echo</span>
                        </Link>
                        <p className="text-sm text-zinc-400 mb-6 max-w-xs leading-relaxed">
                            The personal finance OS that turns your money into an <span className="text-zinc-300">alive, actionable system</span>.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                aria-label="Follow us on Twitter"
                                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                aria-label="View our GitHub"
                                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4 tracking-tight">Product</h4>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-zinc-400 hover:text-[oklch(0.65_0.18_220)] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4 tracking-tight">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-zinc-400 hover:text-[oklch(0.65_0.18_220)] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4 tracking-tight">Resources</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-zinc-400 hover:text-[oklch(0.65_0.18_220)] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-zinc-400 text-center md:text-left">
                        © {new Date().getFullYear()} Echo. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-xs text-zinc-400 hover:text-zinc-300 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-xs text-zinc-400 hover:text-zinc-300 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
