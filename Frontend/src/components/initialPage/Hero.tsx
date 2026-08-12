import { useState } from 'react';
import Login from './Login';
import Dashboard from '../dashbord/Dashbord';

export default function Hero() {
    const [showLogin, setshowLogin] = useState(false);
    if (showLogin) {
        return <Login onLogin={() => { <Dashboard /> }} />;
    }
    return (
        <section className="bg-zinc-950 text-zinc-100 min-h-[calc(100vh-80px)] px-6 py-12 md:px-16 flex items-center">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Lado Esquerdo: Conteúdo Principal */}
                <div className="flex flex-col items-start gap-6">
                    {/* Badge de destaque */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        ORGANIZE SEU RITMO
                    </div>

                    {/* Título Principal */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                        Organize suas tarefas. <br />
                        <span className="text-emerald-400">Simplifique</span> sua rotina.
                    </h1>

                    {/* Descrição */}
                    <p className="text-zinc-400 text-base sm:text-lg max-w-lg leading-relaxed">
                        O TaskFlow é uma plataforma criada para ajudar você a organizar suas tarefas, acompanhar suas atividades e manter sua rotina sob controle de forma simples e eficiente.
                    </p>

                    {/* Botões de Ação */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <button
                            onClick={() => {
                                setshowLogin(true);
                            }}
                            className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold px-6 py-3 rounded-full transition-colors flex items-center gap-2">
                            Começar agora ↗
                        </button>
                        <button className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-medium px-6 py-3 rounded-full transition-colors flex items-center gap-2">
                            ▶ Conhecer o projeto
                        </button>
                    </div>
                </div>

                <div className="relative flex justify-center">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl"></div>

                    {/* Card Mockup */}
                    <div className="relative bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-2xl w-full max-w-md">
                        <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
                            <span className="text-xs text-zinc-400">Terça-feira, 24 de outubro</span>
                            <span className="text-xs font-semibold text-emerald-400">Em dia</span>
                        </div>
                        <h3 className="text-lg font-bold text-zinc-100 mb-1">Bom dia, Breno ✨</h3>
                        <p className="text-sm text-zinc-400 mb-6">Você tem 12 tarefas hoje.</p>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                                <span className="text-xs text-zinc-500">Concluídas</span>
                                <p className="text-2xl font-bold text-emerald-400">08</p>
                            </div>
                            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                                <span className="text-xs text-zinc-500">Progresso</span>
                                <p className="text-2xl font-bold text-zinc-100">72%</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};
