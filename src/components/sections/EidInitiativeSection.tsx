"use client";

import Link from "next/link";
import Image from "next/image";
import { UtensilsCrossed, CalendarDays, MapPin, MessageCircle, Heart, ArrowRight } from "lucide-react";

export default function EidInitiativeSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1400&q=80"
          alt="Food distribution"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-emerald-900/90" />
      </div>

      {/* Decorative overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(212,168,67,0.12),transparent_50%)]" />
      <div className="islamic-pattern absolute inset-0 opacity-[0.05]" />
      <div className="absolute left-[8%] top-[18%] h-48 w-48 rounded-full bg-gold-500/12 blur-[90px]" />
      <div className="absolute right-[8%] bottom-[12%] h-56 w-56 rounded-full bg-primary-400/20 blur-[100px]" />

      {/* Gold accent lines */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

      <div className="container-custom relative py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-5 py-2 text-sm font-semibold text-gold-300 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-400" />
            </span>
            Our First Initiative
          </div>

          <h2 className="mt-8 font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Eid Food Distribution
          </h2>
          <p className="mt-3 font-display text-xl text-gold-300 sm:text-2xl">
            In Sha Allah
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            This Eid, let&apos;s make sure no one goes hungry. We are distributing
            food to <span className="font-bold text-white">100 families</span> in
            need — our very first step towards building a better tomorrow.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-white backdrop-blur-sm">
              <CalendarDays className="h-5 w-5 text-gold-400" />
              <span className="font-semibold">20th March 2026</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-white backdrop-blur-sm">
              <UtensilsCrossed className="h-5 w-5 text-gold-400" />
              <span className="font-semibold">100 Families</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-white backdrop-blur-sm">
              <MapPin className="h-5 w-5 text-gold-400" />
              <span className="font-semibold">Guntur & Hyderabad</span>
            </div>
          </div>

          <div className="mt-7 mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.08] px-6 py-4 text-center backdrop-blur-md">
            <p className="text-sm font-medium text-white/85">
              Help us complete our first milestone with your support today.
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/donate"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-primary-600 shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-black/30"
            >
              <Heart className="h-5 w-5 transition-transform group-hover:scale-110" />
              Donate for Eid Drive
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://chat.whatsapp.com/GzKNWhriOs65UCA8RffEMP?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-bold text-white shadow-2xl shadow-gold-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <MessageCircle className="h-5 w-5" />
              Join WhatsApp for Updates
            </a>
          </div>

          <p className="mt-8 text-sm text-white/40">
            Join our WhatsApp group for realtime updates on the Eid food drive and all future initiatives.
          </p>
        </div>
      </div>
    </section>
  );
}
