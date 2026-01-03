"use client";

import {
    Sparkles,
    TrendingUp,
    Shield,
    Zap,
    Target,
    Settings2,
} from "lucide-react";

const features = [
    {
        icon: Sparkles,
        title: "Money Wrapped",
        description:
            "Personalized monthly and yearly recaps with fun stats you'll want to share.",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: TrendingUp,
        title: "Yearly Audit",
        description:
            "Trend and anomaly detection that explains why spending changed.",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Shield,
        title: "Financial Foundation",
        description:
            "Net worth tracking, runway visibility, and emergency fund monitoring.",
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: Zap,
        title: "Free Money",
        description:
            "Subscription hunting, fee discovery, and interest optimization.",
        color: "from-yellow-500 to-orange-500",
    },
    {
        icon: Target,
        title: "Clear Goals",
        description:
            "Goal tracking with pace alerts that tell you if you're ahead or behind.",
        color: "from-red-500 to-rose-500",
    },
    {
        icon: Settings2,
        title: "Money OS",
        description:
            "Rules, tasks, and automation that make your finances run themselves.",
        color: "from-indigo-500 to-violet-500",
    },
];

import { FadeIn, FadeInStagger, fadeInItem } from "@/components/ui/fade-in";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "motion/react";

export function Features() {
    return (
        <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Background elements */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-6xl mx-auto">
                <FadeIn delay={0.2} className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                        The 6 Pillars of Echo
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Echo is designed to hit these 6 outcomes — turning your finances from
                        passive data into an <span className="text-white font-medium">alive, actionable system</span>.
                    </p>
                </FadeIn>

                <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={fadeInItem}>
                            <Spotlight
                                className="group h-full glass-card p-1 rounded-2xl"
                                fill="rgba(255, 255, 255, 0.05)"
                            >
                                <div className="relative h-full bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                                    <div
                                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                    >
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-zinc-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </Spotlight>
                        </motion.div>
                    ))}
                </FadeInStagger>
            </div>
        </section>
    );
}
