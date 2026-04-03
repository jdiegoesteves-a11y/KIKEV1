import { Bell, Search } from "lucide-react";

export function Header() {
  return (
    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow-sm border-b border-slate-200">
      <div className="flex flex-1 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1">
          <form className="flex w-full md:ml-0" action="#" method="GET">
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <div className="relative w-full text-slate-400 focus-within:text-slate-600">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                <Search className="h-5 w-5" aria-hidden="true" />
              </div>
              <input
                id="search-field"
                className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-slate-900 placeholder-slate-500 focus:border-transparent focus:placeholder-slate-400 focus:outline-none focus:ring-0 sm:text-sm"
                placeholder="Search leads, clients, or policies..."
                type="search"
                name="search"
              />
            </div>
          </form>
        </div>
        <div className="ml-4 flex items-center md:ml-6 space-x-4">
          <button
            type="button"
            className="rounded-full bg-white p-1 text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <span className="sr-only">View notifications</span>
            <Bell className="h-6 w-6" aria-hidden="true" />
          </button>
          
          <div className="relative ml-3">
            <div className="flex items-center space-x-3">
              <img
                className="h-8 w-8 rounded-full bg-slate-200 object-cover"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User avatar"
              />
              <span className="text-sm font-medium text-slate-700 hidden md:block">Agent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
