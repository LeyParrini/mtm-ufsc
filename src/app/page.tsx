"use client";
import { useState, useEffect } from "react";
import React from 'react';

export default function Home() {
  const noticias = [
    {
      id: 1,
      titulo: "FERMAT 2026",
      resumo: "​Está chegando a 16ª edição da Feira Redescobrindo a Matemática e, este ano, vamos viajar muito além do infinito! Sob o tema \"Espaço\", convidamos toda a comunidade para um dia de descobertas, desafios e muita ciência.",
      imagem: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1000",
      link: "https://petmatematica.paginas.ufsc.br/fermat/"
    },
    {
      id: 2,
      titulo: "Inscrições Abertas: Mestrado",
      resumo: "O PPGMTM abre editais para as novas turmas de pós-graduação. Saiba mais sobre os prazos.",
      imagem: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000",
      link: "https://ppgmtm.posgrad.ufsc.br/"
    },
    {
      id: 3,
      titulo: "Bolsa de Iniciação Científica disponível",
      resumo: " Trata-se de uma oportunidade para trabalhar no projeto para o desenvolvimento de um tomógrafo de laboratório, com ênfase em reconstrução de imagens e processamento de sinais. O projeto é interdisciplinar, envolvendo conhecimentos de matemática, programação e física.",
      imagem: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000",
      link: "https://fabiomargotti.paginas.ufsc.br/prototipo/"
    }
  ];

  const [indexAtual, setIndexAtual] = useState(0);

  // Passar sozinho a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setIndexAtual((prev) => (prev === noticias.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [noticias.length]);

  return (
    <main className="min-h-screen bg-white">
      
      {/* SEÇÃO DO CARROSSEL DE NOTÍCIAS */}
      <section className="relative w-full h-[500px] overflow-hidden bg-gray-900">
        {noticias.map((item, idx) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === indexAtual ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Imagem de Fundo com Overlay Escuro */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.imagem})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1931] via-[#0a1931]/60 to-transparent" />
            </div>

            {/* Conteúdo da Notícia */}
            <div className="relative max-w-6xl mx-auto h-full flex flex-col justify-center px-8 text-white">
              <span className="bg-[#f0c419] text-[#0a1931] text-[10px] font-black uppercase px-2 py-1 w-fit mb-4">
                Destaque MTM
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter max-w-2xl leading-[0.9]">
                {item.titulo}
              </h2>
              <p className="mt-6 text-lg text-blue-100 max-w-xl font-light">
                {item.resumo}
              </p>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase text-xs tracking-widest px-8 py-4 w-fit transition-all hover:scale-105 active:scale-95 inline-block"
              >
                Ler Matéria Completa
              </a>
            </div>
          </div>
        ))}

        {/* Indicadores (Pontinhos embaixo) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {noticias.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndexAtual(idx)}
              className={`h-1 transition-all duration-300 ${
                idx === indexAtual ? "w-12 bg-[#f0c419]" : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Botões Lateral (Opcional) */}
        <button 
            onClick={() => setIndexAtual(indexAtual === 0 ? noticias.length - 1 : indexAtual - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-2xl px-4"
        > ❮ </button>
        <button 
            onClick={() => setIndexAtual(indexAtual === noticias.length - 1 ? 0 : indexAtual + 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-2xl px-4"
    > ❯ </button>
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