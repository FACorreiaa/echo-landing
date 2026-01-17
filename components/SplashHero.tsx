"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

// Lazy-load heavy canvas animation (non-blocking)
const Starfield = dynamic(
    () => import("@/components/ui/starfield").then((m) => m.Starfield),
    { ssr: false, loading: () => null }
);

export function SplashHero() {
    const scrollToWaitlist = () => {
        document.getElementById("waitlist")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Starfield Background - lazy loaded */}
            <Starfield className="z-0" />

            {/* Gradient Background Fallback */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="h-full w-full bg-gradient-to-br from-cyan-900/30 via-violet-900/30 to-emerald-900/30" />
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[oklch(0.5_0.2_220_/_0.12)] blur-[150px] z-0" />
            <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-[oklch(0.5_0.2_170_/_0.12)] blur-[150px] z-0" />

            {/* Main Content - CSS animations instead of Framer Motion */}
            <div className="relative z-10 grid h-full place-items-center lg:grid-cols-2 gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
                {/* Left Side - Content */}
                <div className="flex flex-col gap-4 text-center lg:text-left lg:justify-self-end animate-fade-in-up">
                    {/* Echo Logo */}
                    <div className="flex justify-center lg:justify-start mb-4 animate-scale-in delay-200">
                        <div className="flex items-center gap-3">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[oklch(0.65_0.18_220)] to-[oklch(0.55_0.2_170)] flex items-center justify-center shadow-2xl shadow-cyan-500/20">
                                <span className="text-white font-bold text-3xl md:text-4xl">
                                    E
                                </span>
                            </div>
                            <span className="font-bold text-white text-3xl md:text-4xl tracking-tight">
                                Echo
                            </span>
                        </div>
                    </div>

                    {/* Badge */}
                    <div className="flex justify-center lg:justify-start animate-fade-in-up delay-300">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-sm font-medium text-white/90">
                            <span>✨ Coming Soon — Join the Waitlist</span>
                            <ChevronRight className="ml-1 w-4 h-4" />
                        </div>
                    </div>

                    {/* Main Headline - LCP critical element */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter animate-fade-in-up delay-400">
                        <span className="splash-gradient-text">Your Money,</span>
                        <br />
                        <span className="splash-gradient-text">Alive</span>
                    </h1>

                    {/* Subheadline - THE LCP ELEMENT */}
                    <p className="text-gray-300 text-lg md:text-xl max-w-md mx-auto lg:mx-0 mt-4 animate-fade-in-up delay-500">
                        Echo is the personal finance OS that turns your transaction data
                        into{" "}
                        <span className="text-white font-medium">actions</span>,{" "}
                        <span className="text-white font-medium">monthly insights</span>,
                        and a shareable{" "}
                        <span className="text-white font-medium">Money Wrapped</span> story.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start animate-fade-in-up delay-600">
                        <ShimmerButton
                            className="shadow-2xl"
                            onClick={scrollToWaitlist}
                        >
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white">
                                Join the Waitlist
                            </span>
                        </ShimmerButton>
                        <Link
                            href="#features"
                            className="flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 rounded-full transition-all hover:bg-white/5"
                        >
                            Explore Features
                        </Link>
                    </div>
                </div>

                {/* Right Side - Financial Visualization */}
                <div className="w-full max-w-md lg:max-w-lg flex items-center justify-center lg:justify-self-start animate-scale-in delay-300">
                    <div className="relative hero-float">
                        {/* Glow Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-emerald-500/20 blur-3xl rounded-full scale-150" />

                        {/* Financial Visualization SVG */}
                        <svg
                            className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 relative z-10"
                            viewBox="0 0 200 200"
                        >
                            {/* Animated Pulse Rings */}
                            <circle
                                cx="100"
                                cy="100"
                                r="60"
                                fill="none"
                                stroke="url(#echo-gradient)"
                                strokeWidth="2"
                                className="pulse-ring"
                            />
                            <circle
                                cx="100"
                                cy="100"
                                r="75"
                                fill="none"
                                stroke="url(#echo-gradient)"
                                strokeWidth="1"
                                className="pulse-ring pulse-delay-1"
                            />
                            <circle
                                cx="100"
                                cy="100"
                                r="90"
                                fill="none"
                                stroke="url(#echo-gradient)"
                                strokeWidth="0.5"
                                className="pulse-ring pulse-delay-2"
                            />

                            {/* Balance Wave Line */}
                            <path
                                d="M20 100 L40 100 L50 75 L60 125 L70 85 L80 115 L90 95 L100 105 L110 80 L120 120 L130 90 L140 100 L180 100"
                                stroke="url(#echo-gradient)"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="balance-wave"
                            />

                            {/* Central Core */}
                            <circle
                                cx="100"
                                cy="100"
                                r="35"
                                fill="url(#echo-gradient)"
                                opacity="0.9"
                            />
                            <text
                                x="100"
                                y="110"
                                textAnchor="middle"
                                className="fill-white font-bold text-2xl"
                                style={{ fontSize: "32px", fontWeight: "bold" }}
                            >
                                E
                            </text>

                            {/* Orbiting Data Points */}
                            <circle cx="100" cy="35" r="6" fill="#06B6D4" className="orbit" />
                            <circle
                                cx="165"
                                cy="100"
                                r="6"
                                fill="#8B5CF6"
                                className="orbit orbit-delay-1"
                            />
                            <circle
                                cx="100"
                                cy="165"
                                r="6"
                                fill="#10B981"
                                className="orbit orbit-delay-2"
                            />

                            {/* Small Accent Dots */}
                            <circle cx="55" cy="55" r="3" fill="#06B6D4" opacity="0.6" />
                            <circle cx="145" cy="55" r="3" fill="#8B5CF6" opacity="0.6" />
                            <circle cx="55" cy="145" r="3" fill="#10B981" opacity="0.6" />
                            <circle cx="145" cy="145" r="3" fill="#06B6D4" opacity="0.6" />

                            <defs>
                                <linearGradient
                                    id="echo-gradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="100%"
                                >
                                    <stop offset="0%" style={{ stopColor: "#06B6D4" }} />
                                    <stop offset="50%" style={{ stopColor: "#8B5CF6" }} />
                                    <stop offset="100%" style={{ stopColor: "#10B981" }} />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in delay-600">
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    );
}
