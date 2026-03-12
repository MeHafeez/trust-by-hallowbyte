"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Heart,
  Menu,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Home,
  Info,
  Layers,
  Stethoscope,
  GraduationCap,
  UtensilsCrossed,
  Eye,
  FileText,
  Users,
  Phone,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { useSidebar } from "./SidebarContext";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  {
    name: "Programs",
    href: "/cases",
    icon: Layers,
    children: [
      { name: "Medical", href: "/cases/medical", icon: Stethoscope },
      { name: "Education", href: "/cases/education", icon: GraduationCap },
      { name: "Food", href: "/cases/food", icon: UtensilsCrossed },
    ],
  },
  { name: "Transparency", href: "/transparency", icon: Eye },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "Volunteer", href: "/volunteer", icon: Users },
  { name: "Contact", href: "/contact", icon: Phone },
];

function SidebarContent({
  expanded,
  programsOpen,
  setProgramsOpen,
  isActive,
  isChildActive,
  onLinkClick,
}: {
  expanded: boolean;
  programsOpen: boolean;
  setProgramsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: (href: string) => boolean;
  isChildActive: (children: { href: string }[]) => boolean;
  onLinkClick?: () => void;
}) {
  return (
    <>
      {/* Decorative glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary-600/8 to-transparent" />

      {/* Logo */}
      <div className="relative flex h-[72px] shrink-0 items-center border-b border-white/[0.06] px-4">
        <Link
          href="/"
          onClick={onLinkClick}
          className="flex items-center gap-3 overflow-hidden"
        >
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-400 to-primary-700 shadow-lg shadow-primary-700/40 overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="Fatima Rahma Foundation logo"
              fill
              sizes="40px"
              className="object-contain rounded-xl"
            />
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expanded ? "w-36 opacity-100" : "w-0 opacity-0"
            }`}
          >
            <span className="block font-display text-[17px] font-bold leading-tight text-white">
              Fatima Rahma
            </span>
            <span className="block text-[9px] font-semibold uppercase tracking-[0.22em] text-gold-400/90">
              Foundation
            </span>
          </div>
        </Link>
      </div>

      {/* Nav links */}
      <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-5 scrollbar-thin">
        {navigation.map((item) => {
          if (item.children) {
            const childActive = isChildActive(item.children);
            return (
              <div key={item.name}>
                {expanded ? (
                  <button
                    onClick={() => setProgramsOpen((v) => !v)}
                    className={`group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-all duration-200 ${
                      childActive
                        ? "bg-white/[0.08] text-white shadow-sm shadow-black/10"
                        : "text-white/50 hover:bg-white/[0.05] hover:text-white/80"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                          childActive
                            ? "bg-primary-500/20 text-primary-300"
                            : "text-white/40 group-hover:text-white/70"
                        }`}
                      >
                        <item.icon className="h-[17px] w-[17px]" />
                      </div>
                      {item.name}
                    </span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        programsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onLinkClick}
                    className={`group relative flex h-11 w-11 items-center justify-center rounded-xl transition-all mx-auto ${
                      childActive
                        ? "bg-white/[0.08] text-white"
                        : "text-white/40 hover:bg-white/[0.05] hover:text-white/80"
                    }`}
                    title={item.name}
                  >
                    <item.icon className="h-[17px] w-[17px]" />
                    {childActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[9px] h-5 w-[3px] rounded-full bg-gold-400" />
                    )}
                  </Link>
                )}
                {expanded && programsOpen && (
                  <div className="mt-1.5 ml-[22px] space-y-0.5 border-l border-white/[0.08] pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={onLinkClick}
                        className={`flex items-center gap-2.5 rounded-lg px-3 py-[7px] text-[13px] transition-all ${
                          isActive(child.href)
                            ? "bg-gold-500/10 text-gold-300 font-semibold"
                            : "text-white/45 hover:bg-white/[0.04] hover:text-white/70"
                        }`}
                      >
                        <child.icon className="h-3.5 w-3.5 shrink-0" />
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          const active = isActive(item.href);
          return expanded ? (
            <Link
              key={item.name}
              href={item.href}
              onClick={onLinkClick}
              className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-all duration-200 ${
                active
                  ? "bg-white/[0.08] text-white shadow-sm shadow-black/10"
                  : "text-white/50 hover:bg-white/[0.05] hover:text-white/80"
              }`}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                  active
                    ? "bg-primary-500/20 text-primary-300"
                    : "text-white/40 group-hover:text-white/70"
                }`}
              >
                <item.icon className="h-[17px] w-[17px]" />
              </div>
              {item.name}
            </Link>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              onClick={onLinkClick}
              className={`group relative flex h-11 w-11 items-center justify-center rounded-xl transition-all mx-auto ${
                active
                  ? "bg-white/[0.08] text-white"
                  : "text-white/40 hover:bg-white/[0.05] hover:text-white/80"
              }`}
              title={item.name}
            >
              <item.icon className="h-[17px] w-[17px]" />
              {active && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[9px] h-5 w-[3px] rounded-full bg-gold-400" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom CTAs */}
      <div className="relative shrink-0 border-t border-white/[0.06] p-3 space-y-2">
        {expanded ? (
          <>
            <a
              href="https://chat.whatsapp.com/GzKNWhriOs65UCA8RffEMP?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-xl bg-white/[0.05] px-3 py-2.5 text-[13px] font-semibold text-white/60 transition-all hover:bg-white/[0.08] hover:text-white/90"
            >
              <Sparkles className="h-4 w-4 shrink-0 text-gold-400/80" />
              Join for Updates
            </a>
            <Link
              href="/donate"
              onClick={onLinkClick}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-gold-600/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold-600/30"
            >
              <Heart className="h-4 w-4" />
              Donate Now
            </Link>
            <a
              href="https://wa.me/918499910106"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600/90 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-700/25 transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-xl"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </>
        ) : (
          <>
            <a
              href="https://chat.whatsapp.com/GzKNWhriOs65UCA8RffEMP?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 mx-auto items-center justify-center rounded-xl bg-white/[0.05] text-gold-400/80 transition-all hover:bg-white/[0.08] hover:text-gold-300"
              title="Join for Updates"
            >
              <Sparkles className="h-4 w-4" />
            </a>
            <Link
              href="/donate"
              onClick={onLinkClick}
              className="flex h-11 w-11 mx-auto items-center justify-center rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-white shadow-lg shadow-gold-600/25"
              title="Donate Now"
            >
              <Heart className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/918499910106"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 mx-auto items-center justify-center rounded-xl bg-emerald-600/90 text-white shadow-lg shadow-emerald-700/25"
              title="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </>
        )}
      </div>
    </>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { expanded, toggle } = useSidebar();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(true);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(true);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href;
  const isChildActive = (children: { href: string }[]) =>
    children.some((c) => pathname === c.href);

  const sidebarBg =
    "linear-gradient(175deg, #051a11 0%, #071912 40%, #0a2318 100%)";

  return (
    <>
      {/* ───── Desktop Sidebar (persistent) ───── */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 hidden flex-col border-r border-white/[0.06] transition-all duration-300 ease-in-out lg:flex ${
          expanded ? "w-64" : "w-[72px]"
        }`}
        style={{ background: sidebarBg }}
      >
        <SidebarContent
          expanded={expanded}
          programsOpen={programsOpen}
          setProgramsOpen={setProgramsOpen}
          isActive={isActive}
          isChildActive={isChildActive}
        />

        {/* Desktop collapse toggle */}
        <button
          onClick={toggle}
          className="absolute -right-3 top-[84px] z-10 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-[#0d2b1f] text-white/50 shadow-md transition-all duration-200 hover:scale-110 hover:border-white/20 hover:bg-[#14402e] hover:text-white"
          aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          {expanded ? (
            <ChevronLeft className="h-3 w-3" />
          ) : (
            <ChevronRight className="h-3 w-3" />
          )}
        </button>
      </aside>

      {/* ───── Mobile: floating menu button ───── */}
      <button
        onClick={() => setMobileOpen(true)}
        className={`fixed left-4 top-4 z-[80] flex h-12 w-12 items-center justify-center rounded-2xl shadow-2xl shadow-black/30 ring-1 ring-white/10 transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-none opacity-0 scale-75"
            : "opacity-100 scale-100"
        }`}
        style={{ background: sidebarBg }}
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5 text-white" />
      </button>

      {/* ───── Mobile: backdrop overlay ───── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm lg:hidden animate-in fade-in duration-200"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ───── Mobile: slide-out sidebar drawer ───── */}
      {mobileOpen && (
        <aside
          className="fixed inset-y-0 left-0 z-[90] flex w-72 flex-col border-r border-white/[0.06] shadow-2xl shadow-black/50 lg:hidden animate-in slide-in-from-left duration-300"
          style={{ background: sidebarBg }}
        >
          {/* Close button — inside sidebar, top right */}
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute right-3 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>

          <SidebarContent
            expanded={true}
            programsOpen={mobileProgramsOpen}
            setProgramsOpen={setMobileProgramsOpen}
            isActive={isActive}
            isChildActive={isChildActive}
            onLinkClick={() => setMobileOpen(false)}
          />
        </aside>
      )}
    </>
  );
}
