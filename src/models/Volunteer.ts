import mongoose, { Schema, models } from "mongoose";

const VolunteerSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    skills: [{ type: String }],
    motivation: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "active", "inactive"],
      default: "pending",
    },
    hoursContributed: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default models.Volunteer || mongoose.model("Volunteer", VolunteerSchema);
