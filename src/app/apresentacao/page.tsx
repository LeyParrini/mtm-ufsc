export default function ApresentacaoPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-8">

  {/* Título com Barra Amarela */}
  <div className="border-l-8 border-[#f0c419] pl-6 mb-12">
    <h1 className="text-4xl font-extrabold text-[#0a1931]">
      Conheça o Curso de Matemática
    </h1>
    <p className="text-gray-500 text-sm mt-1 font-medium">
      Excelência acadêmica e formação curricular completa
    </p>
  </div>

  <section className="mb-12 text-lg text-gray-500 text-justify leading-relaxed max-w-3xl">
    <p className="mb-6">
      Na UFSC, a Matemática vai muito além dos números. Oferecemos uma formação sólida e integrada, 
      preparando você para os desafios da ciência, da tecnologia e da educação contemporânea. 
      Com currículos modernos e atualizados, garantimos uma base científica de alto nível.
    </p>
  </section>

  {/* Cards */}
  <div className="grid md:grid-cols-2 gap-8 mb-16">
    <div className="bg-gray-50 p-8 border-t-4 border-[#0a1931] shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-[#0a1931] font-bold text-xl mb-3">Bacharelado</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Focado na pesquisa científica pura e aplicada, ideal para quem deseja seguir carreira acadêmica 
        ou atuar em setores de alta tecnologia e inovação.
      </p>
    </div>

    <div className="bg-gray-50 p-8 border-t-4 border-[#f0c419] shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-[#0a1931] font-bold text-xl mb-3">Licenciatura</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Desenvolvido para formar os educadores do futuro, com base matemática rigorosa e 
        excelência pedagógica para o ensino básico e superior.
      </p>
    </div>
  </div>

  {/* Seção de Informações Complementares */}
  <div className="grid md:grid-cols-3 gap-12 text-sm text-gray-600 italic">
    <div>
      <h4 className="font-bold text-[#0a1931] not-italic mb-2">Localização</h4>
      <p>Aulas integralmente ministradas no Campus Trindade, otimizando o deslocamento estudantil.</p>
    </div>
    <div>
      <h4 className="font-bold text-[#0a1931] not-italic mb-2">Regime</h4>
      <p>Cursos oferecidos no período diurno, podendo exigir dedicação em tempo integral.</p>
    </div>
    <div>
      <h4 className="font-bold text-[#0a1931] not-italic mb-2">Vigência</h4>
      <p>Projetos pedagógicos atualizados pelo NDE para atender às demandas atuais.</p>
    </div>
  </div>
</div>);
}
