import { Bell, Plus } from 'lucide-react';

export default function TopNavbar() {
  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ];

  return (
    // Fundo da página inteira (mais escuro)
    <div className="min-h-screen bg-[#0f172a] font-sans">
      
      {/* Barra de Navegação (um tom de azul um pouco mais claro que o fundo) */}
      <nav className="bg-[#1e293b] border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            
            {/* Lado Esquerdo: Logo e Links */}
            <div className="flex items-center">
              
              {/* Logo */}
              <div className="shrink-0">
                <svg className="h-8 w-auto text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              
              {/* Links Principais */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        item.current
                          ? 'bg-slate-900 text-white'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Lado Direito: Botão, Sino de Notificação e Perfil */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6 gap-x-4">
                
                {/* Botão "New Job" (Ação Rápida) */}
                <button
                  type="button"
                  className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-colors"
                >
                  <Plus className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                  New Job
                </button>

                {/* Ícone de Notificação (Sino) */}
                <button
                  type="button"
                  className="relative rounded-full bg-[#1e293b] p-1 text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-800 transition-colors"
                >
                  <span className="sr-only">View notifications</span>
                  <Bell className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Avatar do Usuário */}
                <div className="relative ml-3">
                  <div>
                    <button className="relative flex max-w-xs items-center rounded-full bg-[#1e293b] text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Avatar do Usuário"
                      />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </nav>

      {/* Área de Conteúdo Principal */}
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Placeholder tracejado igual ao do print */}
          <div className="h-96 rounded-xl border-2 border-dashed border-slate-800 bg-slate-900/20"></div>
        </div>
      </main>
      
    </div>
  );
}

    
