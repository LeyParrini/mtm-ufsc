export default function PesquisaPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-8">

  {/* Título com Barra Amarela */}
  <div className="border-l-8 border-[#f0c419] pl-6 mb-12">
    <h1 className="text-4xl font-extrabold text-[#0a1931] ">
        Áreas de Pesquisa 
    </h1>
    <p className="text-gray-500 text-sm mt-1 font-medium">
        Conheça as linhas de pesquisa do curso de Matemática da UFSC
    </p>
  </div>

  <section className="mb-12 text-lg text-gray-500 text-justify leading-relaxed max-w-3xl">
    <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none', padding: 0 }}>
    <li>Álgebra</li>
    <li>Álgebras de Operadores</li>
    <li>Análise Numérica</li>
    <li>Biomatemática e Sistemas de Controle</li>
    <li>Computação Científica</li>
    <li>Didática da Matemática</li>
    <li>Equações Diferenciais Parciais</li>
    <li>Física Matemática</li>
    <li>Geometria Diferencial</li>
    <li>Modelos Matemáticos e Aplicações às Engenharias</li>
    <li>Otimização</li>
    <li>Sistemas Dinâmicos</li>
    <li>Teoria da Informação</li>
    </ul>
  </section>
  </div>
  );
}