export default function Administracao() {
  // BANCO DE DADOS DE ADMINISTRAÇÃO
  const setores = [
    {
      titulo: "Chefia do Departamento",
      emailPrincipal: "mtm@contato.ufsc.br",
      membros: [
        { cargo: "Chefe", nome: "Prof. Dr. Paulinho Demeneghi", fone: "(48) 3721-3700" , email: "mtm@contato.ufsc.br" },
        { cargo: "Subchefe", nome: "Profa. Dra. Marianna Ravara Vago", fone: "(48) 3721-3691" , email: "mtm@contato.ufsc.br" },
      ]
    },
    {
      titulo: "Secretaria Administrativa",
      emailPrincipal: "matematica@contato.ufsc.br",
      membros: [
        { cargo: "Chefe", nome: "Eduardo Ulisses Bastos e Silva", fone: "(48) 3721-6560", email: "matematica@contato.ufsc.br" },
        { cargo: "Assistente Administrativo", nome: "Marco Antônio Possamai", fone: "(48) 3721-2884", email: "matematica@contato.ufsc.br" },
      ]
    },
    {
      titulo: "Coordenadoria Acadêmica",
      emailPrincipal: "matematica@contato.ufsc.br",
      membros: [
        { cargo: "Coordenador", nome: "Felipe Lopes Castro", fone: "(48) 3721-2960", email: "matematica@contato.ufsc.br" },
        { cargo: "Sub-Coordenadoria", nome: "Sonia Elena Palomino Castro", fone: "(48) 3721-3662", email: "matematica@contato.ufsc.br" },
      ]
    },
    {
      titulo: "Coordenações de Extensão",
      emailPrincipal: "coordenacao.mtm@contato.ufsc.br",
      membros: [
        { cargo: "Coord. Pesquisa", nome: "Eliezer Batista", fone: "(48) 3721-3593", email: "—" },
        { cargo: "Coord. Ensino", nome: "Marianna Ravara Vago", fone: "(48) 3721-3691", email: "ensino.mtm@contato.ufsc.br" },
        { cargo: "Coord. Extensão", nome: "Paulinho Demeneghi", fone: "(48) 3721-3663", email: "—" },
        { cargo: "Coord. Estágio", nome: "Silvia Martini de Holanda", fone: "(48) 3721-3696", email: "—" },
        { cargo: "Coord. LEMAT", nome: "Flávia Tereza Giordani", fone: "(48) 3721-3676", email: "flavia.giordani@ufsc.br" },
        { cargo: "Coord. PET Matemática", nome: "Alda Dayana Mattos Mortari", fone: "(48) 3721-4595", email: "grupo@pet.mtm.ufsc.br" },
        { cargo: "Coord. PAM – Programa Avançado de Matemática", nome: "Marianna Ravara Vago", fone: "(48) 3721-3691", email: "marianna.v@ufsc.br" }
      ]

    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. HEADER DA PÁGINA (ESTILO UFSC MODERNO) */}
      <div className="bg-[#0a1931] text-white py-20 px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold uppercase tracking-widest">Administração</h1>
          <div className="h-1 w-20 bg-[#f0c419] mt-4"></div>
          <p className="text-blue-200 mt-6 text-sm uppercase tracking-wider">Departamento de Matemática - CFM - UFSC</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-8">
        {setores.map((setor, idx) => (
          <div key={idx} className="mb-20">
            {/* Título do Setor + Email Principal */}
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-gray-100 pb-4 mb-8">
              <div>
                <h2 className="text-2xl font-black text-[#0a1931] uppercase tracking-tight">{setor.titulo}</h2>
              </div>
              <div className="mt-2 md:mt-0 text-blue-600 font-bold text-sm">
                ✉️ Geral: <a href={`mailto:${setor.emailPrincipal}`} className="hover:underline">{setor.emailPrincipal}</a>
              </div>
            </div>

            {/* Grid de Membros */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {setor.membros.map((membro, mIdx) => (
                <div key={mIdx} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all group">
                  <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em]">{membro.cargo}</span>
                  <h3 className="text-lg font-bold text-[#0a1931] mt-1 group-hover:text-blue-800">{membro.nome}</h3>
                  
                  <div className="mt-6 space-y-3 text-sm text-gray-600">
                    <p className="flex items-center gap-3">
                      <span className="opacity-50 text-base">📞</span> {membro.fone}
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="opacity-50 text-base">📧</span> 
                      <a href={`mailto:${membro.email}`} className="hover:text-blue-600 transition-colors break-all">
                        {membro.email}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}