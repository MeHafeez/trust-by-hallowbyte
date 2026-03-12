import Link from "next/link";
import {
  Heart,
  Search,
  CreditCard,
  CheckCircle,
  Smartphone,
  Building2,
  Globe,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: Search,
    title: "Choose a Cause",
    description: "Browse our verified cases or contribute to the general fund for maximum impact.",
  },
  {
    icon: CreditCard,
    title: "Make a Donation",
    description: "Pay securely via UPI, bank transfer, or online payment gateway.",
  },
  {
    icon: CheckCircle,
    title: "Track Your Impact",
    description: "Receive real-time updates on how your donation is changing lives.",
  },
];

const methods = [
  {
    icon: Smartphone,
    label: "UPI Payment",
    detail: "Google Pay, PhonePe, Paytm",
    color: "from-primary-600/10 to-primary-600/5",
    iconColor: "text-primary-700",
  },
  {
    icon: Building2,
    label: "Bank Transfer",
    detail: "Direct NEFT / RTGS / IMPS",
    color: "from-primary-600/10 to-primary-600/5",
    iconColor: "text-primary-700",
  },
  {
    icon: Globe,
    label: "Online Gateway",
    detail: "Credit/Debit Card, Net Banking",
    color: "from-gold-500/15 to-gold-500/5",
    iconColor: "text-gold-600",
  },
];

export default function HowToDonateSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-warm-50">
      <div className="gradient-mesh absolute inset-0" />

      <div className="container-custom relative">
        <SectionHeading
          badge="How to Help"
          title="Donating is Simple"
          subtitle="Three easy steps to make a real difference in someone's life."
          center
        />

        {/* Steps */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-px w-full bg-gradient-to-r from-primary-200/60 to-transparent md:block" />
              )}

              <div className="relative mx-auto">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary-500/10 to-primary-500/5 transition-transform duration-300 hover:scale-105">
                  <step.icon className="h-8 w-8 text-primary-500" />
                </div>
                <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-500 text-xs font-bold text-white shadow-lg shadow-gold-500/30">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-7 font-display text-xl font-bold text-gray-900">
                {step.title}
              </h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-gray-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mt-20 overflow-hidden rounded-[2rem] bg-white p-10 shadow-xl shadow-black/[0.05] ring-1 ring-black/[0.05]">
          <h3 className="text-center font-display text-2xl font-bold text-gray-900">
            Accepted Payment Methods
          </h3>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {methods.map((method) => (
              <div
                key={method.label}
                className={`group flex items-center gap-5 rounded-2xl bg-gradient-to-br ${method.color} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <method.icon className={`h-6 w-6 ${method.iconColor}`} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{method.label}</p>
                  <p className="mt-0.5 text-sm text-gray-500">{method.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/donate"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-primary-500 to-primary-600 px-10 py-5 text-base font-semibold text-white shadow-2xl shadow-primary-500/25 transition-all duration-500 hover:shadow-primary-500/40 hover:-translate-y-1"
          >
            <Heart className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span>Donate Now</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
