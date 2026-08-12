import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { loginRequest, createContaRequest } from '../../service/auth';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onLogin: (name: string, email: string) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (isLogin) {
        const userData = await loginRequest(email, password);
        onLogin(
          userData.user.name, 
          userData.user.email
        );
        navigate("/dashboard");
      } else {
        const userData = await createContaRequest(name, email, password);
        onLogin(
          userData.data.user.name, 
          userData.data.user.email
        );
        navigate("/dashboard");
      }
    } catch (error) {
      if (isLogin) {
        console.error(error);
        alert("Email ou senha incorretos.");
      } else {
        console.error(error);
        alert("nome, Email ou senha incorretos.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    // Container principal: tela cheia, dividido em duas colunas no desktop
    <div className="flex min-h-screen bg-[#0f172a] font-sans">

      {/* Lado Esquerdo: Formulário de Registro */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-full lg:w-1/2">
        <div className="mx-auto w-full max-w-sm lg:w-96">

          {!isLogin ? (
            <div className="text-center lg:text-left">
              <svg className="mx-auto lg:mx-0 h-10 w-auto text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <h2 className="mt-8 text-3xl font-bold leading-9 tracking-tight text-white">
                Crie sua conta
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Cadastre-se agora para ter acesso completo á plataforma.
              </p>
            </div>
          ) : (
            <div className="text-center lg:text-left">
              <svg className="mx-auto lg:mx-0 h-10 w-auto text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <h2 className="mt-8 text-3xl font-bold leading-9 tracking-tight text-white">
                Bem-vindo de volta!
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Entre com suas credenciais para sua conta.
              </p>
            </div>
          )}


          <div className="mt-10">
            <div className="grid grid-cols-2 bg-slate-950/80 p-1 rounded-xl mb-6 border border-slate-800/80">
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={`py-2 text-sm font-medium rounded-lg transition-all ${isLogin
                  ? 'bg-cyan-500 to-teal-400 text-slate-950 font-semibold shadow'
                  : 'text-slate-400 hover:text-white'
                  }`}
              >
                Entrar
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={`py-2 text-sm font-medium rounded-lg transition-all ${!isLogin
                  ? 'bg-cyan-500 to-teal-400 text-slate-950 font-semibold shadow'
                  : 'text-slate-400 hover:text-white'
                  }`}
              >
                Criar conta
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-white">
                      Nome
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome"
                        required
                        className="block w-full rounded-md border-0 bg-white/5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6 placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                </div>
              )}


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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  disabled={isLoading}
                  className="flex w-full justify-center rounded-md bg-cyan-500 px-3 py-2 text-sm font-semibold leading-6 text-[#0f172a] shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 transition-all active:scale-[0.98]"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <span>{isLogin ? 'Começar minha jornada' : 'Entrar na conta'}</span>
                  )}
                </button>
              </div>
            </form>
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