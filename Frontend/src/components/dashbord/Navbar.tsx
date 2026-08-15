import { Bell, Search, Menu } from "lucide-react";

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-black/90 backdrop-blur-md">
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <button
            onClick={onMenuClick}
            className="lg:hidden w-9 h-9 shrink-0 rounded-full flex items-center justify-center border border-white/10 text-white/70 hover:text-white transition-colors"
          >
            <Menu size={18} />
          </button>

          <div className="relative flex-1 max-w-xs hidden sm:block">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              placeholder="Buscar missão..."
              className="w-full bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-2 text-sm placeholder:text-white/30 focus:outline-none focus:border-[#2EE6A6]/40"
            />
          </div>
        </div>

        <button className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-white/60 hover:text-white transition-colors shrink-0">
          <Bell size={16} />
        </button>
      </div>
    </header>
  );
}