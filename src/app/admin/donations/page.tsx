"use client";

import { useState } from "react";
import {
  Search,
  Download,
  IndianRupee,
  TrendingUp,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";

const donations = [
  { id: "D-5001", name: "Anonymous", email: "—", amount: "₹25,000", method: "UPI", case: "Heart Surgery — Amina", status: "confirmed", date: "7 Mar 2026" },
  { id: "D-5002", name: "Rahul M.", email: "rahul@email.com", amount: "₹5,000", method: "Bank", case: "General Fund", status: "confirmed", date: "7 Mar 2026" },
  { id: "D-5003", name: "Zainab K.", email: "zainab@email.com", amount: "₹10,000", method: "Online", case: "Education — Dharavi", status: "confirmed", date: "6 Mar 2026" },
  { id: "D-5004", name: "Anonymous", email: "—", amount: "₹50,000", method: "Bank", case: "Cancer — Rafi", status: "confirmed", date: "6 Mar 2026" },
  { id: "D-5005", name: "Priya S.", email: "priya@email.com", amount: "₹2,500", method: "UPI", case: "Food Distribution", status: "pending", date: "5 Mar 2026" },
  { id: "D-5006", name: "Ahmed J.", email: "ahmed@email.com", amount: "₹15,000", method: "Online", case: "Dialysis — Rabia", status: "confirmed", date: "4 Mar 2026" },
];

const statusConfig: Record<string, { color: string; icon: typeof CheckCircle }> = {
  confirmed: { color: "bg-green-50 text-green-600", icon: CheckCircle },
  pending: { color: "bg-amber-50 text-amber-600", icon: Clock },
  failed: { color: "bg-red-50 text-red-600", icon: XCircle },
};

export default function AdminDonationsPage() {
  const [search, setSearch] = useState("");

  const filtered = donations.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.case.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-gray-900">Donations</h1>
          <p className="mt-1 text-sm text-gray-500">Track and manage all donations</p>
        </div>
        <button className="btn-outline gap-2 text-sm">
          <Download className="h-4 w-4" />
          Export CSV
        </button>
      </div>

      {/* Summary */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
          <div className="flex items-center gap-3">
            <IndianRupee className="h-5 w-5 text-primary-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Total Received
            </span>
          </div>
          <p className="mt-3 font-display text-2xl font-bold text-gray-900">₹45,23,000</p>
        </div>
        <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-5 w-5 text-primary-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              This Month
            </span>
          </div>
          <p className="mt-3 font-display text-2xl font-bold text-gray-900">₹3,47,500</p>
        </div>
        <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
          <div className="flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-primary-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Avg. Donation
            </span>
          </div>
          <p className="mt-3 font-display text-2xl font-bold text-gray-900">₹13,935</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative mt-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search donations..."
          className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
      </div>

      {/* Table */}
      <div className="mt-4 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-100 bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-gray-500">Donor</th>
                <th className="px-4 py-3 font-semibold text-gray-500">Amount</th>
                <th className="px-4 py-3 font-semibold text-gray-500">Method</th>
                <th className="px-4 py-3 font-semibold text-gray-500">Case</th>
                <th className="px-4 py-3 font-semibold text-gray-500">Status</th>
                <th className="px-4 py-3 font-semibold text-gray-500">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((d) => {
                const StatusIcon = statusConfig[d.status]?.icon ?? Clock;
                return (
                  <tr key={d.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <p className="font-semibold text-gray-900">{d.name}</p>
                      <p className="text-xs text-gray-400">{d.email}</p>
                    </td>
                    <td className="px-4 py-3 font-bold text-gray-900">{d.amount}</td>
                    <td className="px-4 py-3 text-gray-600">{d.method}</td>
                    <td className="px-4 py-3 text-gray-600">{d.case}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${
                          statusConfig[d.status]?.color ?? ""
                        }`}
                      >
                        <StatusIcon className="h-3 w-3" />
                        {d.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500">{d.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
