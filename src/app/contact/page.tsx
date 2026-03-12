"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Heart,
  Globe,
  Instagram,
  Twitter,
} from "lucide-react";


const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "contact@fatimarahma.org",
    detail: "We respond within 24 hours",
    href: "mailto:contact@fatimarahma.org",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 84999 10106",
    detail: "Mon–Sat, 10 AM – 6 PM",
    href: "tel:+918499910106",
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 84999 10106",
    detail: "Quick responses on WhatsApp",
    href: "https://wa.me/918499910106?text=Hi%20Fatima%20Care%20Foundation%2C%20I%20have%20a%20query.",
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Guntur & Hyderabad",
    detail: "Andhra Pradesh & Telangana, India",
    href: "#",
    color: "bg-rose-500/10 text-rose-500",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Monday – Saturday",
    detail: "10:00 AM – 6:00 PM IST",
    href: "#",
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.fatimarahma.org",
    detail: "Visit our official website",
    href: "https://www.fatimarahma.org",
    color: "bg-purple-500/10 text-purple-500",
  },
];

const faqs = [
  { q: "How can I donate?", a: "You can donate via UPI, bank transfer, or online payment. Visit our donation page for details." },
  { q: "Is my donation tax-deductible?", a: "Yes, all donations are eligible for tax deduction under Section 80G of the Income Tax Act." },
  { q: "How do I submit a case for support?", a: "Contact us via WhatsApp or email with the patient details and documents. Our team will guide you through the process." },
  { q: "Can I volunteer remotely?", a: "Yes! We have remote roles like content creation, social media management, and fundraising campaigns." },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative overflow-hidden pb-24 pt-12">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=80"
            alt="Contact us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-800/85 to-primary-900/90" />
        </div>
        <div className="islamic-pattern absolute inset-0 opacity-10" />
        <div className="container-custom relative text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            Contact
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold text-white sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Have questions, want to collaborate, or need help submitting a case?
            We&apos;re here for you — always.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://wa.me/918499910106?text=Hi%20Fatima%20Care%20Foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <a
              href="mailto:contact@fatimarahma.org"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20"
            >
              <Mail className="h-4 w-4" />
              Send Email
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-primary-200"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${info.color}`}>
                  <info.icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {info.label}
                </p>
                <p className="mt-1.5 font-display text-lg font-bold text-gray-900 group-hover:text-primary-500 transition-colors">
                  {info.value}
                </p>
                <p className="mt-1 text-sm text-gray-500">{info.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-gray-900">
                Send Us a Message
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Whether you have a question about donations, want to submit a medical case, or are interested in partnering with us — fill out the form and our team will respond promptly.
              </p>

              <div className="mt-8 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 p-6 text-white">
                <h3 className="font-display text-lg font-bold">Urgent Case?</h3>
                <p className="mt-2 text-sm text-primary-100">
                  If you need immediate help with a medical emergency, reach out directly on WhatsApp for the fastest response.
                </p>
                <a
                  href="https://wa.me/918499910106?text=URGENT%3A%20I%20need%20help%20with%20a%20medical%20case"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Helpline
                </a>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-primary-50 hover:text-primary-500">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-primary-50 hover:text-primary-500">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://wa.me/918499910106" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-green-50 hover:text-green-500">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="card">
                {submitted ? (
                  <div className="py-12 text-center">
                    <CheckCircle className="mx-auto h-16 w-16 text-primary-500" />
                    <h3 className="mt-6 font-display text-2xl font-bold text-gray-900">
                      Message Sent!
                    </h3>
                    <p className="mt-3 text-gray-600">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-outline mt-6"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" required className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" required className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" placeholder="you@example.com" />
                      </div>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Phone (optional)</label>
                        <input type="tel" className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" placeholder="+91 84999 10106" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Subject</label>
                        <select className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                          <option>General Inquiry</option>
                          <option>Donation Query</option>
                          <option>Submit a Medical Case</option>
                          <option>Volunteer Inquiry</option>
                          <option>Partnership Proposal</option>
                          <option>Media / Press</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea required rows={5} className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" placeholder="Tell us how we can help..." />
                    </div>
                    <button type="submit" className="btn-primary w-full gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <span className="inline-block rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-500">
                FAQ
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mt-10 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl bg-gray-50 ring-1 ring-gray-100">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <span className="font-display text-base font-bold text-gray-900">{faq.q}</span>
                    <span className={`ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-500 transition-transform ${openFaq === i ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-sm leading-relaxed text-gray-600">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-500 py-14">
        <div className="container-custom text-center">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Join Our Growing Family of Volunteers
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-100">
            Be part of a movement. Whether you donate, volunteer, or spread the word — every action counts.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/donate" className="btn-gold gap-2 px-8">
              <Heart className="h-5 w-5" />
              Donate Now
            </Link>
            <Link href="/volunteer" className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white hover:text-primary-500">
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
