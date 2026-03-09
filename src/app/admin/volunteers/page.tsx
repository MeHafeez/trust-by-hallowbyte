"use client";

import { useState } from "react";
import {
  Search,
  Users,
  CheckCircle,
  Clock,
  XCircle,
  MapPin,
} from "lucide-react";

const volunteers = [
  { id: "V-201", name: "Aisha Khan", email: "aisha@email.com", city: "Mumbai", role: "Medical Case Verifier", status: "active", hours: 120, joined: "Jan 2025" },
  { id: "V-202", name: "Rohit Sharma", email: "rohit@email.com", city: "Delhi", role: "Food Drive Volunteer", status: "active", hours: 85, joined: "Mar 2025" },
  { id: "V-203", name: "Fatima Noor", email: "fatima@email.com", city: "Hyderabad", role: "Education Mentor", status: "active", hours: 200, joined: "Nov 2024" },
  { id: "V-204", name: "Arjun Reddy", email: "arjun@email.com", city: "Bangalore", role: "Content Creator", status: "pending", hours: 0, joined: "Mar 2026" },
  { id: "V-205", name: "Sara Mirza", email: "sara@email.com", city: "Chennai", role: "Fundraiser", status: "pending", hours: 0, joined: "Mar 2026" },
  { id: "V-206", name: "Deepak Patel", email: "deepak@email.com", city: "Jaipur", role: "Logistics Volunteer", status: "inactive", hours: 45, joined: "Jun 2025" },
];

const statusConfig: Record<string, { color: string; icon: typeof CheckCircle }> = {
  active: { color: "bg-green-50 text-green-600", icon: CheckCircle },
  pending: { color: "bg-amber-50 text-amber-600", icon: Clock },
  inactive: { color: "bg-gray-100 text-gray-500", icon: XCircle },
};

export default function AdminVolunteersPage() {
  const [search, setSearch] = useState("");

  const filtered = volunteers.filter((v) =>
    v.name.toLowerCase().includes(search.toLowerCase()) ||
    v.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-gray-900">Volunteers</h1>
          <p className="mt-1 text-sm text-gray-500">Manage volunteer applications and track activity</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg bg-primary-50 px-3 py-2 text-sm font-semibold text-primary-500">
            <Users className="h-4 w-4" />
            {volunteers.filter((v) => v.status === "active").length} Active
          </div>
        </div>
      </div>

      <div className="relative mt-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search volunteers..."
          className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
      </div>

      <div className="mt-4 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-100 bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-gray-500">Volunteer</th>
                <th className="px-4 py-3 font-semibold text-gray-500">City</th>
                <th className="px-4 py-3 font-semibold text-gray-500">Role</th>
                <th className="px-4 py-3 font-semibold text-gray-500">Status</th>
                <th className="px-4 py-3 font-semibold text-gray-500">Hours</th>
                <th className="px-4 py-3 font-semibold text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((v) => {
                const StatusIcon = statusConfig[v.status]?.icon ?? Clock;
                return (
                  <tr key={v.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 font-display text-sm font-bold text-primary-500">
                          {v.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{v.name}</p>
                          <p className="text-xs text-gray-400">{v.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="flex items-center gap-1 text-gray-600">
                        <MapPin className="h-3.5 w-3.5" />
                        {v.city}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{v.role}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${
                          statusConfig[v.status]?.color ?? ""
                        }`}
                      >
                        <StatusIcon className="h-3 w-3" />
                        {v.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-semibold text-gray-900">{v.hours}h</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1">
                        {v.status === "pending" && (
                          <button className="rounded-lg bg-primary-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-primary-600">
                            Approve
                          </button>
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
      </div>
    </div>
  );
}
