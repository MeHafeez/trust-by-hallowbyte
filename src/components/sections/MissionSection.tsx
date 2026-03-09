"use client";

import { GraduationCap, Stethoscope, UtensilsCrossed, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { medicalStats, educationStats, foodStats, formatStatPlus } from "@/data/stats";

const pillars = [
  {
    icon: Stethoscope,
    title: "Healthcare Support",
    description:
      "We cover hospital bills for patients whose families cannot afford life-saving treatments. Every patient deserves a chance at life.",
    stat: formatStatPlus(medicalStats.patientsHelped),
    statLabel: "Patients Helped",
    gradient: "from-rose-500/10 via-rose-500/5 to-transparent",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-500",
    accentColor: "text-rose-500",
    href: "/cases/medical",
    borderGlow: "hover:shadow-rose-500/10",
  },
  {
    icon: GraduationCap,
    title: "Education for All",
    description:
      "We fund school fees, books, and supplies for children from underprivileged families to ensure no child is denied education.",
    stat: formatStatPlus(educationStats.childrenEnrolled),
    statLabel: "Children Enrolled",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    accentColor: "text-blue-500",
    href: "/cases/education",
    borderGlow: "hover:shadow-blue-500/10",
  },
  {
    icon: UtensilsCrossed,
    title: "Food Distribution",
    description:
      "Regular food drives and monthly ration distribution to homeless and poor families, ensuring no one goes hungry.",
    stat: formatStatPlus(foodStats.mealsServed),
    statLabel: "Meals Served",
    gradient: "from-amber-500/10 via-amber-500/5 to-transparent",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
    accentColor: "text-amber-500",
    href: "/cases/food",
    borderGlow: "hover:shadow-amber-500/10",
  },
];

export default function MissionSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-warm-50">
      <div className="gradient-mesh absolute inset-0" />

      <div className="container-custom relative">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            badge="Our Mission"
            title="Three Pillars of Hope"
            subtitle="We work across three critical areas to uplift families in need and create lasting impact in communities."
            center
          />
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className={`group relative overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-black/[0.04] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${pillar.borderGlow}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

              <div className="absolute -right-4 -top-4 font-display text-[120px] font-bold leading-none text-gray-50 transition-all duration-500 group-hover:text-gray-100/80">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative">
                <div className={`inline-flex rounded-2xl p-4 ${pillar.iconBg} transition-transform duration-500 group-hover:scale-110`}>
                  <pillar.icon className={`h-7 w-7 ${pillar.iconColor}`} />
                </div>

                <h3 className="mt-8 font-display text-2xl font-bold text-gray-900">
                  {pillar.title}
                </h3>

                <p className="mt-4 text-[15px] leading-relaxed text-gray-500">
                  {pillar.description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
                  <div>
                    <p className={`font-display text-3xl font-bold ${pillar.accentColor}`}>
                      {pillar.stat}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-gray-400">
                      {pillar.statLabel}
                    </p>
                  </div>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${pillar.iconBg} transition-all duration-300 group-hover:scale-110`}>
                    <ArrowUpRight className={`h-4 w-4 ${pillar.iconColor}`} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
