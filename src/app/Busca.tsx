"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Busca() {
  const [termo, setTermo] = useState("");
  const router = useRouter();

  const aoBuscar = (e: React.FormEvent) => {
    e.preventDefault();
    const buscaLimpa = termo.trim();
    
    if (!buscaLimpa) return;

    // Manda para a página de resultados
    router.push(`/resultados?q=${encodeURIComponent(buscaLimpa)}`);
  };

  return (
    <form onSubmit={aoBuscar} className="relative flex items-center">
      <input 
        type="text" 
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        className="border rounded-full bg-white pl-4 pr-16 py-1 text-xs w-48 outline-none focus:ring-1 focus:ring-blue-200 text-black" 
        placeholder="O que você procura?" 
      />
      <button 
        type="submit"
        className="absolute right-2 text-blue-500 text-xs font-bold hover:text-blue-700 transition-colors"
      >
        🔎
      </button>
    </form>
  );
}