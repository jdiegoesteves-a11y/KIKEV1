"use client";

import { Users, FileText, ArrowUpRight, ArrowDownRight, Activity } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4500 },
  { name: "May", sales: 6000 },
  { name: "Jun", sales: 5500 },
];

const metrics = [
  { name: "Active Policies", value: "2,405", change: "+4.75%", increase: true, icon: FileText },
  { name: "Total Clients", value: "1,204", change: "+10.2%", increase: true, icon: Users },
  { name: "Monthly Revenue", value: "$45,231", change: "-2.5%", increase: false, icon: Activity },
];

const recentActivity = [
  { id: 1, type: "Policy Sold", desc: "Auto Policy sold to Michael Scott", time: "2 hours ago" },
  { id: 2, type: "New Lead", desc: "Jim Halpert added to Home Insurance", time: "4 hours ago" },
  { id: 3, type: "Renewal", desc: "Pam Beesly renewed Health Policy", time: "1 day ago" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard Overview</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-slate-500">Welcome back, Agent!</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((item) => (
          <div key={item.name} className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 p-6 transition-all hover:shadow-md">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="ml-4 truncate">
                <p className="truncate text-sm font-medium text-slate-500">{item.name}</p>
                <div className="flex items-baseline space-x-2 mt-1">
                  <p className="text-2xl font-semibold text-slate-900">{item.value}</p>
                  <p className={`flex items-baseline text-sm font-semibold ${item.increase ? "text-green-600" : "text-red-600"}`}>
                    {item.increase ? (
                      <ArrowUpRight className="self-center flex-shrink-0 h-4 w-4 text-green-500" aria-hidden="true" />
                    ) : (
                      <ArrowDownRight className="self-center flex-shrink-0 h-4 w-4 text-red-500" aria-hidden="true" />
                    )}
                    <span className="sr-only"> {item.increase ? "Increased" : "Decreased"} by </span>
                    {item.change}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Chart */}
        <div className="rounded-xl bg-white shadow-sm ring-1 ring-slate-200 p-6 lg:col-span-2">
          <h2 className="text-lg font-medium text-slate-900 mb-4">Sales Performance Overview</h2>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#64748b" }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b" }} dx={-10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                  itemStyle={{ color: "#0f172a", fontWeight: "500" }} 
                />
                <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, fill: "#3b82f6", strokeWidth: 2 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-xl bg-white shadow-sm ring-1 ring-slate-200 p-6">
          <h2 className="text-lg font-medium text-slate-900 mb-4">Recent Activity</h2>
          <div className="flow-root">
            <ul role="list" className="-mb-8">
              {recentActivity.map((activity, activityIdx) => (
                <li key={activity.id}>
                  <div className="relative pb-8">
                    {activityIdx !== recentActivity.length - 1 ? (
                      <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-slate-200" aria-hidden="true" />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center ring-8 ring-white">
                          <Activity className="h-4 w-4 text-blue-600" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                        <div>
                          <p className="text-sm text-slate-500">
                            {activity.desc}
                          </p>
                        </div>
                        <div className="whitespace-nowrap text-right text-sm text-slate-500">
                          <time dateTime="2020-09-20">{activity.time}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
