"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function Platforms() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[oklch(0.15_0.03_220_/_0.5)] to-transparent" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left side - Text content */}
                    <FadeIn yOffset={30} duration={0.8}>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                            One app.
                            <br />
                            <span className="text-gradient">Every device.</span>
                        </h2>
                        <p className="text-lg text-zinc-400 mb-10 max-w-md">
                            Echo syncs seamlessly across all your devices. Start on your phone,
                            continue on your laptop, check in from anywhere.
                        </p>

                        {/* App Store Badges */}
                        <div className="flex flex-wrap gap-4 mb-4">
                            {/* App Store Badge */}
                            <a
                                href="#waitlist"
                                className="flex items-center gap-3 px-5 py-3 bg-black border border-white/20 rounded-xl hover:bg-white/5 transition-all duration-300 group hover:border-[oklch(0.65_0.18_220_/_0.5)]"
                            >
                                <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider">Download on the</span>
                                    <span className="text-lg font-semibold text-white -mt-1">App Store</span>
                                </div>
                            </a>

                            {/* Google Play Badge */}
                            <a
                                href="#waitlist"
                                className="flex items-center gap-3 px-5 py-3 bg-black border border-white/20 rounded-xl hover:bg-white/5 transition-all duration-300 group hover:border-[oklch(0.65_0.18_220_/_0.5)]"
                            >
                                <svg className="w-7 h-7 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="#4285F4" />
                                    <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#34A853" />
                                    <path d="M21 12C21 12.45 20.77 12.87 20.4 13.12L17.8 14.58L15.39 12L17.8 9.42L20.4 10.88C20.77 11.13 21 11.55 21 12Z" fill="#FBBC05" />
                                    <path d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" fill="#EA4335" />
                                </svg>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider">Get it on</span>
                                    <span className="text-lg font-semibold text-white -mt-1">Google Play</span>
                                </div>
                            </a>
                        </div>

                        {/* Waitlist note */}
                        <p className="text-xs text-zinc-500">
                            * Tap buttons to join the beta waitlist.
                        </p>
                    </FadeIn>

                    {/* Right side - Device mockups */}
                    <div className="relative h-[500px] hidden lg:block">
                        {/* Glow effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[oklch(0.5_0.2_220_/_0.2)] blur-[100px] animate-pulse" />

                        <FadeIn delay={0.3} className="absolute right-0 top-8 w-[380px]">
                            {/* Laptop mockup */}
                            <div className="relative hover:-translate-y-2 transition-transform duration-500 ease-out">
                                {/* Screen */}
                                <div className="bg-[oklch(0.12_0.02_250)] rounded-t-xl border border-white/10 p-2 shadow-2xl">
                                    <div className="bg-[oklch(0.08_0.02_250)] rounded-lg aspect-[16/10] flex items-center justify-center overflow-hidden">
                                        <div className="w-full h-full bg-gradient-to-br from-[oklch(0.15_0.03_220)] to-[oklch(0.12_0.02_250)] p-4">
                                            {/* Mini dashboard mockup */}
                                            <div className="flex gap-2 mb-3">
                                                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                                                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                                                <div className="w-2 h-2 rounded-full bg-green-500/60" />
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-3 w-24 bg-white/10 rounded" />
                                                <div className="h-8 w-full bg-gradient-to-r from-[oklch(0.65_0.18_220_/_0.3)] to-transparent rounded animate-pulse" />
                                                <div className="grid grid-cols-3 gap-2">
                                                    <div className="h-12 bg-white/5 rounded" />
                                                    <div className="h-12 bg-white/5 rounded" />
                                                    <div className="h-12 bg-white/5 rounded" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Keyboard base */}
                                <div className="h-3 bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-b-lg" />
                                <div className="h-1 bg-zinc-800 rounded-b-xl mx-8" />
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.5} className="absolute left-8 bottom-0 w-[200px] z-20">
                            {/* Tablet mockup */}
                            <div className="bg-[oklch(0.12_0.02_250)] rounded-2xl border border-white/10 p-2 rotate-[-5deg] shadow-2xl hover:rotate-0 transition-transform duration-500">
                                <div className="bg-[oklch(0.08_0.02_250)] rounded-xl aspect-[3/4] flex items-center justify-center overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-[oklch(0.15_0.03_220)] to-[oklch(0.12_0.02_250)] p-3">
                                        <div className="space-y-2">
                                            <div className="h-2 w-16 bg-white/10 rounded" />
                                            <div className="h-6 w-full bg-gradient-to-r from-[oklch(0.55_0.2_170_/_0.3)] to-transparent rounded animate-pulse" />
                                            <div className="grid grid-cols-2 gap-1.5">
                                                <div className="h-8 bg-white/5 rounded" />
                                                <div className="h-8 bg-white/5 rounded" />
                                                <div className="h-8 bg-white/5 rounded" />
                                                <div className="h-8 bg-white/5 rounded" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.7} className="absolute left-1/3 top-12 w-[100px] z-30">
                            {/* Phone mockup */}
                            <div className="bg-[oklch(0.12_0.02_250)] rounded-2xl border border-white/10 p-1.5 rotate-[8deg] shadow-2xl hover:rotate-0 transition-transform duration-500">
                                {/* Notch */}
                                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-black rounded-full z-10" />
                                <div className="bg-[oklch(0.08_0.02_250)] rounded-xl aspect-[9/19] overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-[oklch(0.15_0.03_220)] to-[oklch(0.12_0.02_250)] p-2 pt-4">
                                        <div className="space-y-1.5">
                                            <div className="h-1.5 w-10 bg-white/10 rounded mx-auto" />
                                            <div className="h-4 w-full bg-gradient-to-r from-[oklch(0.65_0.18_220_/_0.3)] to-transparent rounded animate-pulse" />
                                            <div className="h-3 bg-white/5 rounded" />
                                            <div className="h-3 bg-white/5 rounded" />
                                            <div className="h-3 bg-white/5 rounded" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
