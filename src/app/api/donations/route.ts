import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Donation from "@/models/Donation";
import Case from "@/models/Case";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const caseId = searchParams.get("case");

    const filter: Record<string, unknown> = {};
    if (caseId) filter.case = caseId;

    const [donations, total] = await Promise.all([
      Donation.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .populate("case", "title category")
        .lean(),
      Donation.countDocuments(filter),
    ]);

    return NextResponse.json({
      donations,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch donations" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();

    const donation = await Donation.create({
      donorName: body.donorName,
      donorEmail: body.donorEmail,
      donorPhone: body.donorPhone,
      amount: body.amount,
      method: body.method,
      case: body.caseId || undefined,
      isAnonymous: body.isAnonymous || false,
      message: body.message,
      status: "pending",
    });

    if (body.caseId) {
      await Case.findByIdAndUpdate(body.caseId, {
        $inc: { amountRaised: body.amount },
      });
    }

    return NextResponse.json({ donation }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create donation" },
      { status: 500 }
    );
  }
}
