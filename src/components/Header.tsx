"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Busca from "../app/Busca";
import Breadcrumbs from "./Breadcrumbs";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Para evitar erro de hidratação (mismatch server/client)
  useEffect(() => setMounted(true), []);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  if (!mounted) return <header className="h-40 bg-white dark:bg-[#0a1931]" />;

  return (
    <>
      {/* 1. SEÇÃO DE LOGOS (HEADER SUPERIOR) */}
      <header className="w-full bg-transparent border-b border-gray-200 dark:border-gray-800 transition-colors duration-300 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 md:py-8 flex flex-row justify-between items-center w-full">

          {/* BOTÃO DE TEMA - No topo superior direito */}
          <div className="absolute top-2 right-4 z-[60]">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-1.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              title="Trocar Tema"
            >
              {theme === 'dark' ? "☀️" : "🌙"}
            </button>
          </div> 
          
          {/* LADO ESQUERDO: LOGO MTM + TEXTO */}
          <div className="flex items-center gap-3 md:gap-4">
            <img 
              src="/logo-mtm.png" 
              alt="Logo MTM" 
              className="h-10 md:h-20 w-auto object-contain dark:invert dark:brightness-150" 
            />
            <div className="text-[#0a1931] dark:text-white uppercase border-l border-gray-200 dark:border-gray-700 pl-3 md:pl-4">
              <h1 className="font-bold text-[10px] md:text-xl tracking-tighter leading-none">
                Departamento de<br className="md:hidden"/> Matemática
              </h1>
              <p className="text-[8px] md:text-xs text-gray-500 dark:text-gray-400 font-medium normal-case">
                Universidade Federal de Santa Catarina
              </p>
            </div>
          </div>

          {/* LADO DIREITO: BRASÃO UFSC */}
          <div className="flex items-center">
            <img 
              src="/logo-ufsc.png" 
              alt="Brasão UFSC" 
              className="h-14 md:h-32 w-auto object-contain dark:opacity-80" 
            />
          </div>
        </div>
      </header>

      {/* 2. BARRA DE NAVEGAÇÃO E MENUS */}
      <nav className="bg-[#eeeeee] dark:!bg-[#0f172a] border-y border-gray-200 dark:border-gray-800 px-6 md:px-12 py-2 w-full relative z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">  

          {/* BOTÃO HAMBÚRGUER (Celular) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#0a1931] dark:text-white font-bold text-xs uppercase flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded"
          >
            {isMenuOpen ? "✕ Fechar" : "☰ Menu"}
          </button>

          {/* MENU DESKTOP */}
          <ul className="hidden md:flex flex-wrap items-center space-x-1 text-[12px] font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300">
            <li>
              <a href="/">
                <button className="px-3 py-2 rounded-md hover:bg-white dark:hover:bg-gray-800 hover:text-[#0a1931] dark:hover:text-white transition-all italic">
                  Início
                </button>
              </a>
            </li>

            {/* Dropdown Graduação */}
            <li className="relative group">
              <button className="px-4 py-2 rounded-md group-hover:bg-white dark:group-hover:bg-gray-800 group-hover:text-[#0a1931] dark:group-hover:text-white flex items-center gap-1 transition-all">
                Graduação
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block w-72 bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 rounded-b-lg overflow-hidden py-2 z-[100]">
                <a href="/apresentacao" className="block px-6 py-3 text-[10px] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-50 dark:border-gray-700">APRESENTAÇÃO</a>
                <a href="/bacharelado" className="block px-6 py-3 text-[10px] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-50 dark:border-gray-700">BACHARELADO EM MATEMÁTICA</a>
                <a href="/licenciatura" className="block px-6 py-3 text-[10px] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-50 dark:border-gray-700">LICENCIATURA EM MATEMÁTICA</a>
                <a href="/calendario-academico" className="block px-6 py-3 text-[10px] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-50 dark:border-gray-700">CALENDÁRIO ACADÊMICO</a>
                <a href="https://mtm.grad.ufsc.br/trabalho-de-conclusao-de-curso/" target="_blank" className="block px-6 py-3 text-[10px] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 uppercase">TCC I e II</a>
              </div>
            </li>

            <li>
              <a href="https://ppgmtm.posgrad.ufsc.br/ingresso/" target="_blank">
                <button className="px-4 py-2 rounded-md hover:bg-white dark:hover:bg-gray-800 hover:text-[#0a1931] dark:hover:text-white transition-all">
                  Pós-graduação
                </button>
              </a>
            </li>

            {/* Dropdown Pesquisa */}
            <li className="relative group">
              <button className="px-4 py-2 rounded-md group-hover:bg-white dark:group-hover:bg-gray-800 group-hover:text-[#0a1931] dark:group-hover:text-white transition-all">
                Pesquisa
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 rounded-b-lg overflow-hidden py-2 z-[100]">
                <a href="/camara" className="block px-6 py-3 text-[10px] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-50 dark:border-gray-700 uppercase">Composição da Câmara</a>
                <a href="/pesquisa" className="block px-6 py-3 text-[10px] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 uppercase">Áreas de pesquisa</a>
              </div>
            </li>

            {/* Dropdown Extensão */}
            <li className="relative group">
              <button className="px-4 py-2 rounded-md group-hover:bg-white dark:group-hover:bg-gray-800 group-hover:text-[#0a1931] dark:group-hover:text-white transition-all">
                Extensão
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 rounded-b-lg overflow-hidden py-2 z-[100]">
                <a href="https://petmatematica.paginas.ufsc.br/" target="_blank" className="block px-6 py-3 text-[10px] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-50 dark:border-gray-700 uppercase">PET</a>
                <a href="https://lemat.sites.ufsc.br/" target="_blank" className="block px-6 py-3 text-[10px] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-50 dark:border-gray-700 uppercase">LEMAT</a>
                <a href="https://monitoriamtm.ufsc.br/" target="_blank" className="block px-6 py-3 text-[10px] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 uppercase">Monitorias</a>
                <a href="https://ufscience.ufsc.br/" target="_blank" className="block px-6 py-3 text-[10px] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 uppercase">UFScience</a>
              </div>
            </li>

            <li><a href="/eventos"><button className="px-4 py-2 rounded-md hover:bg-white dark:hover:bg-gray-800 hover:text-[#0a1931] dark:hover:text-white transition-all">Eventos</button></a></li>
            <li><a href="/bolsas-estagios"><button className="px-4 py-2 rounded-md hover:bg-white dark:hover:bg-gray-800 hover:text-[#0a1931] dark:hover:text-white transition-all">Bolsas</button></a></li>
            <li><a href="/recursos"><button className="px-4 py-2 rounded-md hover:bg-white dark:hover:bg-gray-800 hover:text-[#0a1931] dark:hover:text-white transition-all">Recursos</button></a></li>

            <li className="text-[#f0c419] self-center mx-1">•</li>

            <li>
              <a href="/faq">
                <button className="px-4 py-2 rounded-md hover:bg-white dark:hover:bg-gray-800 transition-all text-blue-700 dark:text-blue-400">
                  FAQ
                </button>
              </a>
            </li>
          </ul>

          {/* BUSCA */}
          <div className="flex items-center gap-4">
            <Busca />
          </div>
        </div>

        {/* 3. Menu mobile exibido no clique */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 pb-4 space-y-1 text-[12px] font-bold uppercase text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 pt-4">
            <li><a href="/" className="block p-3 hover:bg-white dark:hover:bg-gray-800 rounded">Início</a></li>
            
            {/* Mobile: Graduação */}
            <li>
              <button onClick={() => toggleSubmenu('grad')} className="w-full flex justify-between items-center p-3 hover:bg-white dark:hover:bg-gray-800 rounded">
                GRADUAÇÃO <span>{openSubmenu === 'grad' ? '−' : '+'}</span>
              </button>
              {openSubmenu === 'grad' && (
                <div className="bg-gray-100 dark:bg-[#1e293b] ml-4 rounded-lg overflow-hidden">
                  <a href="/apresentacao" className="block p-3 border-b dark:border-gray-700">Apresentação</a>
                  <a href="/bacharelado" className="block p-3 border-b dark:border-gray-700">Bacharelado</a>
                  <a href="/licenciatura" className="block p-3 border-b dark:border-gray-700">Licenciatura</a>
                  <a href="/calendario-academico" className="block p-3 border-b dark:border-gray-700">Calendário</a>
                  <a href="https://mtm.grad.ufsc.br/trabalho-de-conclusao-de-curso/" target="_blank" className="block p-3">TCC I e II</a>
                </div>
              )}
            </li>

            <li><a href="https://ppgmtm.posgrad.ufsc.br/ingresso/" target="_blank" className="block p-3 hover:bg-white dark:hover:bg-gray-800 rounded">Pós-graduação</a></li>

            {/* Mobile: Pesquisa */}
            <li>
              <button onClick={() => toggleSubmenu('pesquisa')} className="w-full flex justify-between items-center p-3 hover:bg-white dark:hover:bg-gray-800 rounded">
                PESQUISA <span>{openSubmenu === 'pesquisa' ? '−' : '+'}</span>
              </button>
              {openSubmenu === 'pesquisa' && (
                <div className="bg-gray-100 dark:bg-[#1e293b] ml-4 rounded-lg overflow-hidden">
                  <a href="/camara" className="block p-3 border-b dark:border-gray-700">Câmara de Pesquisa</a>
                  <a href="/pesquisa" className="block p-3">Áreas de Pesquisa</a>
                </div>
              )}
            </li>

            {/* Mobile: Extensão */}
            <li>
              <button onClick={() => toggleSubmenu('ext')} className="w-full flex justify-between items-center p-3 hover:bg-white dark:hover:bg-gray-800 rounded">
                EXTENSÃO <span>{openSubmenu === 'ext' ? '−' : '+'}</span>
              </button>
              {openSubmenu === 'ext' && (
                <div className="bg-gray-100 dark:bg-[#1e293b] ml-4 rounded-lg overflow-hidden">
                  <a href="https://petmatematica.paginas.ufsc.br/" target="_blank" className="block p-3 border-b dark:border-gray-700">PET</a>
                  <a href="https://lemat.sites.ufsc.br/" target="_blank" className="block p-3 border-b dark:border-gray-700">LEMAT</a>
                  <a href="https://monitoriamtm.ufsc.br/" target="_blank" className="block p-3">Monitorias</a>
                  <a href="https://ufscience.ufsc.br/" target="_blank" className="block p-3">UFScience</a>
                </div>
              )}
            </li>

            <li><a href="/eventos" className="block p-3 hover:bg-white dark:hover:bg-gray-800">Eventos</a></li>
            <li><a href="/bolsas-estagios" className="block p-3 hover:bg-white dark:hover:bg-gray-800">Bolsas</a></li>
            <li><a href="/recursos" className="block p-3 hover:bg-white dark:hover:bg-gray-800">Recursos</a></li>
            <li><a href="/faq" className="block p-3 text-blue-700 dark:text-blue-400 font-bold underline italic">FAQ</a></li>
          </ul>
        )}
      </nav>
      <Breadcrumbs />
    </>
  );
}