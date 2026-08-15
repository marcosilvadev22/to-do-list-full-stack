import { useState } from 'react';
import { Trophy, Lock, CheckCircle2, Plus } from 'lucide-react';
import Navbar from './Navbar';

// Dados fictícios de conquistas
const INITIAL_ACHIEVEMENTS = [
  {
    id: 1,
    title: "Primeiro Passo",
    description: "Conclua sua primeira missão",
    progress: 0,
    total: 1,
    achieved: false,
  },
  {
    id: 2,
    title: "Mestre da Produtividade",
    description: "Conclua 5 missões",
    progress: 0,
    total: 5,
    achieved: false,
  },
  {
    id: 3,
    title: "Caçador de XP",
    description: "Acumule 500 XP no total",
    progress: 0,
    total: 500,
    achieved: false,
  },
  {
    id: 4,
    title: "Lenda do QuestList",
    description: "Alcance o Nível 10",
    progress: 0,
    total: 10,
    achieved: false,
  },
];

export default function Dashboard() {
  // const [missions, setMissions] = useState([]);
  // const [achievements, setAchievements] = useState(INITIAL_ACHIEVEMENTS);

  // Dados do jogador
  const level = 1;
  const xpCurrent = 0;
  const xpNeeded = 100;
  const totalXp = 0;
  const missionsCompleted = 0;
  const userEmail = "dev.exemplo@email.com";

  const completedAchievementsCount = achievements.filter(a => a.achieved).length;

  return (
    <div className="min-h-screen bg-[#0a0b0a] text-[#f2f4f2] font-sans">

      <Navbar
        level={level}
        xpCurrent={xpCurrent}
        xpNeeded={xpNeeded}
        totalXp={totalXp}
        missionsCompleted={missionsCompleted}
        userEmail={userEmail}
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* COLUNA DA ESQUERDA: MISSÕES */}
        <section className="lg:col-span-2 flex flex-col gap-6">

          <button className="w-full p-4 rounded-xl border border-dashed border-[#262a26] hover:border-[#22c37a]/50 hover:bg-[#101210] flex items-center justify-center gap-2 text-[#9a9e9a] hover:text-[#22c37a] transition group">
            <Plus className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-sm">Nova missão</span>
          </button>

          {missions.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 px-4 rounded-2xl bg-[#101210]/60 border border-[#1e211e] text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#101210] border border-[#1e211e] flex items-center justify-center mb-3 text-[#55584f]">
                ⚔️
              </div>
              <p className="font-semibold text-[#f2f4f2] mb-1">Nenhuma missão ainda.</p>
              <p className="text-xs text-[#9a9e9a] max-w-xs">
                Crie sua primeira missão acima e comece a acumular XP para subir de nível!
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {/* Lista de missões entra aqui */}
            </div>
          )}

        </section>

        {/* COLUNA DA DIREITA: PAINEL DE CONQUISTAS */}
        <aside className="lg:col-span-1">
          <div className="p-5 rounded-2xl bg-[#101210] border border-[#1e211e]">

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                <h2 className="font-bold text-[#f2f4f2] text-sm">Conquistas</h2>
              </div>
              <span className="text-xs text-[#9a9e9a] font-medium tabular-nums">
                {completedAchievementsCount} / {achievements.length}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {achievements.map((item) => (
                <div
                  key={item.id}
                  className={`p-3 rounded-xl border transition-all flex flex-col justify-between gap-2 ${
                    item.achieved
                      ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                      : 'bg-[#0a0b0a] border-[#1e211e] text-[#9a9e9a]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                        item.achieved ? 'bg-amber-500/20 text-amber-400' : 'bg-[#1e211e] text-[#55584f]'
                      }`}
                    >
                      {item.achieved ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        <Lock className="w-4 h-4" />
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-[#f2f4f2] truncate mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-[10px] text-[#9a9e9a] line-clamp-2 leading-tight">
                      {item.description}
                    </p>
                  </div>

                  <div className="text-[10px] text-[#9a9e9a] font-medium tabular-nums pt-1 border-t border-[#1e211e]">
                    {item.progress} / {item.total}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </aside>

      </main>

    </div>
  );
}