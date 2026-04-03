"use client";

import { useState } from "react";
import { Plus, MoreVertical, Phone, Mail } from "lucide-react";

const initialLeads = [
  { id: 1, name: "Jane Cooper", email: "jane.cooper@example.com", phone: "(555) 123-4567", status: "Contacted", interest: "Auto Insurance", date: "2024-03-10" },
  { id: 2, name: "Cody Fisher", email: "cody.fisher@example.com", phone: "(555) 234-5678", status: "New", interest: "Life Insurance", date: "2024-03-12" },
  { id: 3, name: "Esther Howard", email: "esther.howard@example.com", phone: "(555) 345-6789", status: "Quoting", interest: "Home Insurance", date: "2024-03-14" },
  { id: 4, name: "Jenny Wilson", email: "jenny.wilson@example.com", phone: "(555) 456-7890", status: "Closed", interest: "Health Insurance", date: "2024-03-15" },
];

export default function LeadsPage() {
  const [leads] = useState(initialLeads);

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Leads Management</h1>
          <p className="mt-1 text-sm text-slate-500">A list of all incoming leads to contact.</p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
          >
            <Plus className="h-5 w-5 mr-1" aria-hidden="true" />
            Add Lead
          </button>
        </div>
      </div>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-slate-300">
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-6">Name</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">Contact Info</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">Status</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">Interest</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">Date Added</th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50 transition-colors duration-150">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">
                        {lead.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                        <div className="flex flex-col space-y-1">
                          <div className="flex items-center"><Mail className="h-4 w-4 mr-1 text-slate-400" /> {lead.email}</div>
                          <div className="flex items-center"><Phone className="h-4 w-4 mr-1 text-slate-400" /> {lead.phone}</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                        <span className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium ${
                          lead.status === 'New' ? 'bg-green-100 text-green-800' :
                          lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-800' :
                          lead.status === 'Quoting' ? 'bg-blue-100 text-blue-800' :
                          'bg-slate-100 text-slate-800'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">{lead.interest}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">{lead.date}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button className="text-slate-400 hover:text-slate-500">
                          <MoreVertical className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
