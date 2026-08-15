import { LogOut, Swords, Zap } from 'lucide-react';

export default function Navbar() {
  // Dados estáticos apenas para visualização do estilo
  const level = 0;
  const xpCurrent = 0;
  const xpNeeded = 0;
  const pctProgress = 75; // 75%
  const totalXp = 0;
  const missionsCompleted = 0;
  const userEmail = "dev.exemplo@email.com";

  return (
    <header className="bg-[#0a0b0a]/95 backdrop-blur border-b border-[#1b1d1b] sticky top-0 z-30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-full bg-[#22c37a] flex items-center justify-center">
            <Swords className="w-5 h-5 text-[#050807]" strokeWidth={2.5} />
          </div>
          <span className="font-extrabold text-lg text-[#f2f4f2] hidden sm:block">TaskFlow</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-semibold text-[#22c37a]">Nível {level}</span>
            <span className="text-[#9a9e9a] tabular-nums">
              {xpCurrent} / {xpNeeded} XP
            </span>
          </div>
          <div className="h-2 rounded-full bg-[#1e211e] overflow-hidden">
            <div
              className="h-full rounded-full bg-[#22c37a] transition-all duration-500"
              style={{ width: `${pctProgress}%` }}
            />
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#101210] border border-[#1e211e]">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-bold tabular-nums text-[#f2f4f2]">{totalXp}</span>
            <span className="text-xs text-[#9a9e9a]">XP</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-[#101210] border border-[#1e211e]">
            <span className="text-sm font-bold tabular-nums text-[#f2f4f2]">{missionsCompleted}</span>
            <span className="text-xs text-[#9a9e9a] ml-1">missões</span>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-[#9a9e9a] hidden md:block max-w-[140px] truncate">
            {userEmail}
          </span>
          <button
            title="Sair"
            className="p-2 rounded-lg bg-[#101210] border border-[#1e211e] text-[#9a9e9a] hover:text-rose-400 hover:border-rose-500/40 transition"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}