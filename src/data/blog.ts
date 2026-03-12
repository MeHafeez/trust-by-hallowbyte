export type BlogCategory = "donations" | "food-drives" | "education" | "events" | "updates";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  body: string[];
  image: string;
  date: string;
  category: BlogCategory;
  location: string;
  gallery: string[];
}

export const categories: { key: BlogCategory | "all"; label: string }[] = [
  { key: "all", label: "All Posts" },
  { key: "donations", label: "Donations" },
  { key: "food-drives", label: "Food Drives" },
  { key: "education", label: "Education" },
  { key: "events", label: "Events" },
  { key: "updates", label: "Updates" },
];

export const categoryColors: Record<BlogCategory, string> = {
  donations: "bg-rose-500/10 text-rose-600",
  "food-drives": "bg-amber-500/10 text-amber-600",
  education: "bg-blue-500/10 text-blue-600",
  events: "bg-purple-500/10 text-purple-600",
  updates: "bg-emerald-500/10 text-emerald-600",
};

export const blogPosts: BlogPost[] = [
  {
    id: "eid-food-distribution-2026",
    title: "Eid Food Distribution Drive — 100 Families",
    excerpt: "Our very first initiative! In Sha Allah, we will distribute food to 100 families in Guntur and Hyderabad this Eid on 20th March 2026.",
    body: [
      "Alhamdulillah, we are excited to announce the first initiative of Fatima Rahma Foundation — an Eid Food Distribution Drive on 20th March 2026, In Sha Allah.",
      "Our goal is to provide food packages to 100 families in Guntur and Hyderabad who are in need. Each food package will include essential items to help families celebrate Eid with dignity and joy.",
      "This is our first step towards building a foundation that serves the community through healthcare, education, and food security. Every donation, no matter how small, brings us closer to our goal.",
      "Join us in making this Eid special for 100 families. Donate today or join our WhatsApp group for realtime updates on the drive. Together, we can make a difference.",
    ],
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&q=80",
    date: "Mar 11, 2026",
    category: "food-drives",
    location: "Guntur & Hyderabad",
    gallery: [
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
    ],
  },
  {
    id: "foundation-launch-announcement",
    title: "Fatima Rahma Foundation — Officially Launched!",
    excerpt: "We are proud to announce the launch of Fatima Rahma Foundation, a trust dedicated to healthcare, education, and food for all.",
    body: [
      "Bismillah — we are thrilled to announce the official launch of Fatima Rahma Foundation, a trust by HallowByte Innovate Pvt. Ltd.",
      "Our mission is simple yet powerful: to ensure every family has access to quality healthcare, education, and nutritious food — regardless of their financial circumstances.",
      "We are starting with an Eid Food Distribution Drive on 20th March 2026, targeting 100 families in Guntur and Hyderabad. This is just the beginning of a much larger vision.",
      "We invite you to be part of this journey from the very beginning. Whether you donate, volunteer, or simply spread the word — every action counts. Join our WhatsApp group for realtime updates.",
    ],
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&q=80",
    date: "Mar 10, 2026",
    category: "updates",
    location: "Guntur & Hyderabad",
    gallery: [
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    ],
  },
];

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find((p) => p.id === id);
}

export function getRelatedPosts(id: string, limit = 3): BlogPost[] {
  const current = getBlogPostById(id);
  if (!current) return blogPosts.slice(0, limit);
  return blogPosts
    .filter((p) => p.id !== id && p.category === current.category)
    .concat(blogPosts.filter((p) => p.id !== id && p.category !== current.category))
    .slice(0, limit);
}
