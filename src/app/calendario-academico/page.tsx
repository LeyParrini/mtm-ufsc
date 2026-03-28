export default function CalendarioAcademicoPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-8">

        {/* Título com Barra Amarela */}
        <div className="border-l-8 border-[#f0c419] pl-6 mb-12">
          <h1 className="text-4xl font-extrabold text-[#0a1931] ">
            Calendário Acadêmico
          </h1>
        </div>

        <section className="mb-12 text-lg text-gray-500 text-justify leading-relaxed max-w-3xl">
          <p className="mb-6">
              O calendário acadêmico da UFSC é cuidadosamente planejado para oferecer uma experiência educacional equilibrada e enriquecedora. Ele inclui datas importantes como início e término dos semestres, períodos de matrícula, feriados acadêmicos, e prazos para atividades como entrega de trabalhos e realização de provas.
          </p>

          <p className="mb-6 text-gray-500 text-justify leading-relaxed max-w-3xl">
              Publicada a Resolução nº 214/2025/CUn de 28 de outubro de 2025, que trata do Calendário Acadêmico de Graduação 2026.
          </p>
        </section>
    
        <div className="bg-[#0a1931] p-8 text-white rounded-sm flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
                <h4 className="font-bold text-[#f0c419]">Calendário Acadêmico 2026</h4>
            </div>
            <a 
                href="https://dae.ufsc.br/files/2025/11/R214-CUn-2025_Calend%C3%A1rio-Acad%C3%AAmico-de-Gradua%C3%A7%C3%A3o_2026.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-[#f0c419] text-[#f0c419] px-6 py-2 hover:bg-[#f0c419] hover:text-[#0a1931] transition-all font-bold text-xs uppercase ">
                Ver Calendário 
            </a>
        </div>
      </div>
  );
}