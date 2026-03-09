import mongoose, { Schema, models } from "mongoose";

const ReportSchema = new Schema(
  {
    title: { type: String, required: true },
    period: { type: String, required: true },
    totalDonations: { type: Number, default: 0 },
    totalCases: { type: Number, default: 0 },
    casesCompleted: { type: Number, default: 0 },
    fundsReceived: { type: Number, default: 0 },
    fundsDistributed: { type: Number, default: 0 },
    publishedAt: { type: Date },
    isPublished: { type: Boolean, default: false },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export default models.Report || mongoose.model("Report", ReportSchema);
