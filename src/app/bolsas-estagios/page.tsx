import React from 'react';

export default function BolsasEstagios(): React.JSX.Element {
  const oportunidades = [
    {
      id: 1,
      tipo: "Bolsa",
      titulo: "Monitoria de Cálculo I",
      valor: "R$ 700,00",
      requisitos: "Ter cursado Cálculo I com nota acima de 7.5",
      vagas: 2,
      prazo: "20/05/2026",
      tag: "Ensino"
    },
    {
      id: 2,
      tipo: "Estágio",
      titulo: "Desenvolvedor de Algoritmos - TechHub",
      valor: "R$ 1.500,00",
      requisitos: "Conhecimento em Python e Lógica de Programação",
      vagas: 1,
      prazo: "15/05/2026",
      tag: "Externo"
    },
    {
      id: 3,
      tipo: "Bolsa",
      titulo: "Iniciação Científica",
      valor: "R$ 700,00",
      requisitos: "Python ou Matlab",
      vagas: 3,
      prazo: "30/04/2026",
      tag: "Pesquisa"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-[#0a1931] text-white py-20 px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-[#ffffff]">Bolsas e Estágios</h1>
          <div className="h-1 w-20 bg-[#f0c419] mt-4"></div>
          <p className="text-blue-200 mt-6 text-sm uppercase tracking-wider italic">
            Oportunidades de crescimento acadêmico e profissional
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Loop de Oportunidades */}
          {oportunidades.map((op) => (
            <div key={op.id} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                    op.tipo === "Estágio" ? "bg-purple-100 text-purple-600" : "bg-green-100 text-green-600"
                  }`}>
                    {op.tipo}
                  </span>
                  <span className="text-gray-300 font-bold text-[10px] uppercase tracking-widest">
                    #{op.tag}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[#0a1931] group-hover:text-blue-600 transition-colors">
                  {op.titulo}
                </h2>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">💰</span>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold">Valor Mensal</p>
                      <p className="text-sm font-bold text-gray-700">{op.valor}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-xl">📝</span>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold">Requisitos</p>
                      <p className="text-xs text-gray-600 leading-relaxed">{op.requisitos}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-50">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-left">
                    <p className="text-[9px] text-gray-400 uppercase font-bold">Vagas</p>
                    <p className="text-sm font-black text-[#0a1931]">{op.vagas}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] text-gray-400 uppercase font-bold">Prazo Final</p>
                    <p className="text-sm font-black text-red-500">{op.prazo}</p>
                  </div>
                </div>
                
                <button className="w-full bg-[#0a1931] text-white py-4 rounded-2xl font-bold uppercase text-[10px] tracking-widest hover:bg-blue-600 transition-all shadow-lg active:scale-95">
                  Candidatar-se à vaga
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}