import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CaseCard from "@/components/ui/CaseCard";
import { getFeaturedCases } from "@/data/cases";

const featured = getFeaturedCases(6);

export default function ActiveCasesSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="gradient-mesh absolute inset-0 opacity-50" />

      <div className="container-custom relative">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            badge="Active Cases"
            title="People Who Need You"
            subtitle="Each case is verified by our team. Your donation goes directly to the beneficiary — with full transparency."
          />
          <Link
            href="/cases"
            className="group flex shrink-0 items-center gap-2 rounded-full border-2 border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-primary-500 hover:text-primary-500"
          >
            View All Cases
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((c) => (
            <CaseCard key={c.id} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
