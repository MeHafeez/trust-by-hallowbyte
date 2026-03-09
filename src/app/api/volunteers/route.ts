import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Volunteer from "@/models/Volunteer";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");

    const filter: Record<string, unknown> = {};
    if (status) filter.status = status;

    const [volunteers, total] = await Promise.all([
      Volunteer.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
      Volunteer.countDocuments(filter),
    ]);

    return NextResponse.json({
      volunteers,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch volunteers" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();

    const volunteer = await Volunteer.create({
      name: body.name,
      email: body.email,
      phone: body.phone,
      city: body.city,
      skills: body.skills || [],
      motivation: body.motivation,
      status: "pending",
    });

    return NextResponse.json({ volunteer }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create volunteer application" },
      { status: 500 }
    );
  }
}
