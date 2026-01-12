import { Navbar } from "@/components/Navbar";
import { SplashHero } from "@/components/SplashHero";
import { Features } from "@/components/Features";
import { DetailedFeatures } from "@/components/DetailedFeatures";
import { TrustSection } from "@/components/TrustSection";
import { Platforms } from "@/components/Platforms";
import { WaitlistCard } from "@/components/WaitlistCard";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { posts } from "@/lib/posts";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SplashHero />
        <Features />
        <DetailedFeatures />
        <TrustSection />
        <Platforms />
        <WaitlistCard />

        {/* Pricing Placeholder Section */}
        <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Honest and Thoughtful Pricing
            </h2>
            <p className="text-zinc-400 mb-8">
              We&apos;re building Echo with a sustainable model. Pricing details coming soon.
            </p>
            <div className="glass-card p-12">
              <p className="text-zinc-500">
                Pricing plans will be announced at launch.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Blog & Announcements
              </h2>
              <p className="text-zinc-400">
                Stay updated with the latest news, insights, and behind-the-scenes of building Echo.
              </p>
            </div>

            <div className="grid gap-6 mb-8">
              {posts.slice(0, 2).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <div className="glass-card p-8 hover:bg-white/5 transition-all group cursor-pointer">
                    <p className="text-sm text-zinc-500 mb-2">{post.date}</p>
                    <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium transition-all"
              >
                View All Posts
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
