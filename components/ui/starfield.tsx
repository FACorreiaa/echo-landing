"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Star {
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
    twinkleSpeed: number;
    twinklePhase: number;
}

interface ShootingStar {
    x: number;
    y: number;
    length: number;
    speed: number;
    opacity: number;
    angle: number;
}

interface StarfieldProps {
    className?: string;
    starCount?: number;
    shootingStarFrequency?: number;
}

export function Starfield({
    className,
    starCount = 80, // Reduced from 200 for mobile performance
    shootingStarFrequency = 0.001, // Reduced frequency
}: StarfieldProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const starsRef = useRef<Star[]>([]);
    const shootingStarsRef = useRef<ShootingStar[]>([]);
    const rafRef = useRef<number | null>(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;

        const resize = () => {
            const rect = container.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            ctx.scale(dpr, dpr);
            initStars(rect.width, rect.height);
        };

        const initStars = (width: number, height: number) => {
            starsRef.current = [];
            for (let i = 0; i < starCount; i++) {
                starsRef.current.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 2 + 0.5,
                    opacity: Math.random() * 0.5 + 0.3,
                    speed: Math.random() * 0.02 + 0.01,
                    twinkleSpeed: Math.random() * 0.02 + 0.01,
                    twinklePhase: Math.random() * Math.PI * 2,
                });
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            mouseRef.current = {
                x: (e.clientX - rect.left - rect.width / 2) / rect.width,
                y: (e.clientY - rect.top - rect.height / 2) / rect.height,
            };
        };

        const animate = (time: number) => {
            const rect = container.getBoundingClientRect();
            ctx.clearRect(0, 0, rect.width, rect.height);

            // Draw stars with parallax
            starsRef.current.forEach((star) => {
                const parallaxX = mouseRef.current.x * star.size * 10;
                const parallaxY = mouseRef.current.y * star.size * 10;

                // Twinkle effect
                star.twinklePhase += star.twinkleSpeed;
                const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;

                ctx.beginPath();
                ctx.arc(
                    star.x + parallaxX,
                    star.y + parallaxY,
                    star.size,
                    0,
                    Math.PI * 2
                );
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
                ctx.fill();
            });

            // Randomly spawn shooting stars
            if (Math.random() < shootingStarFrequency) {
                shootingStarsRef.current.push({
                    x: Math.random() * rect.width,
                    y: Math.random() * rect.height * 0.5,
                    length: Math.random() * 80 + 40,
                    speed: Math.random() * 8 + 4,
                    opacity: 1,
                    angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
                });
            }

            // Draw and update shooting stars
            shootingStarsRef.current = shootingStarsRef.current.filter(
                (shootingStar) => {
                    shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
                    shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
                    shootingStar.opacity -= 0.015;

                    if (shootingStar.opacity <= 0) return false;

                    const gradient = ctx.createLinearGradient(
                        shootingStar.x,
                        shootingStar.y,
                        shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
                        shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
                    );
                    gradient.addColorStop(
                        0,
                        `rgba(255, 255, 255, ${shootingStar.opacity})`
                    );
                    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

                    ctx.beginPath();
                    ctx.moveTo(shootingStar.x, shootingStar.y);
                    ctx.lineTo(
                        shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
                        shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
                    );
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 2;
                    ctx.stroke();

                    return (
                        shootingStar.x < rect.width + 100 &&
                        shootingStar.y < rect.height + 100
                    );
                }
            );

            rafRef.current = requestAnimationFrame(animate);
        };

        resize();
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [starCount, shootingStarFrequency]);

    return (
        <div
            ref={containerRef}
            className={cn("absolute inset-0 overflow-hidden", className)}
            aria-hidden="true"
        >
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
}
