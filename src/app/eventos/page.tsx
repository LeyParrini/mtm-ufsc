export default function Eventos() {
  const eventos = [
    {
      id: 1,
      tipo: "Aula Magna",
      titulo: "A lógica da guerra civil mundial como resposta às crises do capitalismo",
      palestrante: "Prof. Vladimir Safatle (USP)",
      data: "08",
      mes: "ABR",
      hora: "18h30",
      local: "Auditório Guarapuvu",
      descricao: "Em tempos de incerteza global, o professor propõe uma análise profunda sobre as tensões geopolíticas atuais e a possibilidade de um conflito global. Venha debater os desafios do século XXI sob uma perspectiva crítica e instigante.",
      status: "Evento passado"
    },
    {
      id: 2,
      tipo: "Colóqio Matemático",
      titulo: "Classificação de Fibrados de Fell Saturados",
      palestrante: "Prof. Natã Machado (UFSC)",
      data: "27",
      mes: "MAR",
      hora: "14h",
      local: "Auditório Airton Silva, Departamento de Matemática",
      descricao: "Neste colóquio, o professor Natã Machado apresentará resultados recentes sobre a classificação de fibrados de Fell saturados, um tema central na teoria de álgebras de operadores e suas aplicações. O evento é uma oportunidade imperdível para estudantes e pesquisadores interessados em análise funcional e geometria não comutativa.",
      status: "Evento passado"
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-[#0a1931] text-white py-20 px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-[#ffffff]">Eventos e Seminários</h1>
          <div className="h-1 w-20 bg-[#f0c419] mt-4"></div>
          <p className="text-blue-200 mt-6 text-sm uppercase tracking-wider italic">
            Fique por dentro das atividades acadêmicas do MTM
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 mt-12 space-y-8">
        {eventos.map((evento) => (
          <div key={evento.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
            
            {/* Lado Esquerdo: Data de Destaque */}
            <div className="bg-blue-600 text-white flex flex-col items-center justify-center p-6 md:w-32">
              <span className="text-3xl font-black leading-none">{evento.data}</span>
              <span className="text-sm font-bold tracking-widest uppercase">{evento.mes}</span>
            </div>

            {/* Conteúdo Central */}
            <div className="p-8 flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 bg-blue-50 text-blue-600 rounded">
                  {evento.tipo}
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${evento.status === 'Inscrições Abertas' ? 'text-green-500' : 'text-orange-500'}`}>
                   • {evento.status}
                </span>
              </div>
              
              <h2 className="text-xl font-bold text-[#0a1931]">{evento.titulo}</h2>
              <p className="text-sm text-gray-500 mt-1 font-medium">{evento.palestrante}</p>
              
              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                {evento.descricao}
              </p>

              <div className="mt-6 flex flex-wrap gap-6 text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <span>🕒 {evento.hora}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍 {evento.local}</span>
                </div>
              </div>
            </div>

            {/* Ação */}
            <div className="p-8 bg-gray-50 border-l border-gray-100 flex items-center justify-center">
              <a 
                href={evento.status === 'Inscrições Abertas' ? "https://forms.gle/inscricao-evento" : "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0a1931] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Mais detalhes
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Informativo de Submissão */}
      <div className="max-w-4xl mx-auto mt-16 p-8 bg-blue-900 rounded-3xl text-center text-white">
        <h3 className="text-xl font-bold">Deseja organizar um seminário?</h3>
        <p className="text-blue-200 text-sm mt-2">Envie sua proposta para a secretaria do departamento para análise e reserva de auditório.</p>
                <a 
                  href={"https://forms.gle/proposta-seminario"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase text-xs tracking-widest px-8 py-4 w-fit transition-all hover:scale-105 active:scale-95 inline-block"
                >
                  Enviar proposta
                </a>
              </div>
            </main>
          );
        }