"use client";

import { useState, useMemo } from "react";

export default function CorpoDocente() {
  const [abaAtiva, setAbaAtiva] = useState<"efetivos" | "substitutos">("efetivos");
  const [filtroArea, setFiltroArea] = useState("Todas");

  const professores = {
    efetivos: [
      { nome: "Prof. Abdelmoubine Amar Henni", area: "Geometria Álgebrica", formacao: "Dr, SISSA/ISAS, Trieste-Itália, 2009", sala: "215", fone: "48 3721-3674", email: "henni.amar@ufsc.br" },
      { nome: "Prof. Alcides Buss", area: "Álgebra de Operadores", formacao: "Dr, Westifälische Wilhelms-Universität Münster, 2007", sala: "113", fone: "48 3721-3596", email: "alcides.buss@ufsc.br" },
      { nome: "Prof. Alda Dayana Mattos Mortari", area: "Álgebra", formacao: "Dra, Unicamp, 2012", sala: "112", fone: "48 3721-3594", email: "alda.dayana@ufsc.br" },
      { nome: "Prof. Alexandre do Nascimento Oliveira Sousa", area: "Análise", formacao: "Dr, USP/Universidad de Sevilla, 2022", sala: "206", fone: "48 3721-3659", email: "alexandre.n.o.sousa@ufsc.br" },
      { nome: "Prof. Antonio Carlos Gardel Leitão", area: "Análise Numérica", formacao: "Dr, J.W. Goethe Universität, 1997", sala: "313", fone: "48 3721-4572", email: "a.leitao@ufsc.br" },
      { nome: "Prof. Bruno de Lessa Victor", area: "Equações Diferenciais", formacao: "Dr, UFPR, 2021", sala: "110", fone: "48 3721.xxxx", email: "alcides.buss@ufsc.br" },
      { nome: "Prof. Camila Aparecida Benedito Rodrigues de Lima", area: "Equações Diferenciais", formacao: "Dr, USP, 2019", sala: "206", fone: "48 3721-3659", email: "c.r.lima@ufsc.br" },
      { nome: "Prof. Camilo Campana", area: "Equações Diferenciais", formacao: "Dr, ICMC – USP, 2017", sala: "211", fone: "48 3721-5653", email: "camilo.campana@ufsc.br" },
      { nome: "Prof. Celso Melchiades Doria", area: "Geometria e Topologia", formacao: "PhD, University of Warwick, 1990", sala: "210", fone: "48 3721-5656", email: "c.m.doria@ufsc.br" },
      { nome: "Prof. Cleverson Roberto da Luz", area: "Equações Diferenciais", formacao: "Dr, UFRJ, 2009", sala: "314", fone: "48 3721-3689", email: "cleverson.luz@ufsc.br" },
      { nome: "Prof. Daniel Gonçalves", area: "Análise", formacao: "PhD, University of Victoria, 2006", sala: "310", fone: "48 3721-3685", email: "daniel.goncalves@ufsc.br" },
      { nome: "Prof. Daniel Noberto Kozakevich", area: "Matemática Aplicada", formacao: "Dr, Unicamp, 1995", sala: "308", fone: "48 3721-3683", email: "daniel.n.kozakevich@ufsc.br" },
      { nome: "Prof. Danilo Royer", area: "Análise Funcional", formacao: "Dr, Unicamp, 2005", sala: "212", fone: "48 3721-3668", email: "danilo.royer@ufsc.br" },
      { nome: "Prof. Dirceu Bagio", area: "Álgebra", formacao: "Dr, Unicamp, 2004", sala: "204", fone: "48 3721-3658", email: "d.bagio@ufsc.br" },
      { nome: "Prof. Douglas Soares Gonçalves", area: "Matemática Aplicada", formacao: "Dr, Unicamp, 2013", sala: "210", fone: "48 3721-5656", email: "douglas.goncalves@ufsc.br" },
      { nome: "Prof. Edson Cilos Vargas Júnior", area: "Equações Diferenciais", formacao: "Dr, UFSC, 2019", sala: "102", fone: "48 3721-3581", email: "edson.junior@ufsc.br" },
      { nome: "Prof. Eduardo Tengan", area: "Álgebra", formacao: "Phd Emory,2006", sala: "207", fone: "48 3721-3669", email: "e.tengan@ufsc.br" },
      { nome: "Prof. Eliezer Batista", area: "Física Matemática", formacao: "Dr, IFT/UNESP, 1997", sala: "112", fone: "48 3721-3593", email: "e.batista@ufsc.br" },
      { nome: "Prof. Everton Boos", area: "Análise Numérica", formacao: "Dr, UFSC 2022", sala: "209", fone: "48 3721-3664", email: "everton.boos@ufsc.br" },
      { nome: "Prof. Fábio Junior Margotti", area: "Matemática Aplicada", formacao: "Dr, Karlsruher Institut für Technologie", sala: "302", fone: "48 3721-5655", email: "fabio.margotti@ufsc.br" },
      { nome: "Prof. Fabio Silva Botelho", area: "Análise", formacao: "PhD, Virginia Tech, 2009", sala: "208", fone: "48 3721-3663", email: "fabio.silva.botelho@ufsc.br" },
      { nome: "Prof. Felipe Lopes Castro", area: "Álgebra", formacao: "Dr, UFRGS, 2015", sala: "301", fone: "48 3721-5650", email: "f.castro@ufsc.br" },
      { nome: "Prof. Fermin Sinforiano Viloche Bazãn", area: "Matemática Aplicada", formacao: "Dr, Unicamp, 1993", sala: "105", fone: "48 3721-3586", email: "fermin.bazan@ufsc.br" },
      { nome: "Prof. Fernando de Lacerda Mortari", area: "Álgebra de Operadores", formacao: "PhD, University of Toronto, 2009", sala: "111", fone: "48 3721-3591", email: "fernando.mortari@ufsc.br" },
      { nome: "Prof. Flávia Tereza Giordani", area: "Matemática Aplicada", formacao: "Dra, UFRGS, 2008", sala: "216", fone: "48 3721-3676", email: "flavia.giordani@ufsc.br" },
      { nome: "Prof. Francisco Carlos Caramello Junior", area: "Geometria e Topologia", formacao: "Dr, UFSCar, 2018", sala: "104", fone: "48 3721-xxxx", email: "francisco.caramello@ufsc.br" },
      { nome: "Prof. Gilles Gonçalves de Castro", area: "Álgebra de Operadores", formacao: "Dr, UFRGS/Université d'Orléans, 2009", sala: "111", fone: "48 3721-3592", email: "gilles.castro@ufsc.br" },
      { nome: "Prof. Giuliano Boava", area: "Álgebra de Operadores", formacao: "Dr, IMPA, 2011", sala: "212", fone: "48 3721-3661", email: "g.boava@ufsc.br" },
      { nome: "Prof. Igor Mozolevski", area: "Análise Numérica", formacao: "Dr, Bielorussian State University, 1978", sala: "312", fone: "48 3721-XXXX", email: "igor.mozolevski@ufsc.br" },
      { nome: "Prof. Ivan Pontual Costa e Silva", area: "Física Matemática", formacao: "Dr, IFUSP, 2001", sala: "214", fone: "48 3721-3672", email: "pontual.ivan@ufsc.br" },
      { nome: "Prof. Jáuber Cavalcante de Oliveira", area: "Equações Diferenciais", formacao: "PhD, Carnegie Mellon University, 1997", sala: "320", fone: "48 3721-3693", email: "j.c.oliveira@ufsc.br" },
      { nome: "Prof. Joel Santos Souza", area: "Equações Diferenciais", formacao: "Dr, UFRJ, 1995", sala: "319", fone: "48 3721-3692", email: "j.souza@ufsc.br" },
      { nome: "Prof. Juliano de Bem Francisco", area: "Matemática Aplicada", formacao: "Dr, Unicamp, 2005", sala: "103", fone: "48 3721-3582", email: "juliano.francisco@ufsc.br" },
      { nome: "Prof. Leandro Batista Morgado", area: "Sistemas Dinâmicos", formacao: "Dr, Unicamp, 2015", sala: "316", fone: "48 3721-2295", email: "leandro.morgado@ufsc.br" },
      { nome: "Prof. Leonardo Koller Sacht", area: "Matemática Aplicada", formacao: "Dra, Universidade de São Paulo, 2010", sala: "M-002", fone: "48 3721-4595", email: "alda.mattos@ufsc.br" },
      { nome: "Prof. Leonardo Silveira Borges", area: "Matemática Aplicada", formacao: "Dr, UNICAMP, 2013", sala: "316", fone: "48 3721-3697", email: "l.s.borges@ufsc.br" },
      { nome: "Prof. Licio Hernanes Bezerra", area: "Análise Numérica", formacao: "Dr, PUC-Rio, 1990", sala: "209", fone: "48 3721-3664", email: "licio.bezerra@ufsc.br" },
      { nome: "Prof. Luciane Ines Assmann Schuh", area: "Matemática Aplicada", formacao: "Dra, USP, 2011", sala: "102", fone: "48 3721.3580", email: "luciane.schuh@ufsc.br" },
      { nome: "Prof. Luciano Bedin", area: "Matemática Aplicada", formacao: "Dr, UFRGS, 2005", sala: "213", fone: "48 3721.3670", email: "luciano.bedin@ufsc.br" },
      { nome: "Prof. Luis Gustavo Longen", area: "Equações Diferenciais", formacao: "Dr, UFSC 2022", sala: "315", fone: "48 3721-XXXX", email: "luis.longen@ufsc.br" },
      { nome: "Prof. Luiz Augusto Saeger", area: "Física Matemática", formacao: "Dr, IFT/UNESP, 1996", sala: "305", fone: "48 3721-3680", email: "luiz.saeger@ufsc.br" },
      { nome: "Prof. Maicon Marques Alves", area: "Matemática Aplicada", formacao: "Dr, IMPA, 2009", sala: "303", fone: "48 3721.3678", email: "maicon.alves@ufsc.br" },
      { nome: "Prof. Maíra F. Gauer Palma", area: "Equações Diferenciais", formacao: "Dr, UFSC, 2017", sala: "320", fone: "48 3721-3694", email: "maira.gauer@ufsc.br" },
      { nome: "Prof. Marcelo Ferreira Lima Carvalho", area: "Física Matemática", formacao: "Dr, CBPF/CNPq, 1996", sala: "213", fone: "48 3721-3671", email: "m.carvalho@ufsc.br" },
      { nome: "Prof. Marcelo Sobottka", area: "Sistemas Dinâmicos", formacao: "Dr, Universidad de Chile, 2005", sala: "214", fone: "48 3721-3673", email: "marcelo.sobottka@ufsc.br" },
      { nome: "Prof. Márcio Rodolfo Fernandes", area: "Análise Numérica", formacao: "Dr, Unicamp, 2003", sala: "103", fone: "48 3721-3583", email: "marcio.fernandes@ufsc.br" },
      { nome: "Prof. Maria Inez Cardoso Gonçalves", area: "Matemática Aplicada", formacao: "PhD, University of Victoria - Canada, 2007", sala: "204", fone: "48 3721.3599", email: "maria.inez@ufsc.br" },
      { nome: "Prof. Marianna Ravara Vago", area: "Geometria e Topologia", formacao: "Dra, UFMG, 2013", sala: "318", fone: "48 3721-3691", email: "marianna.v@ufsc.br" },
      { nome: "Prof. Mario Rodolfo Roldan Daquilema", area: "Sistemas Dinâmicos", formacao: "Dr, IMPA, 2014", sala: "301", fone: "48 3721-5651", email: "m.roldan@ufsc.br" },
      { nome: "Prof. Matheus Cheque Bortolan", area: "Sistemas Dinâmicos", formacao: "Dr, USP, 2013", sala: "113", fone: "48 3721-3699", email: "m.bortolan@ufsc.br" },
      { nome: "Prof. Milton dos Santos Braitt", area: "Análise Numérica", formacao: "Dr, IMPA/CNPq, 2002", sala: "203", fone: "48 3721-3598", email: "m.braitt@ufsc.br" },
      { nome: "Prof. Mykola Khrypchenko", area: "Álgebra", formacao: "Dr, Univ. Nac. de Kharkiv V. N. Karazin, 2011", sala: "215", fone: "48 3721-3675", email: "m.khrypchenko@ufsc.br" },
      { nome: "Prof. Natã Machado", area: "Álgebra de Operadores", formacao: "Dr, UFSC, 2022", sala: "315", fone: "48 3721-3327", email: "n.machado@ufsc.br" },
      { nome: "Prof. Oscar Francisco Marquez Sosa", area: "Álgebra", formacao: "Dr, Univ. Nacional de Córdoba", sala: "105", fone: "48 3721-3587", email: "oscarmarquez.sosa@ufsc.br" },
      { nome: "Prof. Paul Krause", area: "Matemática Aplicada", formacao: "Dr, IMPA/CNPq, 2002", sala: "114", fone: "48 3721-3597", email: "p.krause@ufsc.br" },
      { nome: "Prof. Paulinho Demeneghi", area: "Álgebra de Operadores", formacao: "Dr, UFSC, 2018", sala: "208", fone: "48 3721-3663", email: "paulinho.demeneghi@ufsc.br" },
      { nome: "Prof. Paulo Mendes de Carvalho Neto", area: "Equações Diferenciais", formacao: "Dr, USP São Carlos, 2013", sala: "203", fone: "48 3721-3598", email: "paulo.carvalho@ufsc.br" },
      { nome: "Prof. Raphael Falcão da Hora", area: "Análise", formacao: "PhD, Purdue University, 2013", sala: "108", fone: "48 3721-3681", email: "raphael.hora@ufsc.br" },
      { nome: "Prof. Rômulo Maia Vermersch", area: "Sistemas Dinâmicos", formacao: "Dr, UFRJ, 2014", sala: "211", fone: "48 3721-5653", email: "romulo.vermersch@ufsc.br" },
      { nome: "Prof. Ruy Exel Filho", area: "Análise Funcional", formacao: "PhD, University of California, Berkeley, 1985", sala: "312", fone: "48 3721-9458", email: "ruy.exel.filho@ufsc.br" },
      { nome: "Prof. Sérgio Tadao Martins", area: "Geometria e Topologia", formacao: "Dr, USP, 2012", sala: "110", fone: "48 3721-3590", email: "sergio.tadao.martins@ufsc.br" },
      { nome: "Prof. Silvia Martini de Holanda", area: "Matemática Aplicada", formacao: "Dra, Unicamp, 1998", sala: "304", fone: "48 3721-3679", email: "s.holanda@ufsc.br" },
      { nome: "Prof. Virgínia Silva Rodrigues", area: "Álgebra", formacao: "Dra, UFRGS, 2004", sala: "216", fone: "48 3721-3677", email: "v.rodrigues@ufsc.br" },
      { nome: "Prof. Vincent Grandjean", area: "Geometria", formacao: "Dr, Université de Rennes I - France, 2000", sala: "114", fone: "48 3721-xxxx", email: "vincent.grandjean@ufsc.br" },
      { nome: "Prof. Vladimir Pestov", area: "Sistemas Dinâmicos", formacao: "Ph.D, Moscow University, 1984", sala: "210", fone: "48 3721-5656", email: "vladimir.pestov @ externos.ufsc.br"},
      { nome: "Prof. Wagner Barbosa Muniz", area: "Matemática Aplicada", formacao: "PhD, University of Delaware, 2004", sala: "306", fone: "48 3721-3660", email: "w.b.muniz@ufsc.br" }
    ],
    substitutos: [
      { nome: "Prof. Henrique Amador Puel Martins", area: "Matemática", formacao: "xxx", sala: "321", fone: "3721-3596", email: "henrique.martins@ufsc.br" },
      { nome: "Prof. Juan Francisco Camasca Fernandez", area: "Matemática", formacao: "xxx", sala: "317", fone: "3721-3596", email: "juan.fernandez@ufsc.br" },
      { nome: "Prof. Kelen Regina Salles Silva", area: "Matemática", formacao: "xxx", sala: "317", fone: "3721-3596", email: "kelen.r.s.silva@ufsc.br" },
      { nome: "Prof. Maritza Camilli Almeida Brito", area: "Matemática", formacao: "xxx", sala: "321", fone: "3721-3596", email: "maritza.camilli@ufsc.br" },
      { nome: "Prof. Tadeu Zavistanovicz de Almeida", area: "Matemática", formacao: "xxx", sala: "321", fone: "3721-3596", email: "tadeu.almeida@ufsc.br" },
      { nome: "Prof. Victor Luis Espinoza", area: "Matemática", formacao: "xxx", sala: "317", fone: "3721-3596", email: "victor.luis@ufsc.br" }
    ]
  };

  // Extrair áreas únicas e criar os filtros
  const areasDisponiveis = useMemo(() => {
    const lista = professores[abaAtiva].map(p => p.area);
    return ["Todas", ...Array.from(new Set(lista)).sort()];
  }, [abaAtiva]);

  // Filtrar os professores baseado na área selecionada
  const professoresFiltrados = professores[abaAtiva].filter(prof => 
    filtroArea === "Todas" || prof.area === filtroArea
  );

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="bg-[#0a1931] text-white py-20 px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold uppercase tracking-widest">Corpo Docente</h1>
          <div className="h-1 w-20 bg-[#f0c419] mt-4"></div>
          <p className="text-blue-200 mt-6 text-sm uppercase tracking-wider">Departamento de Matemática - CFM</p>
        </div>      
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto mt-10 px-8 flex gap-4 border-b border-gray-200">
        <button 
          onClick={() => { setAbaAtiva("efetivos"); setFiltroArea("Todas"); }}
          className={`pb-4 px-6 font-bold text-xs uppercase tracking-widest transition-all ${abaAtiva === "efetivos" ? "border-b-4 border-blue-600 text-blue-600" : "text-gray-400 hover:text-gray-600"}`}
        >
          Professores Efetivos
        </button>
        <button 
          onClick={() => { setAbaAtiva("substitutos"); setFiltroArea("Todas"); }}
          className={`pb-4 px-6 font-bold text-xs uppercase tracking-widest transition-all ${abaAtiva === "substitutos" ? "border-b-4 border-blue-600 text-blue-600" : "text-gray-400 hover:text-gray-600"}`}
        >
          Professores Substitutos
        </button>
      </div>

      {/* Filtros de Área */}
      <div className="max-w-6xl mx-auto mt-8 px-8 flex flex-wrap gap-2">
        {areasDisponiveis.map((area) => (
          <button
            key={area}
            onClick={() => setFiltroArea(area)}
            className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border
              ${filtroArea === area 
                ? "bg-blue-600 border-blue-600 text-white shadow-md" 
                : "bg-white border-gray-200 text-gray-500 hover:border-blue-400 hover:text-blue-600"}`}
          >
            {area}
          </button>
        ))}
      </div>

      {/* Contador de Resultados */}
      <div className="max-w-6xl mx-auto mt-6 px-8">
        <p className="text-gray-400 text-[10px] uppercase tracking-widest">
          Mostrando {professoresFiltrados.length} resultados
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto py-6 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {professoresFiltrados.map((prof, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group flex flex-col justify-between">
            <div>
              <div className="border-l-4 border-blue-600 pl-4 mb-4">
                <h2 className="text-[#0a1931] font-bold text-md leading-tight group-hover:text-blue-700 transition-colors">
                    {prof.nome}
                </h2>
                <span className="text-[9px] text-blue-500 font-bold uppercase tracking-[0.2em] italic block mt-1">
                    {prof.area}
                </span>
              </div>
              
              <div className="space-y-3 text-xs text-gray-600">
                <div>
                  <span className="font-bold text-gray-400 uppercase text-[8px] block mb-1">Formação</span>
                  <p className="leading-relaxed">{prof.formacao}</p>
                </div>
                
                <div className="flex justify-between items-center py-2 border-t border-gray-50">
                   <div>
                     <span className="font-bold text-gray-400 uppercase text-[8px] block">Sala</span>
                     <p className="font-medium text-[#0a1931]">{prof.sala}</p>
                   </div>
                   <div className="text-right">
                     <span className="font-bold text-gray-400 uppercase text-[8px] block">Telefone</span>
                     <p className="font-medium text-[#0a1931]">{prof.fone}</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="font-bold text-gray-400 uppercase text-[8px]">E-mail</span>
                <a href={`mailto:${prof.email}`} className="text-blue-600 hover:text-blue-800 font-medium transition-colors text-xs">
                    {prof.email}
                </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}