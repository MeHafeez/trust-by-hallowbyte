import {
  IndianRupee,
  Heart,
  FileCheck,
  Users,
  TrendingUp,
  ArrowUpRight,
  Clock,
} from "lucide-react";

const stats = [
  { icon: IndianRupee, label: "Total Funds", value: "₹45,23,000", change: "+12.5%", up: true },
  { icon: Heart, label: "Total Donations", value: "3,247", change: "+8.2%", up: true },
  { icon: FileCheck, label: "Active Cases", value: "24", change: "+3 this week", up: true },
  { icon: Users, label: "Volunteers", value: "312", change: "+15 this month", up: true },
];

const recentActivity = [
  { type: "donation", text: "Anonymous donated ₹25,000 to Heart Surgery — Amina", time: "2h ago" },
  { type: "case", text: "New case submitted: Kidney Dialysis for Fatima Bee", time: "3h ago" },
  { type: "volunteer", text: "New volunteer application: Aisha Khan, Mumbai", time: "5h ago" },
  { type: "donation", text: "Rahul M. donated ₹5,000 to General Fund", time: "5h ago" },
  { type: "case", text: "Case completed: School Fees for Children — Kolkata", time: "1d ago" },
  { type: "donation", text: "Zainab K. donated ₹10,000 to Education — Dharavi", time: "1d ago" },
];

const pendingCases = [
  { id: "C-1024", name: "Kidney Dialysis — Fatima Bee", location: "Chennai", amount: "₹3,60,000", submitted: "2 hours ago" },
  { id: "C-1025", name: "Chemotherapy — Salim Khan", location: "Delhi", amount: "₹5,50,000", submitted: "5 hours ago" },
  { id: "C-1026", name: "School Supplies — 30 Children", location: "Bihar", amount: "₹90,000", submitted: "1 day ago" },
];

export default function AdminOverviewPage() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-gray-900">Overview</h1>
      <p className="mt-1 text-sm text-gray-500">
        Welcome back. Here&apos;s what&apos;s happening at Fatima Rahma Foundation.
      </p>

      {/* Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50">
                <s.icon className="h-5 w-5 text-primary-500" />
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-primary-500">
                <TrendingUp className="h-3 w-3" />
                {s.change}
              </span>
            </div>
            <p className="mt-4 font-display text-2xl font-bold text-gray-900">{s.value}</p>
            <p className="mt-1 text-xs text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-5">
        {/* Recent Activity */}
        <div className="lg:col-span-3">
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <h2 className="font-display text-lg font-bold text-gray-900">
              Recent Activity
            </h2>
            <div className="mt-4 space-y-4">
              {recentActivity.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
                      a.type === "donation"
                        ? "bg-primary-500"
                        : a.type === "case"
                        ? "bg-amber-500"
                        : "bg-blue-500"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">{a.text}</p>
                    <p className="mt-0.5 text-xs text-gray-400">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pending Cases */}
        <div className="lg:col-span-2">
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-bold text-gray-900">
                Pending Verification
              </h2>
              <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-600">
                {pendingCases.length} cases
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {pendingCases.map((c) => (
                <div key={c.id} className="rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-400">{c.id}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="h-3 w-3" />
                      {c.submitted}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-gray-900">{c.name}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs text-gray-500">{c.location}</span>
                    <span className="text-sm font-bold text-gray-900">{c.amount}</span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button className="flex-1 rounded-lg bg-primary-500 py-1.5 text-xs font-semibold text-white hover:bg-primary-600">
                      Approve
                    </button>
                    <button className="flex-1 rounded-lg bg-gray-200 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-300">
                      Review
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="/admin/cases"
              className="mt-4 flex items-center justify-center gap-1 text-sm font-semibold text-primary-500 hover:text-primary-600"
            >
              View All Cases <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
