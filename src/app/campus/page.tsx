"use client";

export default function Campus() {
  const utilidades = [
    {
      categoria: "Alimentação",
      titulo: "Restaurante Universitário (RU)",
      descricao: "Refeições subsidiadas para estudantes. O coração da convivência na UFSC.",
      link: "https://ru.ufsc.br/",
      icone: "🍱"
    },
    {
      categoria: "Estudo",
      titulo: "Biblioteca Central (BU)",
      descricao: "Acervo de matemática, salas de estudo e wi-fi de alta velocidade.",
      link: "https://portal.bu.ufsc.br/",
      icone: "📚"
    },
    {
      categoria: "Saúde",
      titulo: "Hospital Universitário (HU)",
      descricao: "Atendimento de saúde e emergência dentro do campus Trindade.",
      link: "https://hu.ufsc.br/",
      icone: "🏥"
    }
  ];

  const onibus = [
    { linha: "188 - TICEN / UFSC", tipo: "Alimentadora/Local", freq: "Alta" },
    { linha: "135 - Volta ao Morro Norte", tipo: "Troncal/Inter-terminal", freq: "Média" },
    { linha: "138 - Volta ao Morro Sul", tipo: "Troncal/Inter-terminal", freq: "Média" },
    { linha: "847 - TITRI - TICAN", tipo: "Alimentadora/Local", freq: "Alta" },
  ];

  const pontosDepartamento = [
    { local: "Secretaria de Matemática", andar: "Térreo", bloco: "Sala MTM001" },
    { local: "Laboratório de Informática", andar: "1º Andar", bloco: "Sala MTM003" },
    { local: "Auditório do CFM", andar: "Térreo", bloco: "Sala Central" },
    { local: "PET Matemática", andar: "CCB", bloco: "Sala 7" }
  ];

  const galeria = [
    { legenda: "Bloco MTM - Entrada", url: "campus-1.jpg" },
    { legenda: "Auditório Airton Silva (CFM)", url: "campus-2.jpg" },
    { legenda: "Sala de Laboratório", url: "campus-3.jpg" },
    { legenda: "Sala de monitoria", url: "campus-4.jpg" }
  ];

  return (
    <main className="min-h-screen py-12 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* CABEÇALHO */}
        <div className="bg-[#0a1931] text-white py-20 px-12">
         <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold uppercase tracking-widest">Campus</h1>
          <div className="h-1 w-20 bg-[#f0c419] mt-4"></div>
          <p className="text-blue-200 mt-6 text-sm uppercase tracking-wider">Departamento de Matemática - CFM </p>
         </div>
        </div>


        {/* 1. Seção em full width: serviços e utilidades */}
        <section className="space-y-6">
          <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-4">
            <h2 className="text-2xl font-bold text-[#0a1931] dark:text-white">
              Serviços Essenciais do Campus
            </h2>
            <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
              Suporte ao Estudante
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {utilidades.map((u, i) => (
              <a 
                key={i} 
                href={u.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{u.icone}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                      {u.categoria}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0a1931] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                    {u.titulo}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {u.descricao}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/60 dark:border-gray-700/60 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400">
                  <span>Acessar página</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 2. Seção dividida em lado esquerdo e direito */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
          
          {/* Lado esquerdo: Transporte e locais internos */}
          <div className="lg:col-span-6 space-y-10">
            
            {/* Bloco: Linhas de Ônibus */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#0a1931] dark:text-white flex items-center gap-2">
                <span>🚌</span> Linhas de Ônibus
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800/60 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {onibus.map((o, i) => (
                    <div key={i} className="p-4 flex items-center justify-between hover:bg-white dark:hover:bg-gray-800 transition-colors">
                      <div>
                        <p className="font-bold text-sm text-[#0a1931] dark:text-white">{o.linha}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{o.tipo}</p>
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 uppercase">
                        Freq: {o.freq}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bloco: Pontos no Departamento */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#0a1931] dark:text-white flex items-center gap-2">
                <span>📍</span> Locais do Departamento
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pontosDepartamento.map((p, i) => (
                  <div key={i} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-bold text-xs text-[#0a1931] dark:text-white">{p.local}</h3>
                    <div className="mt-2 flex items-center gap-2 text-[10px] text-gray-500 dark:text-gray-400">
                      <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 font-semibold">{p.andar}</span>
                      <span>{p.bloco}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Lado direito: Galeria de fotos */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-xl font-bold text-[#0a1931] dark:text-white flex items-center gap-2">
              <span>📸</span> Galeria do Departamento
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {galeria.map((foto, i) => (
                <div 
                  key={i} 
                  className="group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 aspect-video shadow-md border border-gray-200 dark:border-gray-700"
                >
                  {/* Imagem com Zoom no Hover */}
                  <img 
                    src={foto.url} 
                    alt={foto.legenda} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />

                  {/* Legenda com Gradiente Escuro na Parte Inferior */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex items-end">
                    <p className="text-white text-xs font-bold uppercase tracking-wider drop-shadow-sm">
                      {foto.legenda}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-gray-400 dark:text-gray-500 italic text-right pt-2">
              * Fotos oficiais do acervo da Agência de Comunicação da UFSC.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}