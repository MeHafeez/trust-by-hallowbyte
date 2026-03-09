import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, BookOpen, Users, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CaseCard from "@/components/ui/CaseCard";
import { getCasesByCategory } from "@/data/cases";
import { educationStats, formatStatPlus } from "@/data/stats";

export const metadata: Metadata = { title: "Education Support Cases" };

const cases = getCasesByCategory("education");

const stats = [
  { icon: GraduationCap, value: formatStatPlus(educationStats.childrenEnrolled), label: "Children Enrolled" },
  { icon: BookOpen, value: formatStatPlus(educationStats.schoolsSupported), label: "Schools Supported" },
  { icon: Users, value: formatStatPlus(educationStats.scholarshipsGiven), label: "Scholarships Given" },
];

export default function EducationPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-24 pt-12">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1400&q=80"
            alt="Children education"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/80 to-blue-900/90" />
        </div>
        <div className="islamic-pattern absolute inset-0 opacity-10" />
        <div className="container-custom relative text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold text-white sm:text-5xl">
            Education Support
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Every child deserves an education. We fund school fees, books, and
            supplies for children from underprivileged families.
          </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container-custom grid gap-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4 rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-100">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/20">
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
            <SectionHeading badge="Active Cases" title="Education Needs Your Support" />
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
