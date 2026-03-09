import { NextRequest, NextResponse } from "next/server";
import { allCases, getCasesByCategory, getCaseById } from "@/data/cases";
import { totalCases, totalFundsRaised, totalFundsRequired } from "@/data/stats";

/**
 * GET /api/cases
 *
 * Returns case data from the central data layer.
 * When MongoDB is connected, swap this to query the database instead.
 *
 * Query params:
 *   category  — filter by "medical" | "education" | "food"
 *   id        — return a single case
 *   page      — pagination page (default 1)
 *   limit     — items per page (default 20)
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category") as "medical" | "education" | "food" | null;
    const id = searchParams.get("id");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");

    if (id) {
      const found = getCaseById(id);
      if (!found) return NextResponse.json({ error: "Case not found" }, { status: 404 });
      return NextResponse.json({ case: found });
    }

    const base = category ? getCasesByCategory(category) : allCases;
    const total = base.length;
    const paginated = base.slice((page - 1) * limit, page * limit);

    return NextResponse.json({
      cases: paginated,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
      summary: {
        totalCases,
        totalFundsRaised,
        totalFundsRequired,
      },
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch cases" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // TODO: When MongoDB is connected, create the case in the database
    // For now return a success response with the submitted data
    return NextResponse.json(
      {
        message: "Case submitted for review",
        case: {
          ...body,
          id: `new-${Date.now()}`,
          status: "pending",
          amountRaised: 0,
          createdAt: new Date().toISOString(),
        },
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: "Failed to create case" }, { status: 500 });
  }
}
