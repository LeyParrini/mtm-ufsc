export default function BachareladoPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-8">

      {/* Título com Barra Amarela */}
      <div className="border-l-8 border-[#f0c419] pl-6 mb-12">
        <h1 className="text-4xl font-extrabold text-[#0a1931]">
          Bacharelado em Matemática
        </h1>
        <p className="text-gray-500 text-sm mt-1 font-medium">
          Foco em pesquisa científica e inovação tecnológica
        </p>
      </div>

      <section className="mb-6 text-gray-500 text-justify leading-relaxed max-w-3xl">
        <p className="mb-6">
          O curso de Bacharelado em Matemática da UFSC prepara o aluno para que ao término do curso ele esteja habilitado a prosseguir seus estudos ingressando num programa de Pós-Graduação em Matemática (pura ou aplicada) ou áreas afins, com vistas às atividades de Pesquisa/Ensino, ou ainda ingressar no mercado de trabalho, atuando em áreas que se beneficiam de um sólido conhecimento de matemática.
        </p>

        <p className="mb-6 text-gray-500 text-justify leading-relaxed max-w-3xl">
          O curso tem por objetivo formar profissionais capazes de refletir sobre os conceitos da Matemática, desenvolver novas teorias e demonstrar resultados que levem avante o conhecimento científico.
        </p>
      </section>

      {/* Atuação do Bacharel */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          { t: "Pesquisa Acadêmica", d: "Preparação sólida para Mestrado e Doutorado nas melhores instituições." },
          { t: "Setor Tecnológico", d: "Atuação em Ciência de Dados, Criptografia e Inteligência Artificial." },
          { t: "Mercado Financeiro", d: "Modelagem matemática e análise de risco para grandes instituições." }
        ].map((item, i) => (
          <div key={i} className="bg-gray-50 p-6 border-b-2 border-[#0a1931]">
            <h3 className="font-bold text-[#0a1931] mb-2">{item.t}</h3>
            <p className="text-sm text-gray-600 leading-snug">{item.d}</p>
          </div>
        ))}
      </div>

      {/* Currículo */}
      <div className="bg-[#0a1931] p-8 text-white rounded-sm flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h4 className="font-bold text-[#f0c419]">Grade curricular</h4>
          <p className="text-sm opacity-80">Informações sobre horários e aulas aos alunos.</p>
        </div>
          <a 
          href="https://cagr.sistemas.ufsc.br/relatorios/curriculoCurso?curso=224" 
          target="_blank" 
          rel="noopener noreferrer"
          className="border border-[#f0c419] text-[#f0c419] px-6 py-2 hover:bg-[#f0c419] hover:text-[#0a1931] transition-all font-bold text-xs uppercase ">
            Ver Currículo do Curso
          </a>
      </div>
    </div>
  );
}