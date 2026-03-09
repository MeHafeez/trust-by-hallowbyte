"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Filter } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CaseCard from "@/components/ui/CaseCard";
import { allCases, totalCases } from "@/data/cases";

const filters = [
  { key: "all", label: `All Cases (${totalCases})` },
  { key: "medical", label: "Medical" },
  { key: "education", label: "Education" },
  { key: "food", label: "Food" },
];

export default function CasesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? allCases
      : allCases.filter((c) => c.category === activeFilter);

  return (
    <>
      <section className="relative overflow-hidden bg-primary-900 pb-24 pt-12">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1400&q=80"
            alt="Charity hands"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 to-primary-900" />
        </div>
        <div className="islamic-pattern absolute inset-0 opacity-10" />
        <div className="container-custom relative text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            Our Programs
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold text-white sm:text-5xl">
            Active Cases
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            {totalCases} verified cases. Your donation goes directly to
            the beneficiary.
          </p>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white py-4">
        <div className="container-custom flex flex-wrap items-center gap-3">
          <Link href="/cases/medical" className="rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-100 transition-colors">
            Medical Cases
          </Link>
          <Link href="/cases/education" className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100 transition-colors">
            Education Support
          </Link>
          <Link href="/cases/food" className="rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-600 hover:bg-amber-100 transition-colors">
            Food Distribution
          </Link>
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="flex items-center gap-3">
            <Filter className="h-5 w-5 text-gray-400" />
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === f.key
                    ? "bg-primary-500 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <CaseCard key={c.id} {...c} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-gray-500">
              No cases found for this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
