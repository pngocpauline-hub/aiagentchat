import { Plus, Search, PanelLeft, Code2 } from "lucide-react"

const navItems = [
  { icon: Plus, label: "New" },
  { icon: Code2, label: "Projects" },
]

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col p-3">
      <div className="flex items-center justify-between mb-4 px-2">
        <span className="font-semibold text-lg text-sidebar-foreground">Claude</span>
        <div className="flex gap-2 text-sidebar-foreground/60">
          <PanelLeft size={18} />
          <Search size={18} />
        </div>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
          >
            <item.icon size={16} />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}