export default function FAQ() {
  const perguntas = [
    {
      q: "Como faço para trancar uma disciplina?",
      a: "O trancamento deve ser solicitado via CAGR dentro do prazo estabelecido no calendário acadêmico da UFSC."
    },
    {
      q: "Onde encontro o formulário de validação de matérias?",
      a: "Os formulários estão disponíveis na aba de Documentos do site ou podem ser retirados fisicamente na secretaria do CFM."
    },
    {
      q: "Qual o prazo para entrega do TCE (Estágio)?",
      a: "O Termo de Compromisso de Estágio deve ser entregue com no mínimo 10 dias de antecedência ao início das atividades."
    },
    {
      q: "Como solicitar o certificado de horas complementares?",
      a: "A solicitação é feita via e-mail para a coordenação, anexando todos os certificados digitalizados em PDF único."
    }
  ];

  return (
    <main className="min-h-screen bg-[#f4f7f9] pb-20">
      <div className="bg-[#0a1931] py-16 px-8 border-b-4 border-[#f0c419]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-white uppercase tracking-tight">Perguntas Frequentes (FAQ)</h1>
          <p className="text-gray-400 text-[10px] mt-2 uppercase tracking-[0.2em] font-bold">Suporte ao Aluno - Departamento de Matemática</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8 mt-10">
        <div className="space-y-4">
          {perguntas.map((item, i) => (
            <details key={i} className="group bg-white border border-gray-200 rounded-lg shadow-sm">
              <summary className="list-none p-5 cursor-pointer flex justify-between items-center hover:bg-gray-50 select-none">
                <span className="font-bold text-[#0a1931] text-sm uppercase tracking-tight">{item.q}</span>
                <span className="text-[#f0c419] group-open:rotate-180 transition-transform font-bold">▼</span>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gray-100">
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* Card de Contato Direto */}
        <div className="mt-16 bg-white border-2 border-dashed border-gray-300 p-8 rounded-2xl text-center">
          <h3 className="text-[#0a1931] font-bold uppercase text-sm">Ainda tem dúvidas?</h3>
          <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest font-semibold">Secretaria de Graduação: (48) 3721-XXXX</p>
          <button className="mt-6 bg-[#0a1931] text-white px-8 py-3 rounded-md font-black uppercase text-[10px] tracking-widest hover:bg-blue-800 transition-all">
            Enviar E-mail para a Coordenação
          </button>
        </div>
      </div>
    </main>
  );
}