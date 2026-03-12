"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  const show = (delay: number) =>
    visible
      ? { opacity: 1, transform: "translateY(0)", transition: `all 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s` }
      : { opacity: 0, transform: "translateY(32px)" };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#041f13]">
      {/* Layered background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1800&q=80"
          alt="Community support"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03150f]/90 via-[#05251a]/88 to-[#04130f]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(31,107,71,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(186,141,47,0.16),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(31,107,71,0.28),transparent_50%)]" />
        <div className="islamic-pattern absolute inset-0 opacity-[0.03]" />
      </div>

      {/* Floating orbs */}
      <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-primary-500/10 blur-[100px] animate-float" />
      <div className="absolute right-[15%] top-[40%] h-96 w-96 rounded-full bg-gold-500/8 blur-[120px] animate-float-delayed" />
      <div className="absolute bottom-[10%] left-[40%] h-64 w-64 rounded-full bg-primary-400/8 blur-[80px] animate-float" />

      {/* Geometric accent lines */}
      <div className="absolute left-0 top-1/3 h-px w-1/4 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute right-0 top-2/3 h-px w-1/3 bg-gradient-to-l from-transparent via-primary-400/20 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="flex min-h-screen flex-col items-center justify-center py-20 text-center">
          {/* Top badge */}
          <div style={show(0.1)}>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-sm font-medium text-white/70">
                Eid Food Drive — 20th March 2026, In Sha Allah
              </span>
              <Sparkles className="h-3.5 w-3.5 text-gold-400" />
            </div>
          </div>

          {/* Main headline */}
          <div style={show(0.25)}>
            <h1 className="mt-10 max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Healthcare,
              <br />
              Education &{" "}
              <span className="relative inline-block">
                <span className="text-gradient-gold">Food for All</span>
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <path
                    d="M2 8Q75 2 150 8T298 8"
                    stroke="url(#gold-stroke)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gold-stroke" x1="0" y1="0" x2="300" y2="0">
                      <stop offset="0%" stopColor="#d4a843" stopOpacity="0" />
                      <stop offset="30%" stopColor="#d4a843" />
                      <stop offset="70%" stopColor="#fcd34d" />
                      <stop offset="100%" stopColor="#d4a843" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
          </div>

          <div style={show(0.35)}>
            <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 backdrop-blur-sm">
              <span className="text-base font-medium text-white/60 sm:text-lg">
                Serving people with dignity, compassion, and transparency
              </span>
            </div>
          </div>

          <div style={show(0.45)}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/50 sm:text-xl">
              We provide life-saving medical support, quality education, and
              nutritious food to families and communities who need it most.
            </p>
          </div>

          <div style={show(0.5)}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-gold-300 backdrop-blur-sm">
                First Initiative
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur-sm">
                Eid Food Drive
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur-sm">
                Goal: 100 Families
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div style={show(0.55)}>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/donate"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-primary-500 to-primary-600 px-9 py-4 text-base font-semibold text-white shadow-2xl shadow-primary-500/30 transition-all duration-500 hover:shadow-primary-500/50 hover:-translate-y-1"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <Heart className="relative h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="relative">Donate Now</span>
              </Link>
              <Link href="/about" className="btn-glass gap-2 px-9 py-4 text-base">
                Learn About Us
              </Link>
            </div>
          </div>

          {/* Trust indicators */}
          <div style={show(0.7)}>
            <div className="mt-20 grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-4">
              {["Registered NGO", "100% Transparent", "Tax Deductible", "Direct Impact"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20">
                      <svg className="h-3 w-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-white/40">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={show(0.85)}>
            <div className="mt-20 flex flex-col items-center gap-2">
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/20">
                Scroll to explore
              </span>
              <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/10 p-1.5">
                <div className="h-2 w-1 animate-bounce rounded-full bg-white/30" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-50 to-transparent" />
    </section>
  );
}
