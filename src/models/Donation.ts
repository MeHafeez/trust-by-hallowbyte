import mongoose, { Schema, models } from "mongoose";

const DonationSchema = new Schema(
  {
    donor: { type: Schema.Types.ObjectId, ref: "User" },
    donorName: { type: String, required: true },
    donorEmail: { type: String, required: true },
    donorPhone: { type: String },
    amount: { type: Number, required: true },
    method: {
      type: String,
      enum: ["upi", "bank_transfer", "online_gateway"],
      required: true,
    },
    transactionId: { type: String },
    case: { type: Schema.Types.ObjectId, ref: "Case" },
    isAnonymous: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["pending", "confirmed", "failed"],
      default: "pending",
    },
    message: { type: String },
  },
  { timestamps: true }
);

DonationSchema.index({ createdAt: -1 });
DonationSchema.index({ donor: 1 });
DonationSchema.index({ case: 1 });

export default models.Donation || mongoose.model("Donation", DonationSchema);
