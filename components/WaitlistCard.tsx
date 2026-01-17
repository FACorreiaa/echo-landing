"use client";

import { useState } from "react";
import { BorderBeam } from "@/components/ui/border-beam";
import { Mail, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { joinWaitlist, type WaitlistResult } from "@/app/actions/waitlist";

export function WaitlistCard() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [result, setResult] = useState<WaitlistResult | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");

        const response = await joinWaitlist(email);
        
        setResult(response);
        setStatus(response.success ? "success" : "error");
        
        if (response.success) {
            setEmail("");
        }
    };

    return (
        <section id="waitlist" className="py-24 px-4 sm:px-6 lg:px-8">
            <FadeIn className="max-w-xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Be the First to Know
                </h2>
                <p className="text-zinc-400 mb-8">
                    Join our waitlist and get early access when Echo launches. No spam, just important updates.
                </p>

                <div className="relative">
                    <div className="glass-card p-8 relative overflow-hidden">
                        <BorderBeam size={200} duration={12} delay={0} />

                        {status === "success" && result ? (
                            <div className="flex flex-col items-center gap-4 py-4">
                                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <CheckCircle className="w-8 h-8 text-green-400" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-white mb-1">
                                        You&apos;re on the list!
                                    </h3>
                                    {result.position && result.position > 0 && (
                                        <p className="text-2xl font-bold text-[oklch(0.65_0.18_220)] mb-2">
                                            #{result.position}
                                        </p>
                                    )}
                                    <p className="text-zinc-400 text-sm">
                                        {result.message || "We'll notify you when Echo is ready."}
                                    </p>
                                </div>
                            </div>
                        ) : status === "error" && result ? (
                            <div className="flex flex-col items-center gap-4 py-4">
                                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
                                    <AlertCircle className="w-8 h-8 text-red-400" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-white mb-1">
                                        Something went wrong
                                    </h3>
                                    <p className="text-zinc-400 text-sm mb-4">
                                        {result.error || "Please try again."}
                                    </p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                                    >
                                        Try Again
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                        aria-label="Email address"
                                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.18_220)] focus:border-transparent transition-all"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full py-3 px-6 bg-gradient-to-r from-[oklch(0.65_0.18_220)] to-[oklch(0.55_0.2_170)] text-white font-medium rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Joining...
                                        </>
                                    ) : (
                                        "Join Waitlist"
                                    )}
                                </button>
                                <p className="text-xs text-zinc-400">
                                    By joining, you agree to receive email updates. Unsubscribe anytime.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
