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
    id: "monthly-ration-drive-feb-2026",
    title: "Monthly Ration Drive — February 2026",
    excerpt: "Our volunteers distributed ration kits to over 200 families across Guntur and Hyderabad. Thank you to every donor who made this possible.",
    body: [
      "On February 25th, our dedicated team of volunteers set out across Guntur and Hyderabad for our monthly ration drive. This month, we reached over 200 families — our biggest distribution yet.",
      "Each ration kit included 10 kg rice, 2 kg dal, cooking oil, salt, sugar, tea, spices, and hygiene essentials. The kits are designed to sustain a family of four for an entire month.",
      "Special thanks to our corporate sponsors and individual donors who contributed ₹3.2 lakh for this drive. Your generosity feeds hundreds of families who would otherwise go hungry.",
      "Our volunteers started early at 6 AM, with distribution points set up in Mangalagiri, Tenali, and Old City Hyderabad. By evening, every single kit had reached a deserving family.",
    ],
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&q=80",
    date: "Feb 25, 2026",
    category: "food-drives",
    location: "Guntur & Hyderabad",
    gallery: [
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80",
      "https://images.unsplash.com/photo-1504159506876-f8338247a14a?w=800&q=80",
      "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=800&q=80",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
    ],
  },
  {
    id: "medical-bill-support-heart-surgery",
    title: "Heart Surgery Funded for 4-Year-Old Aisha",
    excerpt: "With your generous donations, we successfully funded a life-saving heart surgery for little Aisha. She is now recovering well at home.",
    body: [
      "Aisha was born with a congenital heart defect. Her parents, daily-wage labourers in Hyderabad, were told she needed surgery costing ₹4.5 lakh — an amount beyond their wildest imagination.",
      "When Aisha's case was submitted to Fatima Rahma Foundation, our verification team visited the hospital within 48 hours. After confirming the diagnosis with the attending cardiologist, we launched a fundraising campaign.",
      "Within just 10 days, donors from across India came together to fully fund her surgery. The operation was performed at a leading cardiac hospital in Hyderabad and was a complete success.",
      "Aisha is now back home, recovering beautifully. Her father told us, 'You didn't just save my daughter — you saved our entire family.' Stories like these remind us why every donation matters.",
    ],
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200&q=80",
    date: "Feb 18, 2026",
    category: "donations",
    location: "Hyderabad",
    gallery: [
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80",
      "https://images.unsplash.com/photo-1551190822-a9ce113ac100?w=800&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80",
    ],
  },
  {
    id: "school-supplies-donation-january",
    title: "School Supplies Donated to 150 Students",
    excerpt: "Books, bags, and uniforms were distributed to children from underprivileged families across our partnered schools in Guntur.",
    body: [
      "Education is the most powerful tool to break the cycle of poverty. This January, we distributed school supplies to 150 students across three government schools in Guntur district.",
      "Each child received a school bag, notebooks, pens, pencils, geometry boxes, and a new school uniform. For many of these children, it was the first time they owned a brand-new school bag.",
      "We partnered with local teachers to identify the most deserving students — those from families earning less than ₹5,000 per month. The joy on their faces was priceless.",
      "Our education program has now supported over 1,000 students since inception. We believe that when you educate a child, you uplift an entire community.",
    ],
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80",
    date: "Jan 30, 2026",
    category: "education",
    location: "Guntur",
    gallery: [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&q=80",
    ],
  },
  {
    id: "cancer-treatment-fund-raised",
    title: "₹3.5 Lakh Raised for Cancer Treatment",
    excerpt: "Within 72 hours, our donors came together to fully fund Ramesh's chemotherapy treatment. A testament to the power of community.",
    body: [
      "Ramesh, a 45-year-old auto-rickshaw driver from Hyderabad, was diagnosed with stage-2 colon cancer. His family had exhausted all savings on initial tests and consultations.",
      "When his case reached us, our medical verification team confirmed the urgency. We launched an emergency fundraiser with a target of ₹3.5 lakh for his chemotherapy sessions.",
      "The response was overwhelming — within just 72 hours, the full amount was raised through 150+ individual donations. Some donors gave ₹100, others gave ₹50,000. Every rupee counted.",
      "Ramesh has now completed 4 out of 6 chemotherapy cycles and is responding well to treatment. His wife says, 'We had lost all hope. Fatima Rahma Foundation gave us our lives back.'",
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80",
    date: "Jan 20, 2026",
    category: "donations",
    location: "Hyderabad",
    gallery: [
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80",
      "https://images.unsplash.com/photo-1551190822-a9ce113ac100?w=800&q=80",
    ],
  },
  {
    id: "community-kitchen-launch",
    title: "Community Kitchen Launched in Guntur",
    excerpt: "Our new community kitchen serves 100+ hot meals daily to homeless and daily-wage workers. Open 365 days a year.",
    body: [
      "We are proud to announce the launch of our first permanent community kitchen in Guntur. Located near the railway station area, it serves hot, nutritious meals to those who need it most.",
      "The kitchen operates from 12 PM to 2 PM daily, serving freshly prepared rice, sambar, vegetables, and buttermilk. Each meal costs us just ₹25 to prepare, but it means the world to someone who hasn't eaten all day.",
      "Our kitchen team includes 4 full-time cooks and 10 rotating volunteers. The space was generously donated by a local businessman, and operational costs are covered by monthly donors.",
      "In just the first month, we served over 3,000 meals. Our goal is to expand to Hyderabad by mid-2026 and serve 500+ meals daily across both locations.",
    ],
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1200&q=80",
    date: "Jan 12, 2026",
    category: "food-drives",
    location: "Guntur",
    gallery: [
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80",
      "https://images.unsplash.com/photo-1504159506876-f8338247a14a?w=800&q=80",
      "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=800&q=80",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
    ],
  },
  {
    id: "annual-charity-gala-2025",
    title: "Annual Charity Gala — ₹15 Lakh Raised",
    excerpt: "Our 2025 Annual Gala brought together 200+ donors and supporters. The funds raised will support medical cases and education programs throughout 2026.",
    body: [
      "The Fatima Rahma Foundation Annual Charity Gala 2025 was held at a banquet hall in Hyderabad on December 28th. Over 200 guests attended, including donors, volunteers, beneficiaries, and corporate partners.",
      "The evening featured inspiring speeches from beneficiary families, a photo exhibition of our work throughout the year, and a live auction that raised ₹5 lakh alone.",
      "Total funds raised at the event: ₹15 lakh. These funds have been earmarked for 10 medical cases, 50 education scholarships, and 6 months of community kitchen operations.",
      "We are grateful to every single person who attended, donated, or volunteered to make this event a grand success. Together, we are building a more compassionate world.",
    ],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    date: "Dec 28, 2025",
    category: "events",
    location: "Hyderabad",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
    ],
  },
  {
    id: "volunteer-orientation-dec-2025",
    title: "50 New Volunteers Joined in December",
    excerpt: "Our volunteer family continues to grow! 50 passionate individuals joined us this month across Guntur, Hyderabad, and remote locations.",
    body: [
      "December was a record month for our volunteer program. 50 new volunteers completed their orientation and joined our active team, bringing our total volunteer count to over 300.",
      "The new recruits include medical students, software engineers, college students, homemakers, and retired professionals. Each one brings unique skills and a shared passion for service.",
      "Our orientation program covers the Foundation's mission, code of conduct, role-specific training, and an introduction to our WhatsApp coordination groups.",
      "If you're inspired to join, it takes just 2 minutes to apply. Visit our Volunteer page or join our WhatsApp group to get started.",
    ],
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80",
    date: "Dec 20, 2025",
    category: "updates",
    location: "Guntur & Hyderabad",
    gallery: [
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    ],
  },
  {
    id: "winter-blankets-distribution",
    title: "Winter Blanket Drive — 500 Blankets Distributed",
    excerpt: "As temperatures dropped, our team distributed warm blankets to homeless families and elderly people living on the streets.",
    body: [
      "When winter arrived, we knew that hundreds of families sleeping on the streets would face bitter cold nights. Our team mobilized quickly to launch the Winter Blanket Drive.",
      "Thanks to generous donations, we procured 500 high-quality woollen blankets and distributed them across Guntur's railway station area, bus stands, and homeless shelters.",
      "Our volunteers spent three nights going street by street, ensuring that no one was left without warmth. Many of the recipients were elderly individuals with no family or support system.",
      "A warm blanket may seem small, but for someone sleeping on the pavement in December, it can literally save their life. Thank you to every donor who made this possible.",
    ],
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&q=80",
    date: "Dec 10, 2025",
    category: "donations",
    location: "Guntur",
    gallery: [
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
    ],
  },
  {
    id: "scholarship-ceremony-2025",
    title: "Scholarship Ceremony — 30 Students Awarded",
    excerpt: "30 brilliant students from low-income families received scholarships for higher education. Education is the greatest equalizer.",
    body: [
      "Our annual Scholarship Ceremony was held in Hyderabad, where 30 deserving students were awarded full scholarships for the academic year 2025-26.",
      "The scholarships cover tuition fees, books, and a monthly stipend for students pursuing degrees in engineering, medicine, commerce, and arts. Each student was selected based on academic merit and financial need.",
      "Chief guest Dr. Srinivas Reddy, a renowned educationist, addressed the students: 'Education is the one investment that never depreciates. Use this opportunity to transform not just your life, but your entire community.'",
      "Many of these students are the first in their families to attend college. We are committed to supporting them throughout their academic journey and beyond.",
    ],
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1200&q=80",
    date: "Nov 28, 2025",
    category: "education",
    location: "Hyderabad",
    gallery: [
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
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
