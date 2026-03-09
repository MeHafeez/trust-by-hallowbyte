import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { UtensilsCrossed, Package, Users, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CaseCard from "@/components/ui/CaseCard";
import { getCasesByCategory } from "@/data/cases";
import { foodStats, formatStatPlus } from "@/data/stats";

export const metadata: Metadata = { title: "Food Distribution Programs" };

const cases = getCasesByCategory("food");

const stats = [
  { icon: UtensilsCrossed, value: formatStatPlus(foodStats.mealsServed), label: "Meals Served" },
  { icon: Package, value: formatStatPlus(foodStats.rationKits), label: "Ration Kits Distributed" },
  { icon: Users, value: formatStatPlus(foodStats.familiesSupported), label: "Families Supported" },
];

export default function FoodPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-24 pt-12">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400&q=80"
            alt="Food distribution"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/70 via-amber-800/80 to-amber-900/90" />
        </div>
        <div className="islamic-pattern absolute inset-0 opacity-10" />
        <div className="container-custom relative text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
            <UtensilsCrossed className="h-8 w-8 text-white" />
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold text-white sm:text-5xl">
            Food Distribution
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-amber-100">
            No one should go hungry. We organize regular food drives and ration
            distribution for homeless and poor families.
          </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container-custom grid gap-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4 rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-100">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/20">
                <s.icon className="h-7 w-7 text-white" />
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-gray-900">{s.value}</p>
                <p className="text-sm text-gray-600">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="flex items-end justify-between">
            <SectionHeading badge="Active Programs" title="Hunger Relief Campaigns" />
            <Link href="/cases" className="btn-outline gap-2">
              All Cases <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((c) => (
              <CaseCard key={c.id} {...c} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
