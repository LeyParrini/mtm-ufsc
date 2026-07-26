import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "../components/Header";

export const metadata = {
  title: "Departamento de Matemática - UFSC",
  description: "Site oficial do Departamento de Matemática da UFSC",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className="flex min-h-screen flex flex-col font-sans antialiased transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          
          <main className="flex-grow">
            {children}
          </main>

          <footer className="w-full mt-auto bg-[#0a1931] text-white">
            <div className="h-2 w-full bg-[#f0c419]"></div>
            
            <section className="max-w-5xl mx-auto py-8 px-8 flex flex-col md:flex-row gap-12">
              <div className="flex-1 space-y-6">
                <h3 className="text-[#f0c419] font-bold text-xl uppercase tracking-widest border-b border-gray-600 pb-2 inline-block italic">
                  Contatos
                </h3>
                
                <div className="space-y-4 text-sm font-light">
                  <p>📧 mtm@contato.ufsc.br</p>
                  <p>📞 (48) 3721-3354</p>
                  
                  {/* Link do Instagram envolvendo o ícone e o texto */}
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

              <div className="flex-1 h-80 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.0123!2d-48.5186!3d-27.599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM1JzU2LjQiUyA0OMKwMzEnMDcuMCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </section>

            <div className="bg-[#050d1a] py-5 px-4 w-full border-t border-gray-800/40">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-400 font-normal">
                
                {/* Direitos da Instituição */}
                <div className="flex items-center gap-2 text-center md:text-left">
                  <span>© {new Date().getFullYear()} Departamento de Matemática — UFSC</span>
                  <span className="text-gray-600 text-[11px] hidden md:inline">•</span>
                  <span className="text-gray-500 text-[11px]">Todos os direitos reservados</span>
                </div>

                {/* Crédito de Desenvolvimento */}
                <div className="flex items-center gap-1 text-center text-gray-400">
                  <span>Desenvolvido por</span>
                  <a 
                    href="https://github.com/LeyParrini" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#f0c419] font-medium hover:underline transition-colors ml-1"
                  >
                    Ashley Parrini
                  </a>
                </div>

              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}