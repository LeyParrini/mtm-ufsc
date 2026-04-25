export default function RecursosDidaticos() {
  const categorias = [
    {
      fase: "1ª Fase",
      disciplinas: [
        { 
          nome: "MTM3100 - Fundamentos da Aritmética", 
          arquivos: [
            { nome: "Lista_Inducao_Finita.pdf", data: "10/03/2024", tamanho: "1.1 MB" },
            { nome: "Prova_1_Divisibilidade_2023.pdf", data: "20/05/2023", tamanho: "950 KB" }
          ]
        },
        { 
          nome: "MTM3101 - Geometria Analítica", 
          arquivos: [
            { nome: "P1_Vetores_e_Retas.pdf", data: "12/04/2024", tamanho: "1.5 MB" },
            { nome: "Lista_Conicas_Quadricas.pdf", data: "05/06/2023", tamanho: "2.1 MB" }
          ]
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#f4f7f9] text-[#1a202c]">
      {/* Header Institucional */}
      <div className="bg-[#0a1931] py-12 px-8 border-b-4 border-[#f0c419]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-white uppercase tracking-tight">Repositório de Material Didático</h1>
          <p className="text-gray-400 text-[10px] mt-2 uppercase tracking-[0.2em] font-bold">Departamento de Matemática - UFSC</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        
        {/* Painel de Filtros Duplos */}
        <div className="bg-white border border-gray-200 p-5 mb-10 flex flex-col md:flex-row items-center gap-4 text-[11px]">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="font-black text-[#0a1931] uppercase whitespace-nowrap">Curso:</span>
            <select className="w-full md:w-48 bg-gray-50 border border-gray-300 p-2 rounded focus:outline-none font-bold text-gray-600">
              <option>Bacharelado</option>
              <option>Licenciatura</option>
            </select>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="font-black text-[#0a1931] uppercase whitespace-nowrap">Fase:</span>
            <select className="w-full md:w-40 bg-gray-50 border border-gray-300 p-2 rounded focus:outline-none font-bold text-gray-600">
              <option>1ª Fase</option>
              <option>2ª Fase</option>
              <option>3ª Fase</option>
              <option>4ª Fase</option>
              <option>Optativas</option>
            </select>
          </div>

          <div className="flex-1 w-full">
            <input 
              type="text" 
              placeholder="Pesquisar por código (MTM...) ou nome da matéria" 
              className="w-full bg-gray-50 border border-gray-300 p-2 rounded focus:outline-none focus:border-[#0a1931] font-medium"
            />
          </div>
        </div>

        {/* Listagem de Disciplinas */}
        <div className="space-y-8">
          {categorias.map((secao, i) => (
            <div key={i}>
              <h2 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4 pb-2 border-b-2 border-gray-200">
                Disciplinas da {secao.fase}
              </h2>

              <div className="grid grid-cols-1 gap-3">
                {secao.disciplinas.map((disc, j) => (
                  <details key={j} className="group bg-white border border-gray-200 transition-all shadow-sm">
                    <summary className="list-none p-5 cursor-pointer flex justify-between items-center hover:bg-gray-50 select-none">
                      <div className="flex items-center gap-4">
                        <span className="text-[#0a1931] text-lg">📁</span>
                        <span className="font-bold text-[#0a1931] text-sm uppercase tracking-tighter italic">{disc.nome}</span>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className="hidden md:inline text-[9px] bg-gray-100 px-2 py-1 rounded font-bold uppercase text-gray-500">
                          {disc.arquivos.length} Documentos disponíveis
                        </span>
                        <span className="text-[#f0c419] group-open:rotate-180 transition-transform font-bold">▼</span>
                      </div>
                    </summary>

                    <div className="border-t border-gray-100">
                      <table className="w-full text-left text-[11px]">
                        <thead className="bg-gray-50 border-b border-gray-200">
                          <tr>
                            <th className="p-4 font-black text-gray-500 uppercase tracking-widest">Identificação do Arquivo</th>
                            <th className="p-4 font-black text-gray-500 uppercase tracking-widest">Publicação</th>
                            <th className="p-4 font-black text-gray-500 uppercase tracking-widest">Tamanho</th>
                            <th className="p-4 text-right font-black text-gray-500 uppercase tracking-widest">Ação</th>
                          </tr>
                        </thead>
                        <tbody>
                          {disc.arquivos.map((arq, k) => (
                            <tr key={k} className="border-b border-gray-50 hover:bg-blue-50/50 transition-colors">
                              <td className="p-4 flex items-center gap-3">
                                <span className="bg-red-600 text-white px-1.5 py-0.5 rounded text-[8px] font-black">PDF</span>
                                <span className="text-gray-800 font-bold">{arq.nome}</span>
                              </td>
                              <td className="p-4 text-gray-500 font-mono">{arq.data}</td>
                              <td className="p-4 text-gray-400 font-bold">{arq.tamanho}</td>
                              <td className="p-4 text-right">
                                <button className="bg-[#0a1931] text-white px-4 py-2 rounded text-[9px] font-black uppercase tracking-widest hover:bg-blue-800 transition-all">
                                  Download
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Banner de Contribuição */}
        <div className="mt-20">
          <div className="bg-[#0a1931] p-10 border-l-8 border-[#f0c419] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-white font-bold text-xl uppercase tracking-tighter italic">Contribuição Acadêmica</h3>
              <p className="text-gray-400 text-xs mt-2 leading-relaxed uppercase tracking-wider">
                Colabore enviando provas, listas de exercícios ou notas de aula digitalizadas. 
                Sua contribuição ajuda a manter o acervo atualizado para todos os alunos.
              </p>
            </div>
            <button className="whitespace-nowrap bg-[#f0c419] text-[#0a1931] px-12 py-4 font-black uppercase text-xs tracking-[0.2em] hover:bg-yellow-500 transition-all shadow-xl active:scale-95">
              Enviar Documento
            </button>
          </div>
          <p className="mt-4 text-[9px] text-gray-400 text-right uppercase font-bold tracking-widest">
            * Sujeito a moderação pela secretaria do departamento
          </p>
        </div>
      </div>
    </main>
  );
}