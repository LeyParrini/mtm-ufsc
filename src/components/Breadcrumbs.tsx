"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

// Dicionário para traduzir as URLs para nomes oficiais
const routeNames: { [key: string]: string } = {
  graduacao: "Graduação",
  bacharelado: "Bacharelado",
  licenciatura: "Licenciatura",
  "bolsas-estagios": "Bolsas e Estágios",
  faq: "Perguntas Frequentes",
  recursos: "Recursos Didáticos",
  eventos: "Eventos",
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter((item) => item !== "");

  return (
    <nav className="bg-gray-50 border-b border-gray-100 py-2">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center text-[10px] md:text-xs uppercase tracking-wider text-gray-500 font-medium">
        
        <Link href="/" className="hover:text-[#0a1931] transition-colors">
          INÍCIO
        </Link>

        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          
          // Busca o nome no dicionário ou formata a palavra
          const displayName = routeNames[segment] || segment.replace(/-/g, " ");

          return (
            <div key={href} className="flex items-center">
              <span className="mx-2 text-gray-300">/</span>
              {isLast ? (
                <span className="text-[#0a1931] font-bold">
                  {displayName}
                </span>
              ) : (
                <Link href={href} className="hover:text-[#0a1931] transition-colors">
                  {displayName}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}