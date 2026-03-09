export type CaseCategory = "medical" | "education" | "food";

export interface CaseData {
  id: string;
  title: string;
  category: CaseCategory;
  patientName: string;
  location: string;
  amountRequired: number;
  amountRaised: number;
  image: string;
  urgent?: boolean;
}

export const allCases: CaseData[] = [
  {
    id: "1",
    title: "Heart Surgery for 8-year-old Amina",
    category: "medical",
    patientName: "Amina Begum",
    location: "Mumbai, Maharashtra",
    amountRequired: 450000,
    amountRaised: 312000,
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80",
    urgent: true,
  },
  {
    id: "2",
    title: "School Fees for 15 Children in Dharavi",
    category: "education",
    patientName: "Dharavi Community School",
    location: "Mumbai, Maharashtra",
    amountRequired: 180000,
    amountRaised: 95000,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
  },
  {
    id: "3",
    title: "Monthly Ration for 50 Families",
    category: "food",
    patientName: "Slum Community",
    location: "Hyderabad, Telangana",
    amountRequired: 250000,
    amountRaised: 178000,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
  },
  {
    id: "4",
    title: "Cancer Treatment for Mohammad Rafi",
    category: "medical",
    patientName: "Mohammad Rafi",
    location: "Delhi",
    amountRequired: 800000,
    amountRaised: 350000,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    urgent: true,
  },
  {
    id: "5",
    title: "Books & Supplies for Village School",
    category: "education",
    patientName: "Anganwadi Center",
    location: "Patna, Bihar",
    amountRequired: 120000,
    amountRaised: 72000,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
  },
  {
    id: "6",
    title: "Dialysis Support for Elderly Patient",
    category: "medical",
    patientName: "Rabia Khatoon",
    location: "Lucknow, UP",
    amountRequired: 360000,
    amountRaised: 210000,
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80",
    urgent: true,
  },
  {
    id: "7",
    title: "Ramadan Food Drive — 200 Families",
    category: "food",
    patientName: "Community Drive",
    location: "Chennai, Tamil Nadu",
    amountRequired: 400000,
    amountRaised: 280000,
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80",
  },
  {
    id: "8",
    title: "Scholarship for 10 Girl Students",
    category: "education",
    patientName: "Girls Education Initiative",
    location: "Jaipur, Rajasthan",
    amountRequired: 300000,
    amountRaised: 150000,
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80",
  },
  {
    id: "9",
    title: "Liver Transplant for Young Mother",
    category: "medical",
    patientName: "Shabana Parveen",
    location: "Bangalore, Karnataka",
    amountRequired: 1200000,
    amountRaised: 450000,
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80",
    urgent: true,
  },
];

export const totalCases = allCases.length;

export function getCasesByCategory(category: CaseCategory): CaseData[] {
  return allCases.filter((c) => c.category === category);
}

export function getFeaturedCases(limit = 6): CaseData[] {
  return [...allCases]
    .sort((a, b) => (b.urgent ? 1 : 0) - (a.urgent ? 1 : 0))
    .slice(0, limit);
}

export function getCaseById(id: string): CaseData | undefined {
  return allCases.find((c) => c.id === id);
}
