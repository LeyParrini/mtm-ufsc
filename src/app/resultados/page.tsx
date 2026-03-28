import Link from "next/link";
import { paginas } from "@/data/siteContent";

type Props = {
  searchParams: Promise<{ q?: string }> | { q?: string };
};

export default async function Resultados({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const queryRaw = resolvedParams.q || "";
  const query = queryRaw.toLowerCase().trim();

  const resultados = paginas.filter((pagina) =>
    pagina.titulo.toLowerCase().includes(query) || 
    pagina.url.toLowerCase().includes(query)
  );

  const encontrou = query !== "" && resultados.length > 0;

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <p className="text-sm text-gray-500 mb-6">
        Aproximadamente {resultados.length} resultados encontrados para <span className="italic">"{queryRaw}"</span>
      </p>

      {encontrou ? (
        <div className="space-y-8">
          {resultados.map((pagina, index) => (
            <div key={index} className="group">
              {/* URL Estilo Google */}
              <p className="text-sm text-gray-700 truncate mb-1">
                MTM UFSC {'>'} {pagina.url.replace("/", "")}
              </p>
              
              {/* Título Estilo Google */}
              <Link href={pagina.url}>
                <h3 className="text-xl text-blue-800 font-medium group-hover:underline decoration-blue-800 mb-1">
                  {pagina.titulo}
                </h3>
              </Link>
              
              {/* Descrição Estilo Google */}
              <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
                {pagina.descricao}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-red-50 p-6 rounded-lg border border-red-100">
          <p className="text-red-600 font-bold">Busca não encontrada.</p>
          <p className="text-sm text-red-500">Tente termos como: Bacharelado, Monitoria ou Bolsas.</p>
        </div>
      )}
    </div>
  );
}