import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Stethoscope, Heart, Shield, FileCheck, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CaseCard from "@/components/ui/CaseCard";
import { getCasesByCategory } from "@/data/cases";
import { medicalStats } from "@/data/stats";

export const metadata: Metadata = { title: "Medical Support Cases" };

const cases = getCasesByCategory("medical");

const process = [
  { icon: FileCheck, title: "Case Submission", desc: "Family or hospital submits a case with medical documents." },
  { icon: Shield, title: "Verification", desc: "Our team visits the hospital, verifies documents, and approves the case." },
  { icon: Heart, title: "Fundraising", desc: "The case goes live. Donors contribute directly to the patient's fund." },
  { icon: Stethoscope, title: "Treatment & Payment", desc: "We pay the hospital directly. Patient receives treatment." },
];

export default function MedicalCasesPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-24 pt-12">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1400&q=80"
            alt="Medical support"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/70 via-red-800/80 to-red-900/90" />
        </div>
        <div className="islamic-pattern absolute inset-0 opacity-10" />
        <div className="container-custom relative text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
            <Stethoscope className="h-8 w-8 text-white" />
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold text-white sm:text-5xl">
            Medical Support
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-red-100">
            We aim to cover hospital bills for patients whose families cannot
            afford life-saving treatment. Medical support is coming soon.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Our Process"
            title="How Medical Cases Are Verified"
            subtitle="Every case goes through a rigorous verification process to ensure your donation reaches genuine patients."
            center
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.title} className="relative rounded-2xl bg-gray-50 p-6 text-center ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/20">
                  <p.icon className="h-7 w-7 text-white" />
                </div>
                <span className="mt-4 inline-block rounded-full bg-red-50 px-3 py-0.5 text-xs font-bold text-red-500">
                  Step {i + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="flex items-end justify-between">
            <SectionHeading badge="Active Cases" title="Patients Who Need You" />
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
