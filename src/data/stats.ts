import { allCases, getCasesByCategory, totalCases } from "./cases";

export { totalCases };

function sumField(arr: typeof allCases, field: "amountRaised" | "amountRequired") {
  return arr.reduce((sum, c) => sum + c[field], 0);
}

// ── Global stats (computed from case data) ──────────────────────────────
const medicalCases = getCasesByCategory("medical");
const educationCases = getCasesByCategory("education");
const foodCases = getCasesByCategory("food");
export const totalUrgentCases = allCases.filter((c) => c.urgent).length;
export const totalFundsRaised = sumField(allCases, "amountRaised");
export const totalFundsRequired = sumField(allCases, "amountRequired");

/**
 * Impact numbers shown on the homepage.
 * Base figures represent historically completed work *plus* current active case data.
 * When the DB is connected, replace these with real queries.
 */
const BASE_PATIENTS_HELPED = 480;
const BASE_CHILDREN_ENROLLED = 1150;
const BASE_MEALS_SERVED = 9500;
const BASE_RATION_KITS = 1800;
const BASE_FAMILIES_SUPPORTED = 4700;
const BASE_SCHOOLS_SUPPORTED = 45;
const BASE_SCHOLARSHIPS = 185;
const BASE_VOLUNTEERS = 280;
const BASE_LIVES_IMPACTED = 2200;

export const impact = {
  livesImpacted: BASE_LIVES_IMPACTED + totalCases,
  fundsDistributedLakhs: Math.round(totalFundsRaised / 100000),
  childrenEducated: BASE_CHILDREN_ENROLLED + educationCases.length * 15,
  volunteers: BASE_VOLUNTEERS + Math.floor(totalCases * 2.5),
};

// ── Category-specific stats ─────────────────────────────────────────────
export const medicalStats = {
  patientsHelped: BASE_PATIENTS_HELPED + medicalCases.length,
  casesVerified: medicalCases.length,
  fundsRaised: sumField(medicalCases, "amountRaised"),
  urgentCases: medicalCases.filter((c) => c.urgent).length,
};

export const educationStats = {
  childrenEnrolled: BASE_CHILDREN_ENROLLED + educationCases.length * 15,
  schoolsSupported: BASE_SCHOOLS_SUPPORTED + educationCases.length,
  scholarshipsGiven: BASE_SCHOLARSHIPS + educationCases.length * 5,
};

export const foodStats = {
  mealsServed: BASE_MEALS_SERVED + foodCases.length * 200,
  rationKits: BASE_RATION_KITS + foodCases.length * 100,
  familiesSupported: BASE_FAMILIES_SUPPORTED + foodCases.length * 50,
};

// ── Formatters ──────────────────────────────────────────────────────────
export function formatStat(n: number): string {
  if (n >= 10000) return `${(n / 1000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}K`;
  return n.toLocaleString("en-IN");
}

export function formatStatPlus(n: number): string {
  return `${formatStat(n)}+`;
}
