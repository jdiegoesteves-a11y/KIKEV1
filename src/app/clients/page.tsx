"use client";

import { Shield, CreditCard, HeartPulse, Home as HomeIcon, AlertCircle } from "lucide-react";

const clients = [
  { 
    id: 1, 
    name: "Michael Scott", 
    email: "michael@dundermifflin.com",
    since: "2021",
    policies: [
      { type: "Auto", icon: Shield, name: "Premium Coverage", status: "Active", renewal: "2024-12-01" },
      { type: "Life", icon: HeartPulse, name: "Term Life 20y", status: "Active", renewal: "2041-05-15" }
    ]
  },
  { 
    id: 2, 
    name: "Jim Halpert", 
    email: "jim@dundermifflin.com",
    since: "2022",
    policies: [
      { type: "Home", icon: HomeIcon, name: "Homeowners Plus", status: "Active", renewal: "2024-04-10" }
    ]
  },
  { 
    id: 3, 
    name: "Pam Beesly", 
    email: "pam@dundermifflin.com",
    since: "2022",
    policies: [
      { type: "Health", icon: HeartPulse, name: "Family Health PPO", status: "Expiring Soon", renewal: "2024-05-01" },
      { type: "Auto", icon: Shield, name: "Standard Coverage", status: "Active", renewal: "2025-01-20" }
    ]
  },
];

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Clients & Policies</h1>
          <p className="mt-1 text-sm text-slate-500">Manage your book of business and policy renewals.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {clients.map((client) => (
          <div key={client.id} className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 divide-y divide-slate-100">
            <div className="p-6">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 flex-shrink-0 rounded-full bg-slate-200 flex items-center justify-center font-semibold text-slate-600">
                  {client.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900">{client.name}</h3>
                  <p className="text-sm text-slate-500">{client.email}</p>
                </div>
              </div>
              <p className="mt-4 text-xs font-medium text-slate-400 uppercase tracking-wider">Client Since {client.since}</p>
            </div>
            <div className="bg-slate-50 px-6 py-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">Active Policies</h4>
              <ul className="space-y-3">
                {client.policies.map((policy, idx) => (
                  <li key={idx} className="flex flex-col rounded-md bg-white p-3 shadow-sm ring-1 ring-slate-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <policy.icon className="h-4 w-4 text-blue-500 mr-2" />
                        <span className="text-sm font-medium text-slate-800">{policy.name}</span>
                      </div>
                      <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                        policy.status === 'Expiring Soon' ? 'bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/10' : 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20'
                      }`}>
                        {policy.status}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center text-xs text-slate-500 justify-between">
                      <span>Type: {policy.type}</span>
                      <span className="flex items-center">
                        {policy.status === 'Expiring Soon' && <AlertCircle className="h-3 w-3 mr-1 text-red-500" />}
                        Renewal: {policy.renewal}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
