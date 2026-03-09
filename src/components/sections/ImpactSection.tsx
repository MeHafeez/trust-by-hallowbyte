import ImpactCounter from "@/components/ui/ImpactCounter";
import { impact } from "@/data/stats";

const stats = [
  { end: impact.livesImpacted, suffix: "+", label: "Lives Impacted", prefix: "" },
  { end: impact.fundsDistributedLakhs, suffix: "L+", label: "Funds Distributed", prefix: "₹" },
  { end: impact.childrenEducated, suffix: "+", label: "Children Educated", prefix: "" },
  { end: impact.volunteers, suffix: "+", label: "Volunteers", prefix: "" },
];

export default function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-[#041f13] py-28 sm:py-32 lg:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(22,101,52,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(184,134,11,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(22,101,52,0.15),transparent_40%)]" />
      <div className="islamic-pattern absolute inset-0 opacity-[0.02]" />

      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-custom relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Our Impact
          </span>
          <h2 className="mt-8 font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Numbers That{" "}
            <span className="text-gradient-gold">Speak</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/40">
            Every number represents a life changed, a family supported, and a
            future made brighter.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/10 hover:bg-white/[0.06]"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary-500/5 transition-all duration-500 group-hover:bg-primary-500/10" />

              <ImpactCounter
                end={stat.end}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
