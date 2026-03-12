interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  center = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {badge && (
        <span
          className={`inline-block rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] ${
            light
              ? "border border-white/20 bg-white/10 text-white/75"
              : "border border-primary-600/15 bg-primary-600/5 text-primary-700"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-lg leading-relaxed ${center ? "mx-auto" : ""} ${
            light ? "text-white/60" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
