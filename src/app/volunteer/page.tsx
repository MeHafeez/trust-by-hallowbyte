"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Users,
  Clock,
  MapPin,
  CheckCircle,
  Send,
  Stethoscope,
  GraduationCap,
  UtensilsCrossed,
  Camera,
  Megaphone,
  Truck,
  MessageCircle,
  Star,
  Shield,
  ArrowRight,
} from "lucide-react";
import { impact } from "@/data/stats";

const roles = [
  { icon: Stethoscope, title: "Medical Case Verifier", description: "Help verify medical cases by visiting hospitals and documenting patient conditions.", color: "bg-rose-500/10 text-rose-500" },
  { icon: GraduationCap, title: "Education Mentor", description: "Teach and mentor underprivileged children in our education programs.", color: "bg-blue-500/10 text-blue-500" },
  { icon: UtensilsCrossed, title: "Food Drive Volunteer", description: "Help organize and distribute food to homeless and poor families.", color: "bg-amber-500/10 text-amber-500" },
  { icon: Camera, title: "Content Creator", description: "Document our work through photography, videography, and social media.", color: "bg-purple-500/10 text-purple-500" },
  { icon: Megaphone, title: "Fundraiser", description: "Help raise funds through campaigns, events, and outreach programs.", color: "bg-orange-500/10 text-orange-500" },
  { icon: Truck, title: "Logistics Volunteer", description: "Assist with transportation, warehousing, and distribution logistics.", color: "bg-emerald-500/10 text-emerald-500" },
];

const benefits = [
  "Make a real, measurable impact in people's lives",
  "Certificate of volunteering for your records",
  "Be part of a compassionate community",
  "Develop leadership and organizational skills",
  "Flexible hours — contribute on your schedule",
  "Networking with like-minded changemakers",
];

const testimonials: { name: string; role: string; quote: string; city: string }[] = [];

const steps = [
  { num: "01", title: "Apply Online", desc: "Fill out the volunteer form below. Takes less than 2 minutes." },
  { num: "02", title: "Join WhatsApp Group", desc: "Get added to our volunteer WhatsApp group for coordination and updates." },
  { num: "03", title: "Orientation Call", desc: "A brief call with our team to match your skills with the right role." },
  { num: "04", title: "Start Volunteering", desc: "Begin making a difference — on your schedule, in your city." },
];

export default function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative overflow-hidden pb-24 pt-12">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1400&q=80"
            alt="Volunteers"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-800/85 to-primary-900/90" />
        </div>
        <div className="islamic-pattern absolute inset-0 opacity-10" />
        <div className="container-custom relative text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300 backdrop-blur-sm">
            Volunteer
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Be a Hand of Hope
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Your time and skills can transform lives. Join our volunteer family
            and be part of something truly meaningful.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>{impact.volunteers}+ Volunteers</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>2 Cities</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Flexible Hours</span>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#apply" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl">
              <Heart className="h-4 w-4" />
              Apply Now
            </a>
            <a
              href="https://chat.whatsapp.com/GzKNWhriOs65UCA8RffEMP?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-green-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <MessageCircle className="h-4 w-4" />
              Join WhatsApp Group
            </a>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-500">
              How It Works
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-gray-900 sm:text-4xl">
              4 Simple Steps to Join
            </h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.num} className="relative rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="font-display text-4xl font-bold text-primary-100">{step.num}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-500">
              Volunteer Roles
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-gray-900 sm:text-4xl">
              How You Can Help
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-500">
              Choose a role that matches your skills and interests. Every contribution matters.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <div key={role.title} className="group rounded-2xl bg-white p-7 ring-1 ring-black/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${role.color} transition-transform duration-300 group-hover:scale-110`}>
                  <role.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-gray-900">
                  {role.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center">
              <span className="inline-block rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-500">
                Volunteer Stories
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-gray-900 sm:text-4xl">
                Hear From Our Volunteers
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <div key={t.name} className="rounded-2xl bg-gray-50 p-7 ring-1 ring-gray-100">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-gold-400 fill-gold-400" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-gray-600 italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3 border-t border-gray-200 pt-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-xs font-bold text-white">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-display text-sm font-bold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role} · {t.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits + Form */}
      <section id="apply" className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-500">
                Why Volunteer
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-gray-900">
                Why Join Us?
              </h2>
              <p className="mt-4 text-gray-600">
                Volunteering with Fatima Rahma Foundation is more than giving time
                — it&apos;s becoming part of a family dedicated to change.
              </p>
              <ul className="mt-8 space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" />
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-6 text-white">
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-8 w-8" />
                  <div>
                    <h3 className="font-display text-lg font-bold">Join Our WhatsApp Group</h3>
                    <p className="text-sm text-green-100">Stay connected with fellow volunteers</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-green-100">
                  Get real-time updates, coordinate with the team, and be the first to know about upcoming drives and events.
                </p>
                <a
                  href="https://chat.whatsapp.com/GzKNWhriOs65UCA8RffEMP?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-green-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <MessageCircle className="h-4 w-4" />
                  Join WhatsApp Group
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="card">
              {submitted ? (
                <div className="py-12 text-center">
                  <Heart className="mx-auto h-16 w-16 text-primary-500 fill-primary-500" />
                  <h3 className="mt-6 font-display text-2xl font-bold text-gray-900">
                    Welcome Aboard!
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Thank you for your willingness to volunteer. Our team will
                    contact you within 48 hours.
                  </p>
                  <a
                    href="https://chat.whatsapp.com/GzKNWhriOs65UCA8RffEMP?mode=gi_t"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Join Volunteer WhatsApp Group
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-xl font-bold text-gray-900">
                    Volunteer Application
                  </h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input type="text" required className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input type="email" required className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                      <input type="tel" required className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" placeholder="+91 " />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">City</label>
                      <input type="text" required className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Preferred Role</label>
                    <select className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                      {roles.map((r) => (
                        <option key={r.title}>{r.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Why do you want to volunteer?</label>
                    <textarea required rows={4} className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" />
                  </div>
                  <button type="submit" className="btn-primary w-full gap-2">
                    <Send className="h-4 w-4" />
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
