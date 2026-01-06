import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getPost, posts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <Link href="/blog" className="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to update log
                    </Link>

                    <article className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <header className="mb-12 border-b border-white/5 pb-8">
                            <p className="text-emerald-400 mb-4 font-medium tracking-wide text-sm uppercase">{post.date}</p>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                                {post.title}
                            </h1>
                        </header>

                        <div className="text-lg">
                            {post.content}
                        </div>
                    </article>
                </div>
            </main>
            <Footer />
        </div>
    );
}
