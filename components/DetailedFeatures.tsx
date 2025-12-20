"use client";

import {
    Tag,
    Activity,
    Smartphone,
    Flame,
    Smile,
    Bell,
    Trophy,
    Layers,
    Database,
    LineChart,
    FileText,
    Wallet,
    Brain,
    Globe,
    Lock,
    Clock,
} from "lucide-react";

const coreFeatures = [
    {
        icon: Tag,
        title: "Intent Tagging",
        description:
            "Flag transactions with intent: splurge, necessary, regret, or investment for emotional insights.",
    },
    {
        icon: Activity,
        title: "Spending Pulse",
        description:
            "Daily digest: \"Your wallet today: €47 across 3 places.\" Stay informed without opening the app.",
    },
    {
        icon: Smartphone,
        title: "Quick Capture",
        description:
            "One-tap log for cash and offline spending. Essential for mixed cash/card usage.",
    },
    {
        icon: Flame,
        title: "Goal Burn Rate",
        description:
            "\"At current pace, you'll hit Vacation in 4.2 months (3 weeks early).\" Real-time pacing.",
    },
    {
        icon: Smile,
        title: "Merchant Icons",
        description:
            "Auto-assign or pick emojis per merchant. Makes your spending overview scannable and fun.",
    },
    {
        icon: Bell,
        title: "Oops Alerts",
        description:
            "User-defined thresholds: \"Tell me if I spend > €50 on dining in a day.\"",
    },
    {
        icon: Trophy,
        title: "Streak Mechanics",
        description:
            "\"7 days under budget\" or \"30 days no impulse spending\" — gamification for habit building.",
    },
    {
        icon: Layers,
        title: "Tag Bundles",
        description:
            "Group merchants into custom bundles like \"Self-care\" = gym + therapy + spa.",
    },
];

const advancedFeatures = [
    {
        icon: Database,
        title: "Financial Data Saved for Life",
        description:
            "Your complete financial history preserved forever. Export anytime, own your data.",
        highlight: true,
    },
    {
        icon: LineChart,
        title: "Stock PE & FE Analysis",
        description:
            "Track price-to-earnings, forward earnings, and valuation metrics for your portfolio.",
        highlight: true,
    },
    {
        icon: FileText,
        title: "Earnings Data & Transcripts",
        description:
            "Access quarterly earnings reports and call transcripts for companies you follow.",
        highlight: true,
    },
    {
        icon: Wallet,
        title: "Multi-Currency Native",
        description:
            "Full support for travelers and remote workers paid in multiple currencies.",
    },
    {
        icon: Brain,
        title: "AI-Powered Insights",
        description:
            "Natural language queries: \"How much did I spend on eating out in Lisbon?\"",
    },
    {
        icon: Globe,
        title: "Open Banking Ready",
        description:
            "Connect to 5000+ banks worldwide via Plaid, TrueLayer, and GoCardless.",
    },
    {
        icon: Lock,
        title: "Privacy-First Design",
        description:
            "No model training on your data. Strong encryption. You control what's shared.",
    },
    {
        icon: Clock,
        title: "Offline-First Sync",
        description:
            "Complete local storage with conflict resolution. Works without internet.",
    },
];

export function DetailedFeatures() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                {/* Core Features */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 text-sm font-medium text-[oklch(0.65_0.18_220)] bg-[oklch(0.65_0.18_220_/_0.15)] rounded-full mb-4">
                        Core Features
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Built to Keep You Coming Back
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Lightweight features that make Echo feel alive — without overwhelming you.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
                    {coreFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
                        >
                            <feature.icon className="w-5 h-5 text-[oklch(0.65_0.18_220)] mb-3" />
                            <h3 className="text-sm font-semibold text-white mb-1.5">
                                {feature.title}
                            </h3>
                            <p className="text-xs text-zinc-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Advanced Features */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 text-sm font-medium text-[oklch(0.55_0.2_170)] bg-[oklch(0.55_0.2_170_/_0.15)] rounded-full mb-4">
                        Advanced Features
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Power User Capabilities
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Deep integrations and advanced analytics for those who want complete control.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {advancedFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className={`p-5 rounded-xl border transition-all duration-300 ${feature.highlight
                                    ? "bg-gradient-to-br from-[oklch(0.65_0.18_220_/_0.1)] to-[oklch(0.55_0.2_170_/_0.1)] border-[oklch(0.65_0.18_220_/_0.3)] hover:border-[oklch(0.65_0.18_220_/_0.5)]"
                                    : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10"
                                }`}
                        >
                            <feature.icon
                                className={`w-5 h-5 mb-3 ${feature.highlight
                                        ? "text-[oklch(0.55_0.2_170)]"
                                        : "text-[oklch(0.65_0.18_220)]"
                                    }`}
                            />
                            <h3 className="text-sm font-semibold text-white mb-1.5">
                                {feature.title}
                            </h3>
                            <p className="text-xs text-zinc-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
