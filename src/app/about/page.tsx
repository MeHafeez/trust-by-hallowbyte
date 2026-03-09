import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Shield,
  Eye,
  Users,
  Target,
  Award,
  HandHeart,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Fatima Rahma Foundation — our mission, values, and the team behind our work to support healthcare, education, and food for all.",
};

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "Every decision we make is guided by empathy and love for humanity.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Complete transparency in funds, operations, and case verification.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Every rupee is tracked and publicly accounted for.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in collective action and community-driven change.",
  },
  {
    icon: Target,
    title: "Impact",
    description: "We focus on measurable outcomes that truly change lives.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards of service.",
  },
];

const team = [
  { name: "Founder", role: "Managing Trustee", initials: "FC" },
  { name: "Dr. Ayesha Khan", role: "Medical Advisory Board", initials: "AK" },
  { name: "Rahul Verma", role: "Operations Head", initials: "RV" },
  { name: "Sana Mirza", role: "Volunteer Coordinator", initials: "SM" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-24 pt-12 lg:pb-32 lg:pt-16">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1400&q=80" alt="About us" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-800/85 to-primary-900/90" />
        </div>
        <div className="islamic-pattern absolute inset-0 opacity-10" />
        <div className="container-custom relative text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            About Us
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            About Fatima Rahma Foundation
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            We are dedicated to ensuring every family has access to quality
            healthcare, education, and nutrition — regardless of their
            financial circumstances.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <HandHeart className="mx-auto h-12 w-12 text-primary-500" />
            <h2 className="mt-6 font-display text-3xl font-bold text-gray-900">
              Driven by Compassion, Guided by Purpose
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Fatima Rahma Foundation was established with a clear mission — to
              stand beside families in their most vulnerable moments. We believe
              access to medical care, education, and food is a basic human right,
              not a privilege.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              What started as a small initiative has grown into a movement that
              spans healthcare, education, and food security — three pillars
              that form the foundation of a dignified life.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <SectionHeading
            badge="Our Values"
            title="What We Stand For"
            subtitle="These principles guide every action we take and every life we touch."
            center
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="card text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50">
                  <v.icon className="h-7 w-7 text-primary-500" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-gray-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Our Team"
            title="People Behind the Mission"
            subtitle="A dedicated team of professionals and volunteers working tirelessly to serve those in need."
            center
          />
          <div className="mx-auto mt-16 grid max-w-3xl gap-6 sm:grid-cols-2">
            {team.map((t) => (
              <div key={t.name} className="card flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-500 font-display text-lg font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-gray-900">
                    {t.name}
                  </p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-500 py-16">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold text-white">
            Join Our Mission
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-100">
            Whether you donate, volunteer, or spread the word — you become a part
            of a movement that is changing lives every day.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/donate" className="btn-gold gap-2 px-8">
              <Heart className="h-5 w-5" />
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white hover:text-primary-500"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
