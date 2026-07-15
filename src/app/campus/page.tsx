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

  const pontosDepartamento = [
    { local: "Secretaria de Matemática", andar: "Térreo", bloco: "Bloco C" },
    { local: "Laboratório de Informática", andar: "1º Andar", bloco: "Bloco B" },
    { local: "Auditório do CFM", andar: "Térreo", bloco: "Bloco Central" },
    { local: "PET Matemática", andar: "2º Andar", bloco: "Bloco A" },
  ];

  const onibus = [
    { linha: "185 - UFSC Semidireto", tipo: "Rápido", freq: "Alta" },
    { linha: "135 - Volta ao Morro Norte", tipo: "Circular", freq: "Média" },
    { linha: "138 - Volta ao Morro Sul", tipo: "Circular", freq: "Média" },
    { linha: "847 - TITRI - TICAN", tipo: "Interbairros", freq: "Média" },
  ];

  const galeria = [
    { url: "/campus-1.jpg", legenda: "Entrada do CFM" },
    { url: "/campus-2.jpg", legenda: "Pátio Central" },
    { url: "/campus-3.jpg", legenda: "Prédio do MTM" },
    { url: "/campus-4.jpg", legenda: "Salas de Aula" },
  ];

  return (
    <main className="min-h-screen bg-white pb-24">
      {/* 1. Header Principal */}
      <div className="bg-[#0a1931] text-white py-24 px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold uppercase tracking-widest">O Campus</h1>
          <div className="h-1 w-20 bg-[#f0c419] mt-4"></div>
          <p className="text-blue-200 mt-6 text-sm uppercase tracking-wider italic">
            Universidade Federal de Santa Catarina - Trindade
          </p>
        </div>
      </div>

      {/* 2. Seção de Utilidades (Cards de cima) */}
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-12">
          {utilidades.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-50 hover:border-blue-200 transition-all group">
              <span className="text-4xl group-hover:scale-110 inline-block transition-transform">{item.icone}</span>
              <p className="text-blue-600 font-bold text-[10px] uppercase tracking-widest mt-4">{item.categoria}</p>
              <h3 className="text-xl font-bold text-[#0a1931] mt-1">{item.titulo}</h3>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">{item.descricao}</p>
              <a href={item.link} target="_blank" className="inline-block mt-6 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                Ver horários →
              </a>
            </div>
          ))}
        </div>
      </div>

      <section className="max-w-6xl mx-auto mt-20 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0a1931] mb-6">Guia prático do Departamento</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              O Departamento de Matemática está situado no Centro de Ciências Físicas e Matemáticas (CFM). 
              Aqui estão os principais locais que você pode frequentar:
            </p>
            
            <div className="space-y-4">
              {pontosDepartamento.map((ponto, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white rounded-lg border-l-4 border-blue-600 shadow-sm">
                  <span className="font-bold text-[#0a1931]">{ponto.local}</span>
                  <span className="text-xs text-gray-400 font-bold uppercase">{ponto.bloco} • {ponto.andar}</span>
                </div>
              ))}
            </div>
          </div>

      {/* Dica: Aqui você pode colocar uma foto bonita do campus ou do prédio do CFM */}
      <div className="bg-blue-100 rounded-3xl h-[400px] flex items-center justify-center text-blue-400 italic overflow-hidden shadow-inner">
        {/* Quando tiver uma foto, use a tag <img /> aqui */}
        [Espaço para foto do Centro de Ciências Físicas e Matemáticas]
      </div>
    </div>
    </section>
    
    {/* 3. Nova Seção Estendida para Baixo */}
      <div className="max-w-6xl mx-auto px-8 mt-32">
        <hr className="mb-20 border-gray-100" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Lado Esquerdo: Linhas de Ônibus */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold text-[#0a1931] flex items-center gap-3">
              <span className="text-2xl">🚌</span> Mobilidade
            </h2>
            <p className="text-gray-500 mt-4 text-sm leading-relaxed">
              O campus Trindade é ponto central de diversas linhas que conectam a UFSC aos principais terminais de Florianópolis.
            </p>
            
            <div className="mt-8 space-y-3">
              {onibus.map((bus, i) => (
                <div key={i} className="flex justify-between p-4 bg-gray-50 rounded-xl border-l-4 border-blue-600 hover:bg-blue-50 transition-colors">
                  <div>
                    <span className="block font-bold text-[#0a1931] text-sm">{bus.linha}</span>
                    <span className="text-[9px] text-gray-400 uppercase font-black tracking-tighter">{bus.tipo}</span>
                  </div>
                  <span className="text-[9px] bg-white border border-gray-200 text-gray-600 px-2 py-1 rounded-md font-bold self-center shadow-sm">
                    {bus.freq}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Galeria de Fotos */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-[#0a1931] mb-8">Galeria do Departamento</h2>
            <div className="grid grid-cols-2 gap-4">
              {galeria.map((foto, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-video shadow-sm border border-gray-100">
                  {/* Substituir por <img src={foto.url} /> quando tiver as fotos */}
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center p-4">
                    {foto.legenda}
                  </div>
                  
                  {/* Overlay Legenda */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1931]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-[10px] font-bold uppercase tracking-widest">{foto.legenda}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="mt-6 text-[11px] text-gray-400 italic text-right">
              * Fotos oficiais do acervo da Agência de Comunicação da UFSC.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}