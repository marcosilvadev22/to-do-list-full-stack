import { useState } from "react";
import { Flame, Trophy, Star, CheckCircle2, Circle, Award, Target, TrendingUp } from "lucide-react";
import { Sidebar } from "./SideBar";
import { Navbar } from "./Navbar";
import { useAuth } from "../../contexts/useAuth";

const ACCENT = "#2EE6A6";

const initialMissions = [
  { id: 1, title: "Revisar proposta do cliente", xp: 20, priority: "alta", done: true },
  { id: 2, title: "Atualizar documentação da API", xp: 15, priority: "media", done: true },
  { id: 3, title: "Corrigir bug no formulário de login", xp: 25, priority: "alta", done: false },
  { id: 4, title: "Responder e-mails pendentes", xp: 10, priority: "baixa", done: false },
  { id: 5, title: "Planejar sprint da próxima semana", xp: 30, priority: "media", done: false },
];

const achievements = [
  { id: 1, name: "Primeiro Passo", desc: "Complete sua 1ª missão", unlocked: true, icon: Star },
  { id: 2, name: "Sequência de Fogo", desc: "7 dias seguidos ativo", unlocked: true, icon: Flame },
  { id: 3, name: "Produtivo", desc: "Complete 50 missões", unlocked: true, icon: Target },
  { id: 4, name: "Mestre das Tarefas", desc: "Complete 200 missões", unlocked: false, icon: Trophy },
  { id: 5, name: "Sem Erros", desc: "Uma semana sem atrasos", unlocked: false, icon: Award },
  { id: 6, name: "Ascensão", desc: "Alcance o nível 20", unlocked: false, icon: TrendingUp },
];

const priorityStyle = {
  alta: { label: "Alta", color: "#F0764A" },
  media: { label: "Média", color: "#E8B34C" },
  baixa: { label: "Baixa", color: ACCENT },
};

export default function Dashboard() {
  const { user } = useAuth();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [missions, setMissions] = useState(initialMissions);
  const [level] = useState(12);
  const baseXp = 240;
  const xpToNext = 400;

  const earnedXp = missions.filter((m) => m.done).reduce((s, m) => s + m.xp, 0);
  const currentXp = baseXp + earnedXp;
  const xpPercent = Math.min(100, Math.round((currentXp / xpToNext) * 100));
  const completedCount = missions.filter((m) => m.done).length;

  function toggleMission(id: number) {
    setMissions((prev) => prev.map((m) => (m.id === id ? { ...m, done: !m.done } : m)));
  }

  return (
    <div className="min-h-screen w-full bg-black text-white flex" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 min-w-0">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="max-w-4xl mx-auto px-5 sm:px-8 py-8 sm:py-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider mb-6"
            style={{ background: "rgba(46,230,166,0.08)", color: ACCENT }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
            NÍVEL {level} · {currentXp} XP
          </div>

          <h1 className="font-extrabold text-3xl sm:text-4xl tracking-tight leading-[1.1] mb-3">
            Bom dia, <span style={{ color: ACCENT }}>{user?.name ?? "Rielisson"}</span> ✨
          </h1>
          <p className="text-white/50 text-base mb-10">
            Você tem {missions.length} missões hoje. {completedCount} já concluídas.
          </p>

          <div className="rounded-2xl p-6 sm:p-7 mb-10" style={{ background: "#0E0F0E", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-xs text-white/40 mb-1">Progresso para o próximo nível</p>
                <p className="font-bold text-lg">Nível {level} → {level + 1}</p>
              </div>
              <span className="text-2xl font-extrabold" style={{ color: ACCENT }}>{xpPercent}%</span>
            </div>
            <div className="h-2 rounded-full overflow-hidden bg-white/5">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{ width: `${xpPercent}%`, background: ACCENT }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-white/40 font-medium">
              <span>{currentXp} XP</span>
              <span>{xpToNext} XP</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12">
            <StatCard label="Concluídas" value={completedCount} accent />
            <StatCard label="Pendentes" value={missions.length - completedCount} />
            <StatCard label="Sequência" value="12 dias" />
            <StatCard label="XP total" value={currentXp} />
          </div>

          <section className="mb-10">
            <h2 className="font-bold text-xl mb-4">Missões de hoje</h2>
            <div className="rounded-2xl overflow-hidden" style={{ background: "#0E0F0E", border: "1px solid rgba(255,255,255,0.08)" }}>
              {missions.map((m, i) => {
                const p = priorityStyle[m.priority as keyof typeof priorityStyle];
                return (
                  <button
                    key={m.id}
                    onClick={() => toggleMission(m.id)}
                    className="w-full flex items-center gap-3 px-4 sm:px-5 py-4 text-left transition-colors hover:bg-white/[0.02]"
                    style={{ borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)" }}
                  >
                    {m.done ? (
                      <CheckCircle2 size={20} style={{ color: ACCENT }} className="shrink-0" />
                    ) : (
                      <Circle size={20} className="shrink-0 text-white/20" />
                    )}
                    <span className={`flex-1 text-sm ${m.done ? "line-through text-white/30" : "text-white/90"}`}>
                      {m.title}
                    </span>
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full hidden sm:inline-block"
                      style={{ color: p.color, background: `${p.color}1A` }}
                    >
                      {p.label}
                    </span>
                    <span className="text-xs font-bold shrink-0 text-white/40">+{m.xp} XP</span>
                  </button>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="font-bold text-xl mb-4">Conquistas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {achievements.map((a) => {
                const Icon = a.icon;
                return (
                  <div
                    key={a.id}
                    className="rounded-2xl p-4 flex flex-col gap-2"
                    style={{ background: "#0E0F0E", border: "1px solid rgba(255,255,255,0.08)", opacity: a.unlocked ? 1 : 0.4 }}
                  >
                    <Icon size={18} style={{ color: a.unlocked ? ACCENT : "#666" }} />
                    <div>
                      <p className="text-xs font-bold text-white/90">{a.name}</p>
                      <p className="text-[10px] text-white/40 mt-0.5">{a.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function StatCard({ label, value, accent }: { label: string; value: string | number; accent?: boolean }) {
  return (
    <div className="rounded-2xl p-4 sm:p-5" style={{ background: "#0E0F0E", border: "1px solid rgba(255,255,255,0.08)" }}>
      <p className="text-xs text-white/40 mb-2">{label}</p>
      <p className="text-xl sm:text-2xl font-extrabold" style={{ color: accent ? ACCENT : "#fff" }}>{value}</p>
    </div>
  );
}