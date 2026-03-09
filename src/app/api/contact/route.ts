import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    // In production: send email, save to DB, or forward to CRM
    console.log("Contact form submission:", { name, email, phone, subject, message });

    return NextResponse.json({
      success: true,
      message: "Thank you for contacting us. We will respond within 24 hours.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process contact form" },
      { status: 500 }
    );
  }
}
