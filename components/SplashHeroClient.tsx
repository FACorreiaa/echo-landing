"use client";

import { ShimmerButton } from "@/components/ui/shimmer-button";

export function SplashHeroClient() {
    return (
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
    );
}
