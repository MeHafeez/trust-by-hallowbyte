import Link from "next/link";
import { Heart, Mail, Phone, MapPin, ArrowUpRight, MessageCircle, ExternalLink } from "lucide-react";

const footerLinks = {
  programs: [
    { name: "Medical Support", href: "/cases/medical" },
    { name: "Education Support", href: "/cases/education" },
    { name: "Food Distribution", href: "/cases/food" },
    { name: "Active Cases", href: "/cases" },
  ],
  foundation: [
    { name: "About Us", href: "/about" },
    { name: "Transparency", href: "/transparency" },
    { name: "Blog & Gallery", href: "/blog" },
    { name: "Volunteer", href: "/volunteer" },
    { name: "Contact Us", href: "/contact" },
  ],
  legal: [
    { name: "Donate Now", href: "/donate" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#041f13]">
      {/* Top CTA Band */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container-custom relative flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
          <div>
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Every Donation Saves a Life
            </h3>
            <p className="mt-2 text-primary-100/80">
              Join thousands of donors making a lasting difference.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <Link
              href="/donate"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-primary-600 shadow-2xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-black/20"
            >
              <Heart className="h-5 w-5 transition-transform group-hover:scale-110" />
              Donate Now
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-4 text-base font-bold text-white shadow-2xl shadow-green-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(22,101,52,0.15),transparent_50%)]" />
      <div className="container-custom relative py-20">
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md">
                <Heart className="h-5 w-5 text-gold-400 fill-gold-400" />
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white">
                  Fatima Rahma
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-400">
                  Foundation
                </span>
              </div>
            </div>

            {/* Tagline */}
            <div className="mt-6 rounded-xl bg-white/[0.04] p-4 backdrop-blur-sm">
              <p className="text-sm leading-relaxed text-white/60">
                We are supporting <span className="line-through text-white/30">poor</span>{" "}
                <span className="font-semibold text-gold-400">our people</span>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-white/60">
                We love the earth — let&apos;s make everyone&apos;s life beautiful and happy.
              </p>
            </div>

            <div className="mt-6 space-y-3.5">
              <div className="flex items-center gap-3 text-sm text-white/30">
                <Mail className="h-4 w-4 text-gold-500/60" />
                contact@fatimarahma.org
              </div>
              <div className="flex items-center gap-3 text-sm text-white/30">
                <Phone className="h-4 w-4 text-gold-500/60" />
                +91 98765 43210
              </div>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/30 transition-colors hover:text-green-400">
                <MessageCircle className="h-4 w-4 text-green-500/60" />
                WhatsApp Chat
              </a>
              <div className="flex items-center gap-3 text-sm text-white/30">
                <MapPin className="h-4 w-4 text-gold-500/60" />
                Guntur & Hyderabad, India
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">
              Programs
            </h4>
            <ul className="mt-7 space-y-3.5">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/30 transition-colors duration-300 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Foundation */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">
              Foundation
            </h4>
            <ul className="mt-7 space-y-3.5">
              {footerLinks.foundation.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/30 transition-colors duration-300 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">
              Support & Legal
            </h4>
            <ul className="mt-7 space-y-3.5">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/30 transition-colors duration-300 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="https://chat.whatsapp.com/YOUR_GROUP_INVITE_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2.5 text-xs font-semibold text-green-400 transition-colors hover:bg-green-500/20"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Join Volunteer WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-custom flex flex-col items-center justify-between gap-4 py-7 sm:flex-row">
          <p className="text-sm text-white/20">
            &copy; {new Date().getFullYear()} Fatima Rahma Foundation. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-white/20">
            A trust by{" "}
            <span className="font-semibold text-white/40">HallowByte Innovate Pvt. Ltd.</span>
            <span className="mx-1">·</span>
            Built with{" "}
            <Heart className="inline h-3 w-3 text-rose-400 fill-rose-400" />{" "}
            for humanity
          </p>
        </div>
      </div>
    </footer>
  );
}
