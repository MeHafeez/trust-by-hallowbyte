import { allCases, totalCases } from "./cases";

export { totalCases };

function sumField(arr: typeof allCases, field: "amountRaised" | "amountRequired") {
  return arr.reduce((sum, c) => sum + c[field], 0);
}

export const totalFundsRaised = sumField(allCases, "amountRaised");
export const totalFundsRequired = sumField(allCases, "amountRequired");
export const totalUrgentCases = allCases.filter((c) => c.urgent).length;

export const impact = {
  firstDriveFamilies: 100,
  volunteers: 10,
  cities: 2,
  initiatives: 1,
};

export const medicalStats = { patientsHelped: 0, casesVerified: 0, fundsRaised: 0, urgentCases: 0 };
export const educationStats = { childrenEnrolled: 0, schoolsSupported: 0, scholarshipsGiven: 0 };
export const foodStats = { mealsServed: 0, rationKits: 0, familiesSupported: 0 };

export function formatStat(n: number): string {
  if (n >= 10000) return `${(n / 1000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}K`;
  return n.toLocaleString("en-IN");
}

export function formatStatPlus(n: number): string {
  if (n === 0) return "Coming Soon";
  return `${formatStat(n)}+`;
}
