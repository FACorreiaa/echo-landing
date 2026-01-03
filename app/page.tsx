import { Navbar } from "@/components/Navbar";
import { SplashHero } from "@/components/SplashHero";
import { Features } from "@/components/Features";
import { DetailedFeatures } from "@/components/DetailedFeatures";
import { Platforms } from "@/components/Platforms";
import { WaitlistCard } from "@/components/WaitlistCard";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SplashHero />
        <Features />
        <DetailedFeatures />
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

        {/* Blog Placeholder Section */}
        <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Blog & Announcements
            </h2>
            <p className="text-zinc-400 mb-8">
              Stay tuned for updates, insights, and behind-the-scenes of building Echo.
            </p>
            <div className="glass-card p-12">
              <p className="text-zinc-500">
                Blog posts coming soon. Join the waitlist to be notified!
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
