"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Programs",
    href: "/cases",
    children: [
      { name: "Medical Support", href: "/cases/medical" },
      { name: "Education Support", href: "/cases/education" },
      { name: "Food Distribution", href: "/cases/food" },
    ],
  },
  { name: "Transparency", href: "/transparency" },
  { name: "Blog", href: "/blog" },
  { name: "Volunteer", href: "/volunteer" },
  { name: "Contact", href: "/contact" },
];

const darkHeroPages = ["/"];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const hasDarkHero = darkHeroPages.includes(pathname);
  const solid = !hasDarkHero || scrolled;

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-white/90 shadow-lg shadow-black/[0.04] backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${solid ? "bg-primary-500" : "bg-white/10 backdrop-blur-md"}`}>
            <Heart className="h-5 w-5 text-white fill-white" />
          </div>
          <div>
            <span className={`font-display text-xl font-bold transition-colors duration-300 ${solid ? "text-gray-900" : "text-white"}`}>
              Fatima Rahma
            </span>
            <span className={`block text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${solid ? "text-gold-500" : "text-gold-400"}`}>
              Foundation
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.map((item) =>
            item.children ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setProgramsOpen(true)}
                onMouseLeave={() => setProgramsOpen(false)}
              >
                <button className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${solid ? "text-gray-600 hover:bg-gray-100 hover:text-gray-900" : "text-white/70 hover:bg-white/10 hover:text-white"}`}>
                  {item.name}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {programsOpen && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="w-60 rounded-2xl bg-white p-2 shadow-2xl shadow-black/10 ring-1 ring-black/[0.04]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-primary-50 hover:text-primary-600"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${solid ? "text-gray-600 hover:bg-gray-100 hover:text-gray-900" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Link
            href="/donate"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
          >
            <Heart className="h-4 w-4 transition-transform group-hover:scale-110" />
            Donate Now
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`rounded-xl p-2.5 transition-colors lg:hidden ${solid ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-gray-100/50 bg-white/95 px-4 py-6 backdrop-blur-2xl lg:hidden">
          <div className="space-y-1">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name}>
                  <span className="block px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-gray-300">
                    {item.name}
                  </span>
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-xl px-6 py-2.5 text-sm font-medium text-gray-600 hover:bg-primary-50 hover:text-primary-600"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
          <div className="mt-6 border-t border-gray-100 pt-6">
            <Link
              href="/donate"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full gap-2"
            >
              <Heart className="h-4 w-4" />
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
