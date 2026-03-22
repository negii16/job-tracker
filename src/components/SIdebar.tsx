import {
  LayoutDashboard,
  Briefcase,
  CalendarCheck,
  BarChart3,
  X,
} from "lucide-react";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
};

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Applications", icon: Briefcase },
  { name: "Interviews", icon: CalendarCheck },
  { name: "Analytics", icon: BarChart3 },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  return (
    <aside
      className={`fixed top-0 left-0 h-screen w-64 bg-slate-900 text-white flex flex-col p-4 transform transition-transform duration-300
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Close Button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-semibold tracking-tight">  JobTracker</h1>

        <button onClick={() => setSidebarOpen(false)}>
          <X size={22} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-all duration-200 text-slate-300 hover:text-white"
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto text-xs text-slate-400">
        © 2026 JobTracker
      </div>
    </aside>
  );
}