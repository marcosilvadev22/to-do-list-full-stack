import { User, Mail, Lock } from 'lucide-react';

export default function RegisterPage() {
  return (
    // Container principal: tela cheia, dividido em duas colunas no desktop
    <div className="flex min-h-screen bg-[#0f172a] font-sans">
      
      {/* Lado Esquerdo: Formulário de Registro */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-full lg:w-1/2">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          
          {/* Cabeçalho */}
          <div className="text-center lg:text-left">
            <svg className="mx-auto lg:mx-0 h-10 w-auto text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <h2 className="mt-8 text-3xl font-bold leading-9 tracking-tight text-white">
              Create an account
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Signup now and get full access to our app.
            </p>
          </div>

          {/* Formulário */}
          <div className="mt-10">
            <form action="#" method="POST" className="space-y-5">
              
              {/* Linha Dupla: Firstname e Lastname */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-white">
                    Firstname
                  </label>
                  <div className="mt-2">
                    <input
                      id="firstname"
                      name="firstname"
                      type="text"
                      placeholder="John"
                      required
                      className="block w-full rounded-md border-0 bg-white/5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6 placeholder:text-slate-600"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-white">
                    Lastname
                  </label>
                  <div className="mt-2">
                    <input
                      id="lastname"
                      name="lastname"
                      type="text"
                      placeholder="Doe"
                      required
                      className="block w-full rounded-md border-0 bg-white/5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6 placeholder:text-slate-600"
                    />
                  </div>
                </div>
              </div>

              {/* Input: Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    required
                    className="block w-full rounded-md border-0 bg-white/5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6 placeholder:text-slate-600"
                  />
                </div>
              </div>

              {/* Input: Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    className="block w-full rounded-md border-0 bg-white/5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6 placeholder:text-slate-600"
                  />
                </div>
              </div>

              {/* Input: Confirm Password */}
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-white">
                  Confirm password
                </label>
                <div className="mt-2">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    required
                    className="block w-full rounded-md border-0 bg-white/5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6 placeholder:text-slate-600"
                  />
                </div>
              </div>

              {/* Botão Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-cyan-500 px-3 py-2 text-sm font-semibold leading-6 text-[#0f172a] shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 transition-all active:scale-[0.98]"
                >
                  Submit
                </button>
              </div>
            </form>

            {/* Link inferior (Estilo da Imagem) */}
            <p className="mt-8 text-center text-sm text-slate-400">
              Already have an account?{' '}
              <a href="#" className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                Signin
              </a>
            </p>
          </div>

        </div>
      </div>

      {/* Lado Direito: Imagem (Estilo Split-screen) */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Tech background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60"></div>
      </div>

    </div>
  );
}