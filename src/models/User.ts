import mongoose, { Schema, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    password: { type: String },
    role: {
      type: String,
      enum: ["donor", "volunteer", "admin", "super_admin"],
      default: "donor",
    },
    avatar: { type: String },
    totalDonated: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default models.User || mongoose.model("User", UserSchema);
