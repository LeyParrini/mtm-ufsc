import React from 'react';

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* 3. Banner de Notícias */}
      <section className="bg-[#0a1931] h-[300px] relative flex items-center justify-center text-white overflow-hidden">
        {/* Imagem de fundo opaca (marca d'água) */}
        <img src="/logo-ufsc-branco.png" className="absolute opacity-10 h-64 w-auto" />
        <div className="text-center z-10">
          <h2 className="text-5xl font-light tracking-[0.4em] uppercase">Notícias</h2>
          <div className="h-1 w-24 bg-[#f0c419] mx-auto mt-4"></div>
        </div>
      </section>

    {/* 4. Botões Arredondados azuis */}
    <section className="max-w-5xl mx-auto py-12 px-8 space-y-3 w-full">
      {[
        { nome: 'Administração', rota: '/administracao' },
        { nome: 'Corpo Docente', rota: '/corpodocente' },
        { nome: 'Campus', rota: '/campus' }
      ].map((item) => (
        <a key={item.nome} href={item.rota} className="block">
          <div className="group bg-[#0a1931] text-white rounded-full py-4 px-10 flex justify-between items-center shadow-lg hover:bg-[#152b50] cursor-pointer transition-all active:scale-[0.98]">
            <span className="font-bold tracking-widest uppercase text-xs">{item.nome}</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">+</span>
          </div>
        </a>
      ))}
    </section>
  </main>
);
}