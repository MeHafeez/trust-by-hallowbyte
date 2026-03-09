"use client";

import {
  FileText,
  Download,
  Eye,
  Plus,
  Calendar,
  IndianRupee,
  CheckCircle,
  Clock,
} from "lucide-react";

const reports = [
  {
    id: "R-12",
    title: "Monthly Report — February 2026",
    period: "Feb 2026",
    donations: 289,
    funds: "₹3,47,500",
    cases: 8,
    published: true,
    date: "1 Mar 2026",
  },
  {
    id: "R-11",
    title: "Monthly Report — January 2026",
    period: "Jan 2026",
    donations: 312,
    funds: "₹4,12,000",
    cases: 11,
    published: true,
    date: "1 Feb 2026",
  },
  {
    id: "R-10",
    title: "Annual Report — 2025",
    period: "2025",
    donations: 2646,
    funds: "₹37,63,500",
    cases: 86,
    published: true,
    date: "15 Jan 2026",
  },
  {
    id: "R-09",
    title: "Monthly Report — December 2025",
    period: "Dec 2025",
    donations: 345,
    funds: "₹5,21,000",
    cases: 12,
    published: true,
    date: "1 Jan 2026",
  },
  {
    id: "R-13",
    title: "Monthly Report — March 2026",
    period: "Mar 2026",
    donations: 89,
    funds: "₹1,07,500",
    cases: 3,
    published: false,
    date: "—",
  },
];

export default function AdminReportsPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-gray-900">Reports</h1>
          <p className="mt-1 text-sm text-gray-500">
            Create and publish transparency reports
          </p>
        </div>
        <button className="btn-primary gap-2 text-sm">
          <Plus className="h-4 w-4" />
          Generate Report
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {reports.map((r) => (
          <div
            key={r.id}
            className="flex flex-col gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50">
                <FileText className="h-6 w-6 text-primary-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{r.title}</h3>
                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {r.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <IndianRupee className="h-3 w-3" />
                    {r.funds}
                  </span>
                  <span>{r.donations} donations</span>
                  <span>{r.cases} cases</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {r.published ? (
                <span className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                  <CheckCircle className="h-3 w-3" />
                  Published
                </span>
              ) : (
                <span className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">
                  <Clock className="h-3 w-3" />
                  Draft
                </span>
              )}
              <div className="flex gap-2">
                <button className="rounded-lg bg-gray-100 p-2 text-gray-500 hover:bg-gray-200">
                  <Eye className="h-4 w-4" />
                </button>
                <button className="rounded-lg bg-gray-100 p-2 text-gray-500 hover:bg-gray-200">
                  <Download className="h-4 w-4" />
                </button>
                {!r.published && (
                  <button className="rounded-lg bg-primary-500 px-4 py-2 text-xs font-semibold text-white hover:bg-primary-600">
                    Publish
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
