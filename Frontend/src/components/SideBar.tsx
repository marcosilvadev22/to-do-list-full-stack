import { Home, Users, Folder, Calendar, FileText, PieChart } from 'lucide-react';

export default function Navbar() {
  const navigation = [
    { name: 'Dashboard', icon: Home, current: true },
    { name: 'Team', icon: Users, current: false },
    { name: 'Projects', icon: Folder, current: false },
    { name: 'Calendar', icon: Calendar, current: false },
    { name: 'Documents', icon: FileText, current: false },
    { name: 'Reports', icon: PieChart, current: false },
  ];

  const teams = [
    { id: 1, name: 'Heroicons', initial: 'H' },
    { id: 2, name: 'Tailwind Labs', initial: 'T' },
    { id: 3, name: 'Workcation', initial: 'W' },
  ];

  return (
    // Container principal: tela cheia, fundo escuro (slate)
    <div className="flex h-screen bg-[#0f172a] font-sans">
      
      {/* Sidebar */}
      <div className="flex w-64 flex-col overflow-y-auto border-r border-slate-800 bg-[#0f172a] px-6">
        
        {/* Logotipo */}
        <div className="flex h-16 shrink-0 items-center">
          {/* Substitua pelo SVG oficial do seu logotipo */}
          <svg className="h-8 w-auto text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>

        {/* Menu de Navegação */}
        <nav className="flex flex-1 flex-col pt-2">
          <ul className="flex flex-1 flex-col gap-y-7">
            
            {/* Links Principais */}
            <li>
              <ul className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href="#"
                      className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ${
                        item.current
                          ? 'bg-slate-800 text-white'
                          : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            {/* Seção "Your teams" */}
            <li>
              <div className="text-xs font-semibold leading-6 text-slate-400">Your teams</div>
              <ul className="-mx-2 mt-2 space-y-1">
                {teams.map((team) => (
                  <li key={team.name}>
                    <a
                      href="#"
                      className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-slate-400 hover:bg-slate-800 hover:text-white"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-[0.625rem] font-medium text-slate-400 group-hover:text-white group-hover:border-slate-600">
                        {team.initial}
                      </span>
                      <span className="truncate">{team.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            {/* Perfil do Usuário (Rodapé da Sidebar) */}
            <li className="-mx-6 mt-auto">
              <a
                href="#"
                className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-slate-800 transition-colors"
              >
                <img
                  className="h-8 w-8 rounded-full bg-slate-800"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Avatar do Tom Cook"
                />
                <span className="sr-only">Your profile</span>
                <span aria-hidden="true">Tom Cook</span>
              </a>
            </li>

          </ul>
        </nav>
      </div>

      {/* Área Principal de Conteúdo */}
      <main className="flex-1 p-8">
        {/* Placeholder com borda tracejada igual ao da imagem */}
        <div className="h-full rounded-xl border-2 border-dashed border-slate-800 bg-slate-900/20"></div>
      </main>
      
    </div>
  );
}