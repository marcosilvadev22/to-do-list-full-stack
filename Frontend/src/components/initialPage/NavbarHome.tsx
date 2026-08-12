const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Navbar() {
  return (
    <nav className="bg-zinc-950 px-8 py-4 flex items-center justify-between font-sans border-b border-zinc-800">
      <div className="flex items-center gap-3">
        <div className="bg-emerald-500 rounded-full p-2.5 flex items-center justify-center">
          <CheckIcon />
        </div>
        <span className="text-zinc-100 text-2xl font-bold">TaskFlow</span>
      </div>
      <div className="hidden md:flex items-center gap-10">
        <a href="#inicio" className="text-zinc-400 font-medium hover:text-zinc-100 transition-colors">Início</a>
        <a href="#sobre" className="text-zinc-400 font-medium hover:text-zinc-100 transition-colors">Sobre</a>
        <a href="#recursos" className="text-zinc-400 font-medium hover:text-zinc-100 transition-colors">Recursos</a>
      </div>
      <div>
        <button className="bg-emerald-500 text-zinc-950 font-semibold rounded-full px-8 py-2.5 hover:bg-emerald-400 transition-colors">
          Entrar
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button className="text-zinc-100 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}