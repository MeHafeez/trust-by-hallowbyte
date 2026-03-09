import { Metadata } from "next";
import Image from "next/image";
import {
  Eye,
  TrendingUp,
  IndianRupee,
  Heart,
  Users,
  GraduationCap,
  UtensilsCrossed,
  Stethoscope,
  FileText,
  Download,
  CheckCircle,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Transparency Dashboard",
  description: "Full transparency on how every rupee is used at Fatima Rahma Foundation.",
};

const overview = [
  { icon: IndianRupee, label: "Total Funds Received", value: "₹45,23,000", change: "+12% this month" },
  { icon: TrendingUp, label: "Funds Distributed", value: "₹41,85,000", change: "92.5% utilization" },
  { icon: Heart, label: "Total Donations", value: "3,247", change: "+89 this month" },
  { icon: Users, label: "Lives Impacted", value: "2,500+", change: "Across 15 cities" },
];

const distribution = [
  { icon: Stethoscope, label: "Medical Support", amount: "₹24,50,000", percent: 58, color: "bg-red-500" },
  { icon: GraduationCap, label: "Education Support", amount: "₹10,20,000", percent: 24, color: "bg-blue-500" },
  { icon: UtensilsCrossed, label: "Food Distribution", amount: "₹5,65,000", percent: 14, color: "bg-amber-500" },
  { icon: FileText, label: "Operations", amount: "₹1,50,000", percent: 4, color: "bg-gray-400" },
];

const recentDonations = [
  { name: "Anonymous", amount: "₹25,000", date: "2 hours ago", case: "Heart Surgery — Amina" },
  { name: "Rahul M.", amount: "₹5,000", date: "5 hours ago", case: "General Fund" },
  { name: "Zainab K.", amount: "₹10,000", date: "1 day ago", case: "Education — Dharavi" },
  { name: "Anonymous", amount: "₹50,000", date: "1 day ago", case: "Cancer Treatment — Rafi" },
  { name: "Priya S.", amount: "₹2,500", date: "2 days ago", case: "Food Distribution" },
  { name: "Ahmed J.", amount: "₹15,000", date: "3 days ago", case: "Dialysis — Rabia" },
];

const reports = [
  { title: "Monthly Report — February 2026", size: "2.4 MB" },
  { title: "Monthly Report — January 2026", size: "2.1 MB" },
  { title: "Annual Report — 2025", size: "8.7 MB" },
  { title: "Monthly Report — December 2025", size: "2.3 MB" },
];

export default function TransparencyPage() {
  return (
    <>
      {/* Hero */}
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
            is used. Here&apos;s everything, openly.
          </p>
        </div>
      </section>

      {/* Overview Cards */}
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
                  {o.change}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Distribution */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Fund Allocation"
            title="Where Your Money Goes"
            subtitle="A detailed breakdown of how funds are allocated across our programs."
            center
          />

          <div className="mx-auto mt-12 max-w-2xl space-y-6">
            {distribution.map((d) => (
              <div key={d.label} className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50">
                  <d.icon className="h-6 w-6 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-900">{d.label}</p>
                    <p className="text-sm font-bold text-gray-900">{d.amount}</p>
                  </div>
                  <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className={`h-full rounded-full ${d.color} transition-all duration-700`}
                      style={{ width: `${d.percent}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-400">{d.percent}% of total funds</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Donations + Reports */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Recent Donations */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-gray-900">
                Recent Donations
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Live feed of recent contributions
              </p>
              <div className="mt-6 space-y-3">
                {recentDonations.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 font-display text-sm font-bold text-primary-500">
                        {d.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{d.name}</p>
                        <p className="text-xs text-gray-500">{d.case}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-primary-500">{d.amount}</p>
                      <p className="text-xs text-gray-400">{d.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reports */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-gray-900">
                Published Reports
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Download our transparency reports
              </p>
              <div className="mt-6 space-y-3">
                {reports.map((r) => (
                  <div
                    key={r.title}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50">
                      <FileText className="h-5 w-5 text-primary-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">{r.title}</p>
                      <p className="text-xs text-gray-400">{r.size}</p>
                    </div>
                    <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-50 hover:text-primary-500">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
