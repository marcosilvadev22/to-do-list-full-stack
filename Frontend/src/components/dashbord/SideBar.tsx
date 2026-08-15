import { Home, ListChecks, Trophy, Settings, LogOut, Check, X } from "lucide-react";
import { useAuth } from "../../contexts/useAuth";

const ACCENT = "#2EE6A6";

const navItems = [
  { label: "Início", icon: Home, active: true },
  { label: "Missões", icon: ListChecks, active: false },
  { label: "Conquistas", icon: Trophy, active: false },
  { label: "Configurações", icon: Settings, active: false },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const { user } = useAuth();

  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-50
          flex flex-col w-64 lg:w-60 shrink-0 h-screen
          border-r border-white/5 bg-black px-4 py-6
          transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="flex items-center justify-between px-2 mb-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: ACCENT }}>
              <Check size={16} strokeWidth={3} color="#000" />
            </div>
            <span className="font-extrabold text-lg tracking-tight">TaskFlow</span>
          </div>
          <button onClick={onClose} className="lg:hidden text-white/40 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors text-left"
                style={{
                  background: item.active ? "rgba(46,230,166,0.08)" : "transparent",
                  color: item.active ? ACCENT : "rgba(255,255,255,0.6)",
                }}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 px-2 pt-4 border-t border-white/5">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs border-2 shrink-0"
            style={{ borderColor: ACCENT, color: ACCENT }}
          >
            {user?.name?.slice(0, 2).toUpperCase() ?? "RB"}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold truncate">{user?.name ?? "Usuário"}</p>
            <p className="text-[10px] text-white/40 truncate">{user?.email}</p>
          </div>
          <button className="text-white/40 hover:text-white transition-colors">
            <LogOut size={16} />
          </button>
        </div>
      </aside>
    </>
  );
}