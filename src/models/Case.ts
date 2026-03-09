import mongoose, { Schema, models } from "mongoose";

const CaseSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: {
      type: String,
      enum: ["medical", "education", "food"],
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "verified", "active", "funded", "completed", "rejected"],
      default: "pending",
    },
    patientName: { type: String, required: true },
    hospitalName: { type: String },
    location: { type: String, required: true },
    amountRequired: { type: Number, required: true },
    amountRaised: { type: Number, default: 0 },
    documents: [{ type: String }],
    images: [{ type: String }],
    verifiedBy: { type: Schema.Types.ObjectId, ref: "User" },
    verifiedAt: { type: Date },
    adminNotes: { type: String },
  },
  { timestamps: true }
);

CaseSchema.index({ category: 1, status: 1 });
CaseSchema.index({ createdAt: -1 });

export default models.Case || mongoose.model("Case", CaseSchema);
