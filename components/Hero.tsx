"use client";

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Particles } from "@/components/ui/particles";
import { ChevronRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Particles */}
            <Particles
                className="absolute inset-0"
                quantity={80}
                staticity={30}
                ease={50}
                color="#4ade80"
            />

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-[oklch(0.5_0.2_220_/_0.15)] blur-[120px]" />
            <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-[oklch(0.5_0.2_170_/_0.15)] blur-[120px]" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                <div className="flex justify-center mb-8">
                    <AnimatedGradientText className="px-4 py-1.5">
                        <span className="text-sm font-medium">
                            ✨ Coming Soon — Join the Waitlist
                        </span>
                        <ChevronRight className="ml-1 w-4 h-4 inline-block" />
                    </AnimatedGradientText>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
                    Your Money,{" "}
                    <span className="text-gradient">Alive</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Echo is the personal finance OS that turns your transaction data into{" "}
                    <span className="text-white font-medium">actions</span>,{" "}
                    <span className="text-white font-medium">monthly insights</span>, and a
                    shareable{" "}
                    <span className="text-white font-medium">Money Wrapped</span> story.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <ShimmerButton
                        className="shadow-2xl"
                        onClick={() => {
                            document.getElementById("waitlist")?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white">
                            Join the Waitlist
                        </span>
                    </ShimmerButton>

                    <a
                        href="#features"
                        className="px-6 py-3 text-sm font-medium text-zinc-300 hover:text-white border border-white/10 rounded-full hover:bg-white/5 transition-colors"
                    >
                        Learn More
                    </a>
                </div>

                {/* Stats Preview */}
                <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8">
                    {[
                        { value: "6", label: "Smart Pillars" },
                        { value: "∞", label: "Insights" },
                        { value: "24/7", label: "Monitoring" },
                        { value: "1", label: "Dashboard" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-zinc-500">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
