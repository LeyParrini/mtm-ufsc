"use client"; 

import { useState } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Busca from "./Busca";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const toggleSubmenu = (name: string) => {
  setOpenSubmenu(openSubmenu === name ? null : name);
};
  return (
    <html lang="pt-br">
      <body className="min-h-screen bg-white flex flex-col font-sans antialiased">
        
        {/* HEADER - Ajuste de Alinhamento */}
<header className="w-full bg-white">
  {/* O segredo está nesta div abaixo: max-w limita o PC, mx-auto centraliza */}
  <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 md:py-8 flex flex-row justify-between items-center w-full">
    
    {/* LADO ESQUERDO: LOGO MTM + TEXTO */}
    <div className="flex items-center gap-3 md:gap-4">
      {/* Teste h-12 para mobile e h-20 para PC */}
      <img 
        src="/logo-mtm.png" 
        alt="Logo MTM" 
        className="h-10 md:h-20 w-auto object-contain" 
      />
      <div className="text-[#0a1931] uppercase border-l border-gray-200 pl-3 md:pl-4">
        <h1 className="font-bold text-[10px] md:text-xl tracking-tighter leading-none">
          Departamento de<br className="md:hidden"/> Matemática
        </h1>
        <p className="text-[8px] md:text-xs text-gray-500 font-medium normal-case">
          UFSC
        </p>
      </div>
    </div>

    {/* LADO DIREITO: BRASÃO UFSC */}
    <div className="flex items-center">
      {/* h-14 para mobile e h-32 para PC - Ajuste conforme seu gosto */}
      <img 
        src="/logo-ufsc.png" 
        alt="Brasão UFSC" 
        className="h-14 md:h-32 w-auto object-contain" 
      />
    </div>

  </div>
</header>

        {/* 2. NAVEGAÇÃO RESPONSIVA */}
        <nav className="bg-[#eeeeee] border-y border-gray-200 px-6 md:px-12 py-2 w-full relative z-50">
          <div className="flex justify-between items-center">
            
            {/* BOTÃO HAMBÚRGUER (Aparece só no Celular) */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#0a1931] font-bold text-xs uppercase flex items-center gap-2 border border-gray-300 rounded"
            >
              {isMenuOpen ? "✕ Fechar" : "☰ Menu"}
            </button>

            {/* MENU DESKTOP (Escondido no Celular) */}
            <ul className="hidden md:flex flex-wrap items-center space-x-1 text-[12px] font-bold uppercase tracking-widest text-gray-600">
              <li><a href="/"><button className="px-3 py-2 rounded-md hover:bg-white hover:text-[#0a1931] transition-all italic">Início</button></a></li>
              
              <li className="relative group">
                <button className="px-4 py-2 rounded-md group-hover:bg-white group-hover:text-[#0a1931] flex items-center gap-1 transition-all">Graduação</button>
                <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-white shadow-xl border border-gray-100 rounded-b-lg overflow-hidden py-2 z-[100]">
                  <a href="/apresentacao" className="block px-6 py-3 text-[10px] hover:bg-gray-50 transition-colors border-b border-gray-50">APRESENTAÇÃO</a>
                  <a href="/bacharelado" className="block px-6 py-3 text-[10px] hover:bg-gray-50 transition-colors border-b border-gray-50">BACHARELADO EM MATEMÁTICA</a>
                  <a href="/licenciatura" className="block px-6 py-3 text-[10px] hover:bg-gray-50 transition-colors border-b border-gray-50">LICENCIATURA EM MATEMÁTICA</a>
                  <a href="/calendario-academico" className="block px-6 py-3 text-[10px] hover:bg-gray-50 transition-colors border-b border-gray-50">CALENDÁRIO ACADÊMICO</a>
                  <a href="https://mtm.grad.ufsc.br/trabalho-de-conclusao-de-curso/" target="_blank" className="block px-6 py-3 text-[10px] hover:bg-gray-50">TCC I E II</a>
                </div>
             </li>

              <li>
                <a href="https://ppgmtm.posgrad.ufsc.br/ingresso/" target="_blank"><button className="px-4 py-2 rounded-md hover:bg-white hover:text-[#0a1931] transition-all">Pós-graduação</button></a>
              </li>

              <li className="relative group">
                <button className="px-4 py-2 rounded-md group-hover:bg-white group-hover:text-[#0a1931] transition-all">Pesquisa</button>
                <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-white shadow-xl border border-gray-100 rounded-b-lg overflow-hidden py-2 z-[100]">
                  <a href="/camara" className="block px-6 py-3 text-[10px] hover:bg-gray-50 border-b border-gray-50 uppercase">Composição da Câmara</a>
                  <a href="/pesquisa" className="block px-6 py-3 text-[10px] hover:bg-gray-50 uppercase">Áreas de pesquisa</a>
                </div>
              </li>

              <li className="relative group">
                <button className="px-4 py-2 rounded-md group-hover:bg-white group-hover:text-[#0a1931] transition-all">Extensão</button>
                <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-white shadow-xl border border-gray-100 rounded-b-lg overflow-hidden py-2 z-[100]">
                  <a href="https://petmatematica.paginas.ufsc.br/" target="_blank" className="block px-6 py-3 text-[10px] hover:bg-gray-50 border-b border-gray-50 uppercase">PET</a>
                  <a href="https://lemat.sites.ufsc.br/" target="_blank" className="block px-6 py-3 text-[10px] hover:bg-gray-50 border-b border-gray-50 uppercase">LEMAT</a>
                  <a href="https://monitoriamtm.ufsc.br/" target="_blank" className="block px-6 py-3 text-[10px] hover:bg-gray-50 uppercase">Monitorias</a>
                </div>
              </li>

              <li>
              <a href="/eventos"><button className="px-4 py-2 rounded-md hover:bg-white hover:text-[#0a1931] transition-all">Eventos</button></a>
              </li>

              <li>
              <a href="/bolsas-estagios"><button className="px-4 py-2 rounded-md hover:bg-white hover:text-[#0a1931] transition-all">Bolsas</button></a>
              </li>  

              <li>
              <a href="/recursos"><button className="px-4 py-2 rounded-md hover:bg-white hover:text-[#0a1931] transition-all">Recursos</button></a>
              </li>

              <li className="text-[#f0c419] self-center mx-1">•</li>

              <li>
              <a href="/faq"><button className="px-4 py-2 rounded-md hover:bg-white hover:text-[#0a1931] transition-all text-blue-700">FAQ</button></a>
              </li>
            </ul>

            <Busca />n
          </div>

          {/* MENU MOBILE (Só aparece quando clicado) */}
          {isMenuOpen && (
            <ul className="md:hidden mt-4 pb-4 space-y-1 text-[12px] font-bold uppercase text-gray-600 border-t border-gray-200 pt-4">
              <li><a href="/" className="block p-3 hover:bg-white rounded">Início</a></li>
              
              {/* Dropdown Mobile: Graduação */}
              <li>
                <button 
                  onClick={() => toggleSubmenu('grad')}
                  className="w-full flex justify-between items-center p-3 hover:bg-white rounded"
                >
                  GRADUAÇÃO <span>{openSubmenu === 'grad' ? '−' : '+'}</span>
                </button>
                {openSubmenu === 'grad' && (
                  <div className="bg-gray-100 ml-4 rounded-lg">
                    <a href="/bacharelado" className="block p-3 border-b border-gray-200">Bacharelado</a>
                    <a href="/licenciatura" className="block p-3">Licenciatura</a>
                    <a href="/calendario-academico" className="block p-3 border-t border-gray-200">Calendário Acadêmico</a>
                    <a href="https://mtm.grad.ufsc.br/trabalho-de-conclusao-de-curso/" target="_blank" className="block p-3 border-t border-gray-200">TCC I e II</a>
                  </div>
                )}
              </li>
 
              {/* Dropdown Mobile: Pós-graduação */}
              <li>
                <a href="https://ppgmtm.posgrad.ufsc.br/ingresso/" target="_blank" className="block p-3 hover:bg-white rounded">Pós-graduação</a>
              </li>

              {/* Dropdown Mobile: Pesquisa */}
              <li>
                <button
                  onClick={() => toggleSubmenu('pesquisa')}
                  className="w-full flex justify-between items-center p-3 hover:bg-white rounded"
                >
                  PESQUISA <span>{openSubmenu === 'pesquisa' ? '−' : '+'}</span>
                </button>
                {openSubmenu === 'pesquisa' && (
                  <div className="bg-gray-100 ml-4 rounded-lg">
                    <a href="/camara" className="block p-3 border-b border-gray-200">Câmara de Pesquisa</a>
                    <a href="/pesquisa" className="block p-3">Áreas de pesquisa</a>
                  </div>
                )}
              </li>

              {/* Dropdown Mobile: Extensão */}
              <li>
                <button 
                  onClick={() => toggleSubmenu('ext')}
                  className="w-full flex justify-between items-center p-3 hover:bg-white rounded"
                >
                  EXTENSÃO <span>{openSubmenu === 'ext' ? '−' : '+'}</span>
                </button>
                {openSubmenu === 'ext' && (
                  <div className="bg-gray-100 ml-4 rounded-lg">
                    <a href="https://petmatematica.paginas.ufsc.br/" className="block p-3">PET</a>
                    <a href="https://lemat.sites.ufsc.br/" className="block p-3 border-t border-gray-200">LEMAT</a>
                    <a href="https://monitoriamtm.ufsc.br/" className="block p-3 border-t border-gray-200">Monitorias</a>
                  </div>
                )}
              </li>

              {/* Links Mobile sem dropdown */}

              <li><a href="/eventos" className="block p-3 hover:bg-white rounded">EVENTOS</a></li>
              <li><a href="/bolsas-estagios" className="block p-3 hover:bg-white">BOLSAS</a></li>
              <li><a href="/recursos" className="block p-3 hover:bg-white">RECURSOS</a></li>
              <li><a href="/faq" className="block p-3 text-blue-700 font-black italic underline">FAQ</a></li>
            </ul>
          )}
        </nav>

        {/* 3. CONTEÚDO */}
        <main className="flex-grow">
          {children}
        </main>

         {/* 4. FOOTER */}

        <footer className="w-full mt-auto bg-[#0a1931] text-white">
          <div className="h-2 w-full bg-[#f0c419]"></div>
          <section className="max-w-5xl mx-auto py-8 px-8 flex flex-col md:flex-row gap-12">
            <div className="flex-1 space-y-6">
              <h3 className="text-[#f0c419] font-bold text-xl uppercase tracking-widest border-b border-gray-600 pb-2 inline-block italic">
                Contatos
              </h3>

              <div className="space-y-4 text-sm font-light">
                <a 
                  href="mailto:mtm@contato.ufsc.br" 
                  className="flex items-center gap-2 w-fit transition-all duration-75 active:translate-y-[2px] hover:text-[#f0c419] active:text-[#f0c419] outline-none"
                >
                  <span className="text-base">📧</span> mtm@contato.ufsc.br
                </a>

                <a 
                  href="tel:4837213354"
                  className="flex items-center gap-2 w-fit transition-all duration-75 active:translate-y-[2px] hover:text-[#f0c419] active:text-[#f0c419] outline-none"
                >
                  <span className="text-base">📞</span> (48) 3721-3354
                </a>

                <a 
                  href="https://www.instagram.com/mtm.ufsc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-fit transition-all duration-75 active:translate-y-[2px] hover:text-[#f0c419] active:text-[#f0c419] outline-none group"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-colors">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  @mtm.ufsc
                </a>

                {/* Link de Suporte no Footer */}
                <a href="/faq" className="block text-[10px] text-[#f0c419] font-bold uppercase hover:underline pt-2">
                  Dúvidas Frequentes (FAQ) →
                </a>
                <div className="pt-4 text-xs opacity-80">
                  <p className="font-bold uppercase tracking-tighter">Departamento de Matemática - CFM/UFSC</p>
                  <p>Campus Universitário Reitor João David Ferreira Lima</p>
                  <p>Trindade, Florianópolis - SC, 88040-900</p>
                </div>
              </div>
            </div>
          
                {/* MAPA */}
                <div className="flex-1 w-full h-[250px] rounded-lg overflow-hidden shadow-2xl border-2 border-[#152b50]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.0123!2d-48.5186!3d-27.599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM1JzU2LjQiUyA0OMKwMzEnMDcuMCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000" 
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy">
                  </iframe>
                </div>
              </section>
      
              <div className="bg-[#050d1a] py-4 w-full text-center">
                <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">
                  © {new Date().getFullYear()} Departamento de Matemática — UFSC
                </span>
              </div>
            </footer>
          </body>
        </html>
      );
    }