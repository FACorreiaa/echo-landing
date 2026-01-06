import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { posts } from "@/lib/posts";

export default function BlogIndex() {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-white mb-8">Echo Blog</h1>
                    <div className="grid gap-8">
                        {posts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`}>
                                <div className="bg-zinc-900/30 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all group cursor-pointer hover:bg-zinc-900/50">
                                    <p className="text-sm text-zinc-500 mb-2">{post.date}</p>
                                    <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-zinc-400 leading-relaxed">
                                        {post.summary}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
