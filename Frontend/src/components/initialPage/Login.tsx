import { useState } from 'react';
import { loginRequest, createContaRequest } from '../../service/auth';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/useAuth';

interface LoginProps {
  onLogin: (name: string, email: string) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { checkAuth } = useAuth(); 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Preencha email e senha para continuar.");
      return;
    }
    if (!isLogin && !name) {
      setError("Preencha seu nome para criar a conta.");
      return;
    }

    setIsLoading(true);
    try {
      if (isLogin) {
        const userData = await loginRequest(email, password);
        onLogin(
          userData.user.name,
          userData.user.email
        );
        await checkAuth();
        navigate("/dashboard");
      } else {
        const userData = await createContaRequest(name, email, password);
        onLogin(
          userData.data.user.name,
          userData.data.user.email
        );
        await checkAuth();
        navigate("/dashboard");
      }
    } catch (error) {
      if (isLogin) {
        console.error(error);
        setError("Email ou senha incorretos.");
      } else {
        console.error(error);
        setError("Não foi possível criar a conta. Confira nome, email e senha.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0b0a] text-[#f2f4f2]">
      <div className="px-6 md:px-10 py-6 border-b border-[#1b1d1b]">
        <Link to="/" className="inline-flex items-center gap-2.5 font-bold text-lg text-[#f2f4f2]">
          <span className="w-8 h-8 rounded-full bg-[#22c37a] inline-flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
              <path d="M5 13l4 4L19 7" stroke="#050807" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          TaskFlow
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center px-5 py-10">
        <div className="w-full max-w-[400px] bg-[#101210] border border-[#1e211e] rounded-2xl p-8">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wide text-[#22c37a] bg-[#22c37a]/10 rounded-full px-3 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c37a]" />
            {isLogin ? "BEM-VINDO DE VOLTA" : "COMECE AGORA"}
          </span>

          {isLogin ? (
            <div className="text-center lg:text-left">
              <h2 className="mt-2 text-3xl font-bold leading-9 tracking-tight text-white">
                Bem-vindo de volta!
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#9a9e9a]">
                Entre com suas credenciais para acessar sua conta.
              </p>
            </div>
          ) : (
            <div className="text-center lg:text-left">
              <h2 className="mt-2 text-3xl font-bold leading-9 tracking-tight text-white">
                Crie sua conta
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#9a9e9a]">
                Cadastre-se agora para ter acesso completo à plataforma.
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 bg-[#0a0b0a] p-1 rounded-xl mb-6 mt-6 border border-[#1e211e]">
            <button
              type="button"
              onClick={() => { setIsLogin(true); setError(""); }}
              className={`py-2 text-sm font-medium rounded-lg transition-all ${isLogin
                ? 'bg-[#22c37a] hover:bg-[#29d987] text-[#06110b] font-semibold'
                : 'text-[#9a9e9a] hover:text-white'
                }`}
            >
              Entrar
            </button>
            <button
              type="button"
              onClick={() => { setIsLogin(false); setError(""); }}
              className={`py-2 text-sm font-medium rounded-lg transition-all ${!isLogin
                ? 'bg-[#22c37a] hover:bg-[#29d987] text-[#06110b] font-semibold'
                : 'text-[#9a9e9a] hover:text-white'
                }`}
            >
              Criar conta
            </button>
          </div>

          <form className="flex flex-col" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-white mb-1.5">
                  Nome
                </label>
                <input
                  id="firstname"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full bg-[#0a0b0a] border border-[#262a26] rounded-[10px] px-3.5 py-2.5 text-sm text-[#f2f4f2] placeholder:text-[#55584f] outline-none focus:border-[#22c37a] transition-colors"
                />
              </div>
            )}

            <label htmlFor="email" className="text-[13px] text-[#c9cdc9] mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="voce@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="w-full bg-[#0a0b0a] border border-[#262a26] rounded-[10px] px-3.5 py-2.5 text-sm text-[#f2f4f2] placeholder:text-[#55584f] outline-none focus:border-[#22c37a] transition-colors"
            />

            <div className="flex items-center justify-between mt-4.5 mb-1.5">
              <label htmlFor="password" className="text-[13px] text-[#c9cdc9]">
                Senha
              </label>
              {isLogin && (
                <Link to="/esqueci-senha" className="text-xs text-[#22c37a] hover:underline">
                  Esqueceu a senha?
                </Link>
              )}
            </div>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={isLogin ? "current-password" : "new-password"}
              className="w-full bg-[#0a0b0a] border border-[#262a26] rounded-[10px] px-3.5 py-2.5 text-sm text-[#f2f4f2] placeholder:text-[#55584f] outline-none focus:border-[#22c37a] transition-colors"
            />

            {error && <p className="text-[13px] text-[#f28b82] mt-3.5">{error}</p>}

            <button
              type="submit"
              disabled={isLoading}
              className="mt-6 bg-[#22c37a] hover:bg-[#29d987] disabled:opacity-60 disabled:cursor-not-allowed text-[#06110b] rounded-[10px] py-3 text-sm font-bold transition-colors"
            >
              {isLoading
                ? (isLogin ? "Entrando..." : "Criando conta...")
                : (isLogin ? "Entrar" : "Criar conta")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}