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
    title: "Eid Food Distribution — 100 Families",
    category: "food",
    patientName: "Community Drive",
    location: "Guntur & Hyderabad",
    amountRequired: 100000,
    amountRaised: 0,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
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
