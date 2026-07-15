import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      {/* Um detalhe visual matemático ou um ícone grande */}
      <h1 className="text-9xl font-black text-gray-100 absolute -z-10 select-none">
        404
      </h1>
      
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a1931] uppercase tracking-tighter">
          Página não encontrada
        </h2>
        
        <p className="text-gray-600 max-w-md mx-auto text-sm md:text-base">
          Desculpe, o conteúdo que você está procurando não existe ou foi movido. 
          Verifique a URL ou retorne à página inicial.
        </p>

        <div className="pt-6 flex flex-col md:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="bg-[#0a1931] text-white px-8 py-3 rounded font-bold text-xs uppercase tracking-widest hover:bg-[#152b50] transition-all"
          >
            Voltar ao Início
          </Link>
          
          <Link 
            href="/faq" 
            className="border border-gray-300 text-gray-600 px-8 py-3 rounded font-bold text-xs uppercase tracking-widest hover:bg-gray-50 transition-all"
          >
            Dúvidas Frequentes
          </Link>
        </div>
      </div>

      {/* Toque de humor matemático(rs) */}
      <p className="mt-12 text-[10px] text-gray-400 italic">
        "Nem todos os caminhos levam a uma solução real."
      </p>
    </div>
  );
}