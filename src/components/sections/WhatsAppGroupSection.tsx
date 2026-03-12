import { MessageCircle, Bell, Users, ArrowRight } from "lucide-react";

export default function WhatsAppGroupSection() {
  return (
    <section className="relative overflow-hidden bg-[#041f13]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(31,107,71,0.35),transparent_60%)]" />

      <div className="container-custom relative py-16">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 p-10 text-center shadow-2xl shadow-primary-700/30 ring-1 ring-white/10 sm:p-14">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>

          <h2 className="mt-6 font-display text-2xl font-bold text-white sm:text-3xl">
            Stay Connected — Join Our WhatsApp Group
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80">
            Get realtime updates on our initiatives, food drives, medical support cases,
            and volunteer opportunities. Be the first to know and contribute.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <Bell className="h-4 w-4" /> Realtime Updates
            </span>
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4" /> Community Support
            </span>
            <span className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> Direct Communication
            </span>
          </div>

          <a
            href="https://chat.whatsapp.com/GzKNWhriOs65UCA8RffEMP?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold-500 px-10 py-4 text-base font-bold text-white shadow-xl shadow-gold-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <MessageCircle className="h-5 w-5" />
            Join WhatsApp Group
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
