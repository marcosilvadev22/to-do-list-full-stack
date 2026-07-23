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
    <header className="glass border-b border-slate-800 sticky top-0 z-30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-500 flex items-center justify-center shadow-md shadow-cyan-500/20">
            <Swords className="w-5 h-5 text-slate-950" strokeWidth={2.5} />
          </div>
          <span className="font-extrabold text-lg text-gradient hidden sm:block">QuestList</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-semibold text-cyan-400">Nível {level}</span>
            <span className="text-slate-400 tabular-nums">
              {xpCurrent} / {xpNeeded} XP
            </span>
          </div>
          <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-500"
              style={{ width: `${pctProgress}%` }}
            />
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-bold tabular-nums">{totalXp}</span>
            <span className="text-xs text-slate-500">XP</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
            <span className="text-sm font-bold tabular-nums">{missionsCompleted}</span>
            <span className="text-xs text-slate-500 ml-1">missões</span>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-slate-400 hidden md:block max-w-[140px] truncate">
            {userEmail}
          </span>
          <button
            title="Sair"
            className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-rose-400 hover:border-rose-500/40 transition"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}