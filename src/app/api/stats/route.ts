import { NextResponse } from "next/server";
import {
  totalCases,
  totalUrgentCases,
  totalFundsRaised,
  totalFundsRequired,
  impact,
  medicalStats,
  educationStats,
  foodStats,
} from "@/data/stats";

/**
 * GET /api/stats
 *
 * Returns all computed statistics for the platform.
 * These numbers are derived from the central case data.
 */
export async function GET() {
  return NextResponse.json({
    overview: {
      totalCases,
      totalUrgentCases,
      totalFundsRaised,
      totalFundsRequired,
      fundingProgress: totalFundsRequired > 0 ? Math.round((totalFundsRaised / totalFundsRequired) * 100) : 0,
    },
    impact,
    categories: {
      medical: medicalStats,
      education: educationStats,
      food: foodStats,
    },
  });
}
