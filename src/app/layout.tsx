import type { Metadata } from "next";
import "./globals.css";
import Busca from "./Busca";

export const metadata: Metadata = {
  title: "Departamento de Matemática - UFSC",
  description: "Universidade Federal de Santa Catarina",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
     <body className="min-h-screen bg-white flex flex-col">
        
        {/* 1. HEADER */}
        <header className="px-12 py-6 flex justify-between items-center bg-white w-full">
          <div className="flex items-center">
            <img src="/logo-mtm.png" alt="Logo MTM" className="h-16 w-auto object-contain" />
            <div className="h-10 w-[2px] bg-gray-200 mx-6"></div> 
            <div className="text-[#0a1931] font-bold text-sm leading-tight uppercase">
              Departamento de Matemática<br/>
              <span className="font-medium normal-case text-xs text-gray-500 text-[10px]">
                Universidade Federal de Santa Catarina
              </span>
            </div>
          </div>
          
          <div className="flex items-center">
            <img src="/logo-ufsc.png" alt="Brasão UFSC" className="h-32 w-auto object-contain mr-12" />
            <div className="flex flex-col items-end space-y-2">
              <div className="flex items-center text-[10px] font-bold border rounded px-2 py-1 gap-1 cursor-pointer hover:bg-gray-50">
                🇧🇷 PT ▾
              </div>
              <span className="text-xl opacity-30 cursor-pointer">⚙️</span>
            </div>
          </div>
        </header>

        {/* 2. MENU CINZA COM DROPDOWNS + BUSCA */}
        <nav className="bg-[#eeeeee] border-y border-gray-200 px-12 py-2 flex justify-between items-center w-full relative z-50">
          <ul className="flex space-x-2 text-[10px] font-bold uppercase tracking-widest text-gray-600">
            <li>
              <a href="/"><button className="px-4 py-2 rounded-md hover:bg-white hover:text-[#0a1931] transition-all">Início</button></a>
            </li>

            {/* Graduação */}
            <li className="relative group">
              <button className="px-4 py-2 rounded-md group-hover:bg-white group-hover:text-[#0a1931] flex items-center gap-1 transition-all">Graduação</button>
              <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-white shadow-xl border border-gray-100 rounded-b-lg overflow-hidden py-2 z-[100]">
                <a href="/apresentacao" className="block px-6 py-3 text-[9px] hover:bg-gray-50 transition-colors border-b border-gray-50">APRESENTAÇÃO</a>
                <a href="/bacharelado" className="block px-6 py-3 text-[9px] hover:bg-gray-50 transition-colors border-b border-gray-50">BACHARELADO EM MATEMÁTICA</a>
                <a href="/licenciatura" className="block px-6 py-3 text-[9px] hover:bg-gray-50 transition-colors border-b border-gray-50">LICENCIATURA EM MATEMÁTICA</a>
                <a href="/calendario-academico" className="block px-6 py-3 text-[9px] hover:bg-gray-50 transition-colors border-b border-gray-50">CALENDÁRIO ACADÊMICO</a>
                <a href="https://mtm.grad.ufsc.br/trabalho-de-conclusao-de-curso/" target="_blank" className="block px-6 py-3 text-[9px] hover:bg-gray-50">TCC I E II</a>
              </div>
            </li>

            {/* Pós-graduação */}
            <li>
              <a href="https://ppgmtm.posgrad.ufsc.br/ingresso/" target="_blank"><button className="px-4 py-2 rounded-md hover:bg-white hover:text-[#0a1931] transition-all">Pós-graduação</button></a>
            </li>

            {/* Pesquisa */}
            <li className="relative group">
              <button className="px-4 py-2 rounded-md group-hover:bg-white group-hover:text-[#0a1931] transition-all">Pesquisa</button>
              <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-white shadow-xl border border-gray-100 rounded-b-lg overflow-hidden py-2 z-[100]">
                <a href="/camara" className="block px-6 py-3 text-[9px] hover:bg-gray-50 border-b border-gray-50">COMPOSIÇÃO DA CÂMARA</a>
                <a href="/pesquisa" className="block px-6 py-3 text-[9px] hover:bg-gray-50">ÁREAS DE PESQUISA</a>
              </div>
            </li>

            {/* Extensão */}
            <li className="relative group">
              <button className="px-4 py-2 rounded-md group-hover:bg-white group-hover:text-[#0a1931] transition-all">Extensão</button>
              <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-white shadow-xl border border-gray-100 rounded-b-lg overflow-hidden py-2 z-[100]">
                <a href="https://petmatematica.paginas.ufsc.br/" target="_blank" className="block px-6 py-3 text-[9px] hover:bg-gray-50 border-b border-gray-50">PET</a>
                <a href="https://lemat.sites.ufsc.br/" target="_blank" className="block px-6 py-3 text-[9px] hover:bg-gray-50 border-b border-gray-50">LEMAT</a>
                <a href="https://monitoriamtm.ufsc.br/" target="_blank" className="block px-6 py-3 text-[9px] hover:bg-gray-50">MONITORIAS</a>
              </div>
            </li>
          </ul>

          {/* COMPONENTE DE BUSCA (A estrela do show) */}
          <Busca />
        </nav>

        {/* 3. CONTEÚDO DINÂMICO */}
        <main className="flex-grow">
          {children}
        </main>

        {/* 4. FOOTER */}
        <footer className="w-full mt-auto bg-[#0a1931] text-white">
  <div className="h-2 w-full bg-[#f0c419]"></div>
  <section className="max-w-5xl mx-auto py-8 px-8 flex flex-col md:flex-row gap-12">
    <div className="flex-1 space-y-6">
      <h3 className="text-[#f0c419] font-bold text-xl uppercase tracking-widest border-b border-gray-600 pb-2 inline-block">
        Contatos
      </h3>
      
      <div className="space-y-4 text-sm font-light">
        {/* E-mail */}
        <a 
          href="mailto:mtm@contato.ufsc.br" 
          className="flex items-center gap-2 w-fit transition-all duration-75 active:translate-y-[2px] hover:text-[#f0c419] active:text-[#f0c419] outline-none"
        >
          <span className="text-base">📧</span> mtm@contato.ufsc.br
        </a>

        {/* Telefone (Agora com relevo também!) */}
        <a 
          href="tel:4837213354"
          className="flex items-center gap-2 w-fit transition-all duration-75 active:translate-y-[2px] hover:text-[#f0c419] active:text-[#f0c419] outline-none"
        >
          <span className="text-base">📞</span> (48) 3721-3354
        </a>

        {/* Instagram com Ícone SVG (Garante que apareça) */}
        <a 
          href="https://www.instagram.com/mtm.ufsc" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 w-fit transition-all duration-75 active:translate-y-[2px] hover:text-[#f0c419] active:text-[#f0c419] outline-none group"
        >
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-5 h-5 transition-colors"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          @mtm.ufsc
        </a>

        <div className="pt-4 text-xs opacity-80">
          <p className="font-bold">Departamento de Matemática - CFM/UFSC</p>
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