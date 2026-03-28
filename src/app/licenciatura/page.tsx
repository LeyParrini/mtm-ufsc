export default function LicenciaturaPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-8">

      {/* Título com Barra Amarela */}
      <div className="border-l-8 border-[#f0c419] pl-6 mb-12">
        <h1 className="text-4xl font-extrabold text-[#0a1931]">
          Licenciatura em Matemática
        </h1>
        <p className="text-gray-500 text-sm mt-1 font-medium">
          Foco em ensino e formação de professores
        </p>
      </div>

      <section className="mb-6 text-gray-500 text-justify leading-relaxed max-w-3xl">
        <p className="mb-6">
          O objetivo da Licenciatura em Matemática é formar professores criativos, capazes de relacionar assuntos e áreas, inserir os temas em contextos mais amplos e responder às necessidades de seus alunos de 1° e 2° graus. 
        </p>

        <p className="mb-6 text-gray-500 text-justify leading-relaxed max-w-3xl">
          O aluno irá desenvolver os conhecimentos em termos de conteúdos, metodologias de ensino, responsabilidades e consciência profissional. A habilitação Licenciatura busca formar um professor crítico e seguro através de um aprendizado progressivo e gradual, iniciando com matérias que preparam o aluno para as disciplinas mais avançadas, sendo finalizado com o Trabalho de Conclusão de Curso (TCC) e os Estágios Curriculares.
        </p>
      </section>

      {/* Atuação do Licenciado */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          { t: "Ensino Fundamental e Médio", d: "Docência em escolas públicas e privadas, com foco no desenvolvimento do raciocínio lógico." },
          { t: "Produção de Conteúdo", d: "Elaboração de material didático, livros e softwares educacionais para editoras e plataformas online." },
          { t: "Gestão Educacional", d: "Atuação em coordenação pedagógica, direção escolar e consultoria em políticas públicas de ensino." }
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
          href="https://cagr.sistemas.ufsc.br/relatorios/curriculoCurso?curso=223" 
          target="_blank" 
          rel="noopener noreferrer"
          className="border border-[#f0c419] text-[#f0c419] px-6 py-2 hover:bg-[#f0c419] hover:text-[#0a1931] transition-all font-bold text-xs uppercase ">
            Ver Currículo do Curso
          </a>
      </div>
    </div>
  );
}