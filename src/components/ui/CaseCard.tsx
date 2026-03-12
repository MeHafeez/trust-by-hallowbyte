import Link from "next/link";
import Image from "next/image";
import { Heart, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { formatCurrency, getProgressPercent } from "@/lib/utils";

interface CaseCardProps {
  id: string;
  title: string;
  category: "medical" | "education" | "food";
  patientName: string;
  location: string;
  amountRequired: number;
  amountRaised: number;
  image?: string;
  urgent?: boolean;
}

const categoryConfig = {
  medical: {
    color: "bg-primary-600/10 text-primary-700",
    gradient: "from-primary-600 to-primary-500",
    bg: "from-primary-50 to-primary-100/60",
  },
  education: {
    color: "bg-primary-600/10 text-primary-700",
    gradient: "from-primary-600 to-primary-500",
    bg: "from-primary-50 to-primary-100/60",
  },
  food: {
    color: "bg-gold-500/15 text-gold-600",
    gradient: "from-gold-600 to-gold-500",
    bg: "from-gold-50 to-gold-100/60",
  },
};

const categoryLabels = {
  medical: "Medical",
  education: "Education",
  food: "Food",
};

export default function CaseCard({
  id,
  title,
  category,
  patientName,
  location,
  amountRequired,
  amountRaised,
  image,
  urgent,
}: CaseCardProps) {
  const progress = getProgressPercent(amountRaised, amountRequired);
  const config = categoryConfig[category];

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-black/[0.04] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/[0.08]">
      <div className={`relative h-56 overflow-hidden ${!image ? `bg-gradient-to-br ${config.bg}` : ""}`}>
        {image ? (
          <>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.8),transparent_50%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 animate-ping rounded-full bg-primary-500/10" style={{ animationDuration: "3s" }} />
                <Heart className="h-16 w-16 text-primary-200/60 transition-transform duration-500 group-hover:scale-110" />
              </div>
            </div>
          </>
        )}

        <div className="absolute left-5 top-5 flex gap-2">
          <span className={`rounded-full px-3.5 py-1.5 text-xs font-bold ${image ? "bg-white/90 backdrop-blur-md shadow-sm" : "backdrop-blur-md"} ${categoryConfig[category].color}`}>
            {categoryLabels[category]}
          </span>
          {urgent && (
            <span className="flex items-center gap-1.5 rounded-full bg-gold-500 px-3.5 py-1.5 text-xs font-bold text-white shadow-lg shadow-gold-500/30">
              <Clock className="h-3 w-3" />
              Urgent
            </span>
          )}
        </div>

        <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4 text-gray-700" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display text-lg font-bold leading-snug text-gray-900 line-clamp-2 transition-colors group-hover:text-primary-500">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-400">{patientName}</p>

        <div className="mt-3 flex items-center gap-1.5 text-sm text-gray-400">
          <MapPin className="h-3.5 w-3.5" />
          {location}
        </div>

        <div className="mt-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-300">
                Raised
              </p>
              <p className="mt-0.5 font-display text-xl font-bold text-primary-500">
                {formatCurrency(amountRaised)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-300">
                Goal
              </p>
              <p className="mt-0.5 text-sm font-bold text-gray-700">
                {formatCurrency(amountRequired)}
              </p>
            </div>
          </div>

          <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-gray-100">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${config.gradient} transition-all duration-1000`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-xs font-medium text-gray-400">
            {progress}% funded
          </p>
        </div>

        <Link
          href={`/donate?case=${id}`}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/20 transition-all duration-300 hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/30"
        >
          <Heart className="h-4 w-4" />
          Donate to this Cause
        </Link>
      </div>
    </div>
  );
}
