import { FormEvent, useState } from "react"

export default function Usuarios(){
    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    

    return(
    <div className="grid grid-cols-6">
        <div className="col-span-6 pb-3">Cadastro de Usuários</div>
        <div className="col-span-3 p-2">
            <label htmlFor="nome">Nome</label>
            <input 
                type="text" 
                id="nome"
                value={nome}
                onChange={(e)=>setNome(e.target.value)}
                className="mt-1 block w-full rounded-xl border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
        </div>
        <div className="col-span-3 p-2">
            <label htmlFor="email">E-mail</label>
            <input 
                type="text" 
                id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="mt-1 block w-full rounded-xl border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
        </div>
        <div className="col-span-3 p-2">
            <label htmlFor="password">Login</label>
            <input 
                type="login" 
                id="login"
                value={login}
                onChange={(e)=>setLogin(e.target.value)}
                className="mt-1 block w-full rounded-xl border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
        </div>
        <div className="col-span-3 p-2">
            <label htmlFor="password">Senha</label>
            <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="mt-1 block w-full rounded-xl border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
        </div>
        <div className="col-span-1 p-2">
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition"
            >
                Salvar
            </button>
        </div>
    </div>
    )
}