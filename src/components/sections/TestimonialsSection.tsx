import Link from "next/link";
import { Heart, MessageCircle, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TestimonialsSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#faf9f7]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(22,101,52,0.04),transparent_50%)]" />

      <div className="container-custom relative">
        <SectionHeading
          badge="Be Part of the Beginning"
          title="Our Story Starts With You"
          subtitle="We are a brand-new foundation with a big vision. Your early support means the world to us and the families we aim to serve."
          center
        />

        <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-3xl bg-white p-10 text-center ring-1 ring-black/[0.04] shadow-xl shadow-black/[0.03] sm:p-14">
          <p className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">
            This Eid, help us feed{" "}
            <span className="text-primary-500">100 families</span>
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-500">
            Our very first initiative is a food distribution drive on 20th March
            2026 (In Sha Allah). Every contribution, no matter how small, helps
            us take the first step towards our mission.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/donate"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-primary-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <Heart className="h-5 w-5 transition-transform group-hover:scale-110" />
              Donate Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://chat.whatsapp.com/GzKNWhriOs65UCA8RffEMP?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <MessageCircle className="h-5 w-5" />
              Join WhatsApp Group
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
