import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  IndianRupee,
  Heart,
  Users,
  UtensilsCrossed,
  CheckCircle,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Transparency Dashboard",
  description: "Full transparency on how every rupee is used at Fatima Rahma Foundation.",
};

const overview = [
  { icon: IndianRupee, label: "Funds Received", value: "₹0", note: "Accepting donations" },
  { icon: UtensilsCrossed, label: "First Drive Goal", value: "100 Families", note: "Eid Food Distribution" },
  { icon: Heart, label: "Total Donations", value: "0", note: "Be our first donor!" },
  { icon: Users, label: "Volunteers", value: "10+", note: "Guntur & Hyderabad" },
];

export default function TransparencyPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-24 pt-12">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80" alt="Transparency" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-800/85 to-primary-900/90" />
        </div>
        <div className="islamic-pattern absolute inset-0 opacity-10" />
        <div className="container-custom relative text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
            <Eye className="h-8 w-8 text-gold-300" />
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold text-white sm:text-5xl">
            Transparency Dashboard
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            We believe every donor deserves to know exactly how their contribution
            is used. As a new foundation, we commit to full transparency from day one.
          </p>
        </div>
      </section>

      <section className="relative -mt-12">
        <div className="container-custom">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {overview.map((o) => (
              <div key={o.label} className="card">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50">
                    <o.icon className="h-5 w-5 text-primary-500" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    {o.label}
                  </p>
                </div>
                <p className="mt-4 font-display text-2xl font-bold text-gray-900">
                  {o.value}
                </p>
                <p className="mt-1 flex items-center gap-1 text-xs text-primary-500">
                  <CheckCircle className="h-3 w-3" />
                  {o.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Our Promise"
            title="Transparent From Day One"
            subtitle="Every rupee donated will be accounted for and reported publicly."
            center
          />

          <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-warm-50 p-8 text-center ring-1 ring-gray-100">
            <h3 className="font-display text-xl font-bold text-gray-900">
              We Are Just Getting Started
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Fatima Rahma Foundation is a newly established trust. Our first
              initiative is the Eid Food Distribution Drive on 20th March 2026
              (In Sha Allah), where we aim to provide food to 100 families in
              Guntur and Hyderabad. As we receive donations and execute our
              programs, this dashboard will be updated with detailed reports,
              fund allocation breakdowns, and real-time donation tracking.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              We promise 100% transparency in every rupee spent. Stay connected
              through our WhatsApp group for realtime updates.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Heart className="h-4 w-4" />
                Donate Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://chat.whatsapp.com/GzKNWhriOs65UCA8RffEMP?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                Join WhatsApp for Updates
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
