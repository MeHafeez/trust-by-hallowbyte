export type CaseStatus = "pending" | "verified" | "active" | "funded" | "completed" | "rejected";
export type CaseCategory = "medical" | "education" | "food";
export type DonationMethod = "upi" | "bank_transfer" | "online_gateway";
export type DonationStatus = "pending" | "confirmed" | "failed";
export type VolunteerStatus = "pending" | "approved" | "active" | "inactive";
export type UserRole = "donor" | "volunteer" | "admin" | "super_admin";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  avatar?: string;
  totalDonated: number;
  createdAt: Date;
}

export interface ICase {
  _id: string;
  title: string;
  description: string;
  category: CaseCategory;
  status: CaseStatus;
  patientName: string;
  hospitalName?: string;
  location: string;
  amountRequired: number;
  amountRaised: number;
  documents: string[];
  images: string[];
  verifiedBy?: string;
  verifiedAt?: Date;
  adminNotes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IDonation {
  _id: string;
  donor: string | IUser;
  donorName: string;
  donorEmail: string;
  donorPhone?: string;
  amount: number;
  method: DonationMethod;
  transactionId?: string;
  case?: string | ICase;
  isAnonymous: boolean;
  status: DonationStatus;
  message?: string;
  createdAt: Date;
}

export interface IVolunteer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  skills: string[];
  motivation: string;
  status: VolunteerStatus;
  hoursContributed: number;
  createdAt: Date;
}

export interface IReport {
  _id: string;
  title: string;
  period: string;
  totalDonations: number;
  totalCases: number;
  casesCompleted: number;
  fundsReceived: number;
  fundsDistributed: number;
  publishedAt?: Date;
  isPublished: boolean;
  content: string;
  createdAt: Date;
}
