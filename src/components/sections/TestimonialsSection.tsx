import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Anjali Sharma",
    role: "Mother of beneficiary",
    quote:
      "My son needed urgent heart surgery and we had no money. Fatima Rahma Foundation covered the entire hospital bill. My son is healthy today because of their help. I cannot thank them enough.",
    rating: 5,
    accent: "from-rose-500/10 to-rose-500/5",
  },
  {
    name: "Irfan Ahmed",
    role: "Regular Donor",
    quote:
      "What sets Fatima Rahma apart is their complete transparency. I can see exactly where my money goes. Every donation is tracked and I receive updates about the cases I support.",
    rating: 5,
    accent: "from-primary-500/10 to-primary-500/5",
  },
  {
    name: "Priya Nair",
    role: "Volunteer",
    quote:
      "Volunteering with Fatima Rahma Foundation has been the most meaningful experience of my life. The team is dedicated, the process is transparent, and the impact is real.",
    rating: 5,
    accent: "from-blue-500/10 to-blue-500/5",
  },
  {
    name: "Dr. Syed Hassan",
    role: "Partner Hospital",
    quote:
      "We have partnered with Fatima Rahma Foundation for over a year. They verify each case thoroughly and ensure timely payments. A trustworthy organization doing incredible work.",
    rating: 5,
    accent: "from-amber-500/10 to-amber-500/5",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#faf9f7]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(22,101,52,0.04),transparent_50%)]" />

      <div className="container-custom relative">
        <SectionHeading
          badge="Testimonials"
          title="Voices of Hope"
          subtitle="Stories from the people whose lives have been touched by the kindness of our donors and volunteers."
          center
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group relative overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-black/[0.04] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.06] ${
                i === 0 ? "md:col-span-2 md:flex md:gap-10" : ""
              }`}
            >
              {/* Accent gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${t.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

              {/* Quote icon */}
              <div className="relative mb-6 md:mb-0">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-500/10">
                  <Quote className="h-6 w-6 text-primary-500" />
                </div>
              </div>

              <div className="relative flex-1">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 text-gold-400 fill-gold-400"
                    />
                  ))}
                </div>

                <blockquote className="mt-5 text-[15px] leading-relaxed text-gray-600 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-6 flex items-center gap-4 border-t border-gray-100 pt-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 font-display text-sm font-bold text-white shadow-lg shadow-primary-500/20">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-base font-bold text-gray-900">
                      {t.name}
                    </p>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
