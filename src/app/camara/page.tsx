export default function CamaraPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-8">

  {/* Título com Barra Amarela */}
  <div className="border-l-8 border-[#f0c419] pl-6 mb-12">
    <h1 className="text-4xl font-extrabold text-[#0a1931] ">
      Composição da Câmara de Graduação
    </h1>
    <p className="text-gray-500 text-sm mt-1 font-medium">
      Conheça os membros responsáveis por garantir a qualidade acadêmica do curso
    </p>
  </div>

  <section className="mb-12 text-lg text-gray-500 text-justify leading-relaxed max-w-3xl">
    <ul className="flex flex-col list-none p-0">
    <li>Paulo Mendes de Carvalho Neto - Coordenador de Pesquisa</li>
    <li>Bruno de Lessa Victor</li>
    <li>Rômulo Maia Vermersch</li>
    <li>Maicon Marques Alves</li>
    </ul>
  </section>
  </div>);  
}