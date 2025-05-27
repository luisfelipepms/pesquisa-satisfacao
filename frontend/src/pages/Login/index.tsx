import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

interface UserLogin{
  access_token:string
}

export default function Login(){
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
  
    const handleLogin = async (e: FormEvent) => {
      setLoading(true);
      e.preventDefault();

      try{
        const resposta = await api.post<UserLogin>('/auth/login', {
          email,
          password
        });

        localStorage.setItem('access_token', resposta.data.access_token);

        if(resposta.status == 201)
          navigate('/home');

      }catch(err){
        alert("Erro ao logar!")
        console.error('Erro no login:', err);
      }finally{
        setLoading(false);
      }


      // if(resposta.data.access_token){
      //   navigate('/admin');
      // }else{
      //   setLoading(false);
      // }
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Pesquisa de Satisfação</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-xl border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-xl border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition"
            >
              {loading?"Carregando":"Entrar"}
            </button>
          </form>
        </div>
      </div>
    );
}