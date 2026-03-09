"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  Stethoscope,
  GraduationCap,
  UtensilsCrossed,
} from "lucide-react";

type CaseStatus = "all" | "pending" | "verified" | "active" | "completed" | "rejected";

const cases = [
  { id: "C-1001", title: "Heart Surgery — Amina Begum", category: "medical", status: "active", amount: "₹4,50,000", raised: "₹3,12,000", location: "Mumbai", date: "15 Feb 2026" },
  { id: "C-1002", title: "School Fees — Dharavi", category: "education", status: "active", amount: "₹1,80,000", raised: "₹95,000", location: "Mumbai", date: "12 Feb 2026" },
  { id: "C-1003", title: "Food Drive — 50 Families", category: "food", status: "active", amount: "₹2,50,000", raised: "₹1,78,000", location: "Hyderabad", date: "10 Feb 2026" },
  { id: "C-1004", title: "Cancer Treatment — Rafi", category: "medical", status: "active", amount: "₹8,00,000", raised: "₹3,50,000", location: "Delhi", date: "8 Feb 2026" },
  { id: "C-1024", title: "Kidney Dialysis — Fatima Bee", category: "medical", status: "pending", amount: "₹3,60,000", raised: "₹0", location: "Chennai", date: "7 Mar 2026" },
  { id: "C-1025", title: "Chemotherapy — Salim Khan", category: "medical", status: "pending", amount: "₹5,50,000", raised: "₹0", location: "Delhi", date: "7 Mar 2026" },
  { id: "C-1026", title: "School Supplies — 30 Children", category: "education", status: "pending", amount: "₹90,000", raised: "₹0", location: "Bihar", date: "6 Mar 2026" },
  { id: "C-0998", title: "Liver Surgery — Shabana", category: "medical", status: "completed", amount: "₹6,00,000", raised: "₹6,00,000", location: "Bangalore", date: "1 Jan 2026" },
];

const statusConfig: Record<string, { color: string; icon: typeof CheckCircle }> = {
  pending: { color: "bg-amber-50 text-amber-600", icon: Clock },
  verified: { color: "bg-blue-50 text-blue-600", icon: Eye },
  active: { color: "bg-green-50 text-green-600", icon: CheckCircle },
  completed: { color: "bg-primary-50 text-primary-600", icon: CheckCircle },
  rejected: { color: "bg-red-50 text-red-600", icon: XCircle },
};

const categoryIcon: Record<string, typeof Stethoscope> = {
  medical: Stethoscope,
  education: GraduationCap,
  food: UtensilsCrossed,
};

export default function AdminCasesPage() {
  const [filter, setFilter] = useState<CaseStatus>("all");
  const [search, setSearch] = useState("");

  const filtered = cases.filter((c) => {
    const matchFilter = filter === "all" || c.status === filter;
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-gray-900">
            Case Management
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Verify, approve, and track all cases
          </p>
        </div>
        <button className="btn-primary gap-2 text-sm">
          <FileText className="h-4 w-4" />
          New Case
        </button>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search cases..."
            className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-400" />
          {(["all", "pending", "active", "completed", "rejected"] as CaseStatus[]).map(
            (s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium capitalize ${
                  filter === s
                    ? "bg-primary-500 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {s}
              </button>
            )
          )}
        </div>
      </div>

      {/* Table */}
      <div className="mt-6 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-100 bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-gray-500">Case</th>
                <th className="px-4 py-3 font-semibold text-gray-500">Category</th>
                <th className="px-4 py-3 font-semibold text-gray-500">Status</th>
                <th className="px-4 py-3 font-semibold text-gray-500">Amount</th>
                <th className="px-4 py-3 font-semibold text-gray-500">Raised</th>
                <th className="px-4 py-3 font-semibold text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((c) => {
                const StatusIcon = statusConfig[c.status]?.icon ?? Clock;
                const CatIcon = categoryIcon[c.category] ?? FileText;
                return (
                  <tr key={c.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div>
                        <p className="font-semibold text-gray-900">{c.title}</p>
                        <p className="text-xs text-gray-400">
                          {c.id} &middot; {c.location} &middot; {c.date}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5 text-gray-500">
                        <CatIcon className="h-4 w-4" />
                        <span className="capitalize">{c.category}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${
                          statusConfig[c.status]?.color ?? ""
                        }`}
                      >
                        <StatusIcon className="h-3 w-3" />
                        {c.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-semibold text-gray-900">{c.amount}</td>
                    <td className="px-4 py-3 text-primary-500 font-semibold">{c.raised}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1">
                        {c.status === "pending" && (
                          <>
                            <button className="rounded-lg bg-primary-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-primary-600">
                              Approve
                            </button>
                            <button className="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-100">
                              Reject
                            </button>
                          </>
                        )}
                        <button className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-200">
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <p className="py-12 text-center text-sm text-gray-500">No cases found.</p>
        )}
      </div>
    </div>
  );
}
