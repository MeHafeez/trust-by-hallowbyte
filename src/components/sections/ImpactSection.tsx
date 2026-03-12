"use client";

import { UtensilsCrossed, Users, MapPin, Rocket } from "lucide-react";

const goals = [
  { icon: UtensilsCrossed, value: "100", label: "Families to Feed", detail: "Our Eid food drive goal" },
  { icon: Users, value: "10+", label: "Volunteers", detail: "And growing every day" },
  { icon: MapPin, value: "2", label: "Cities", detail: "Guntur & Hyderabad" },
  { icon: Rocket, value: "1st", label: "Initiative", detail: "Eid Food Distribution" },
];

export default function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-[#041f13] py-28 sm:py-32 lg:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(22,101,52,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(184,134,11,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(22,101,52,0.15),transparent_40%)]" />
      <div className="islamic-pattern absolute inset-0 opacity-[0.02]" />

      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-custom relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Our First Step
          </span>
          <h2 className="mt-8 font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            A Journey{" "}
            <span className="text-gradient-gold">Begins</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/40">
            We are just getting started — and we believe every great movement
            begins with a single act of kindness. Here&apos;s where we stand today.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
          {goals.map((g) => (
            <div
              key={g.label}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/10 hover:bg-white/[0.06]"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary-500/5 transition-all duration-500 group-hover:bg-primary-500/10" />
              <div className="relative">
                <g.icon className="h-7 w-7 text-gold-400" />
                <p className="mt-5 font-display text-4xl font-bold text-white">
                  {g.value}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-white/60">
                  {g.label}
                </p>
                <p className="mt-1 text-xs text-white/30">{g.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
