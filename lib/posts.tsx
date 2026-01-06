import React from 'react';

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    summary: string;
    content: React.ReactNode;
}

export const posts: BlogPost[] = [
    {
        slug: "v0-1-release-notes",
        title: "Echo v0.1 Update: The Foundation",
        date: "January 4, 2026",
        summary: "Unified Import Hub, Smart Routing, and Bring Your Own Sheet.",
        content: (
            <div className="space-y-6 text-zinc-300">
                <p className="text-lg leading-relaxed">
                    We are thrilled to update you on Echo v0.1. Our goal is to build an "Alive" Money OS—a system that proactively understands your financial life rather than just storing rows in a database.
                </p>

                <div className="my-8 p-6 glass rounded-2xl border border-white/5">
                    <h3 className="text-xl font-semibold text-white mb-2">🚀 What's New in v0.1</h3>
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-400 mt-1">•</span>
                            <span>Import CSV, TSV, and Excel files from different sources</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-400 mt-1">•</span>
                            <span>Categorise each item on the transactions</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-400 mt-1">•</span>
                            <span>BYOS (Bring Your Own Sheet) support</span>
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Unified Import Hub</h2>
                <p className="leading-relaxed">
                    Financial data lives everywhere. In v0.1, we've unified the ingestion process. You can now import <strong>CSV, TSV, and Excel</strong> files from different sources in one place.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Auto-Categorization</h2>
                <p className="leading-relaxed">
                    What good is data if you have to sort it manually? Echo v0.1 automatically categorizes each item on your transactions, giving you immediate insights into where your money is going.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Bring Your Own Sheet (BYOS)</h2>
                <p className="leading-relaxed">
                    Many of us rely on complex Excel sheets for budgeting. We don't want to break that workflow.
                </p>
                <p className="leading-relaxed">
                    Our new <strong>Smart Routing</strong> engine detects what kind of file you are uploading:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2 text-zinc-400">
                    <li><strong className="text-zinc-200">Transaction Dumps:</strong> Raw data is converted into canonical transactions.</li>
                    <li><strong className="text-zinc-200">Living Plans:</strong> Spreadsheets with formulas are routed to the Planning engine, bootstrapping your Echo budget while preserving your logic.</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">What's Next?</h2>
                <p className="leading-relaxed">
                    This foundation paves the way for advanced features like AI-driven forecasting and real-time anomalies. Stay tuned for v0.2!
                </p>
            </div>
        ),
    }
];

export function getPost(slug: string) {
    return posts.find(p => p.slug === slug);
}
