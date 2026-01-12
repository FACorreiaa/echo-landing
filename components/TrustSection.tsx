import React from "react";

export const TrustSection = () => {
    const pillars = [
        {
            title: "Read-Only Promise",
            description: "Echo analyzes your financial history to give you insights, but we never have the power to move, touch, or access your real-world funds.",
            icon: (
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            )
        },
        {
            title: "No Data Silos",
            description: "Your financial plan shouldn't be a secret held by a corporation. With our 'Bring Your Own Spreadsheet' philosophy, you maintain the master copy.",
            icon: (
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            )
        },
        {
            title: "Local-First Encryption",
            description: "We use details industry-standard encryption to ensure that your ingested bank strings are processed securely and remain invisible to everyone but you.",
            icon: (
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            )
        },
        {
            title: "Data Ownership Forever",
            description: "Your data is your legacy. We don't just protect it—we ensure you own it, forever. Export your full history at any time.",
            icon: (
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
                        Your Money. Your Data. <span className="text-emerald-400">Your Terms.</span>
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Echo is built on a foundation of privacy and ownership. We believe your financial data belongs to you, not us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="glass-card p-8 hover:bg-white/5 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {pillar.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {pillar.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Diagram Visualization Placeholder - Can be enhanced later */}
                <div className="mt-20 p-1 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-sm max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between p-8 gap-8 text-center md:text-left">
                        <div className="flex-1">
                            <div className="text-sm text-emerald-400 font-mono mb-2">LOCAL DEVICE</div>
                            <div className="text-white font-semibold">Your Data stays here.</div>
                            <p className="text-xs text-zinc-500 mt-1">Processing happens on-device or encrypted in transit.</p>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-600">
                            <div className="h-px w-16 bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            <div className="h-px w-16 bg-gradient-to-l from-emerald-500/50 to-transparent"></div>
                        </div>
                        <div className="flex-1 text-right">
                            <div className="text-sm text-zinc-500 font-mono mb-2">ECHO SERVERS</div>
                            <div className="text-zinc-400">Zero Knowledge.</div>
                            <p className="text-xs text-zinc-600 mt-1">We only see encrypted blobs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
