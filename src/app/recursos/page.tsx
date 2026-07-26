"use client";

import { useState } from "react";

export default function RecursosDidaticos() {
  const [cursoSelecionado, setCursoSelecionado] = useState("Bacharelado");
  const [faseSelecionada, setFaseSelecionada] = useState("Fase 1");
  const [busca, setBusca] = useState("");

  // Estrutura de dados separada por curso e fase
  const dadosCursos: Record<string, Array<{ fase: string; disciplinas: Array<{ nome: string; arquivos: Array<{ nome: string; data: string; tamanho: string }> }> }>> = {
    Bacharelado: [
      {
        fase: "Fase 1",
        disciplinas: [
          { nome: "MTM3450 - Fundamentos da Aritmética", arquivos: [{ nome: "prova1.pdf", data: "2022-01-01", tamanho: "120KB" }, { nome: "prova2.pdf", data: "2022-01-02", tamanho: "130KB" }, { nome: "prova3.pdf", data: "2022-01-03", tamanho: "140KB" }] },
          { nome: "MTM3475  - Geometria Analítica", arquivos: [{ nome: "prova1.pdf", data: "2022-02-01", tamanho: "150KB" }, { nome: "prova2.pdf", data: "2022-02-02", tamanho: "160KB" }, { nome: "prova3.pdf", data: "2022-02-03", tamanho: "170KB" }] },
          { nome: "MTM3411 - Laboratório de Matemática I", arquivos: [{ nome: "prova1.pdf", data: "2022-03-01", tamanho: "180KB" }, { nome: "prova2.pdf", data: "2022-03-02", tamanho: "190KB" }, { nome: "prova3.pdf", data: "2022-03-03", tamanho: "200KB" }] },
          { nome: "MTM3400 - Introdução ao Cálculo", arquivos: [{ nome: "prova1.pdf", data: "2022-04-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2022-04-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2022-04-03", tamanho: "220KB" }] }
        ]
      },
      {
        fase: "Fase 2",
        disciplinas: [
          { nome: "MTM3421 - Álgebra Linear I", arquivos: [{ nome: "prova1.pdf", data: "2022-05-01", tamanho: "220KB" }, { nome: "prova2.pdf", data: "2022-05-02", tamanho: "230KB" }, { nome: "prova3.pdf", data: "2022-05-03", tamanho: "240KB" }] },
          { nome: "MTM3401 - Cálculo I", arquivos: [{ nome: "prova1.pdf", data: "2022-06-01", tamanho: "250KB" }, { nome: "prova2.pdf", data: "2022-06-02", tamanho: "260KB" }, { nome: "prova3.pdf", data: "2022-06-03", tamanho: "270KB" }] },
          { nome: "MTM3510 - Introdução à Combinatória e Probabilidade", arquivos: [{ nome: "prova1.pdf", data: "2022-07-01", tamanho: "180KB" }, { nome: "prova2.pdf", data: "2022-07-02", tamanho: "190KB" }, { nome: "prova3.pdf", data: "2022-07-03", tamanho: "200KB" }] },
          { nome: "FSC5101 - Física I ", arquivos: [{ nome: "prova1.pdf", data: "2022-08-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2022-08-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2022-08-03", tamanho: "220KB" }] }
        ]
      },
      {
        fase: "Fase 3",
        disciplinas: [
          { nome: "MTM3402 - Cálculo II", arquivos: [{ nome: "prova1.pdf", data: "2023-01-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2023-01-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2023-01-03", tamanho: "220KB" }] },
          { nome: "MTM3422 - Álgebra Linear II", arquivos: [{ nome: "prova1.pdf", data: "2023-02-01", tamanho: "180KB" }, { nome: "prova2.pdf", data: "2023-02-02", tamanho: "190KB" }, { nome: "prova3.pdf", data: "2023-02-03", tamanho: "200KB" }] },
          { nome: "FSC5002  - Física II", arquivos: [{ nome: "prova1.pdf", data: "2023-03-01", tamanho: "220KB" }, { nome: "prova2.pdf", data: "2023-03-02", tamanho: "230KB" }, { nome: "prova3.pdf", data: "2023-03-03", tamanho: "240KB" }] }
        ]
      },
      {
        fase: "Fase 4",
        disciplinas: [
          { nome: "MTM3403 - Cálculo III", arquivos: [{ nome: "prova1.pdf", data: "2023-03-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2023-03-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2023-03-03", tamanho: "220KB" }] },
          { nome: "MTM3430 - Análise na Reta", arquivos: [{ nome: "prova1.pdf", data: "2023-04-01", tamanho: "180KB" }, { nome: "prova2.pdf", data: "2023-04-02", tamanho: "190KB" }, { nome: "prova3.pdf", data: "2023-04-03", tamanho: "200KB" }] },
          { nome: "FSC5113 - Física III", arquivos: [{ nome: "prova1.pdf", data: "2023-05-01", tamanho: "220KB" }, { nome: "prova2.pdf", data: "2023-05-02", tamanho: "230KB" }, { nome: "prova3.pdf", data: "2023-05-03", tamanho: "240KB" }] },
          { nome: "MTM3451 - Álgebra I", arquivos: [{ nome: "prova1.pdf", data: "2023-06-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2023-06-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2023-06-03", tamanho: "220KB" }] },
        ]
      },
      {
        fase: "Fase 5",
        disciplinas: [
          { nome: "MTM3490 - Introdução à Topologia", arquivos: [{ nome: "prova1.pdf", data: "2023-07-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2023-07-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2023-07-03", tamanho: "220KB" }] },
          { nome: "MTM3452 - Álgebra II", arquivos: [{ nome: "prova1.pdf", data: "2023-08-01", tamanho: "180KB" }, { nome: "prova2.pdf", data: "2023-08-02", tamanho: "190KB" }, { nome: "prova3.pdf", data: "2023-08-03", tamanho: "200KB" }] },
          { nome: "MTM3501 - Equações Diferenciais Ordinárias", arquivos: [{ nome: "prova1.pdf", data: "2023-09-01", tamanho: "220KB" }, { nome: "prova2.pdf", data: "2023-09-02", tamanho: "230KB" }, { nome: "prova3.pdf", data: "2023-09-03", tamanho: "240KB" }] },
          { nome: "MTM3520 - Laboratório de Matemática Computacional", arquivos: [{ nome: "prova1.pdf", data: "2023-10-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2023-10-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2023-10-03", tamanho: "220KB" }] }
        ]
      },
      {
        fase: "Fase 6",
        disciplinas: [
          { nome: "INE5405 - Probabilidade e Estatística ", arquivos: [{ nome: "prova1.pdf", data: "2023-11-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2023-11-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2023-11-03", tamanho: "220KB" }] },
          { nome: "MTM3521 - Métodos Numéricos", arquivos: [{ nome: "prova1.pdf", data: "2024-02-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2024-02-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2024-02-03", tamanho: "220KB" }] },
          { nome: "MTM3431 - Análise I", arquivos: [{ nome: "prova1.pdf", data: "2024-02-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2024-02-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2024-02-03", tamanho: "220KB" }] },
          { nome: "MTM3435 - Variável Complexa", arquivos: [{ nome: "prova1.pdf", data: "2024-02-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2024-02-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2024-02-03", tamanho: "220KB" }] }
        ]
      },
      {
        fase: "Fase 7",
        disciplinas: [
          { nome: "MTM3432 - Análise II", arquivos: [{ nome: "prova1.pdf", data: "2024-03-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2024-03-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2024-03-03", tamanho: "220KB" }] },
          { nome: "MTM3503 - Equações Diferenciais Parciais", arquivos: [{ nome: "prova1.pdf", data: "2024-04-01", tamanho: "180KB" }, { nome: "prova2.pdf", data: "2024-04-02", tamanho: "190KB" }, { nome: "prova3.pdf", data: "2024-04-03", tamanho: "200KB" }] },
          { nome: "MTM3597 - TCC I", arquivos: [{ nome: "prova1.pdf", data: "2024-05-01", tamanho: "220KB" }, { nome: "prova2.pdf", data: "2024-05-02", tamanho: "230KB" }, { nome: "prova3.pdf", data: "2024-05-03", tamanho: "240KB" }] }
        ]
      },
      {
        fase: "Fase 8",
        disciplinas: [
          { nome: "MTM3482 - Geometria Diferencial ", arquivos: [{ nome: "prova1.pdf", data: "2024-05-01", tamanho: "300KB" },{nome: "prova2.pdf", data: "2024-05-02", tamanho: "250KB" },{nome: "prova3.pdf", data: "2024-05-03", tamanho: "200KB" }] },
          { nome: "MTM3524 - Álgebra Linear Computacional ", arquivos: [{ nome: "prova1.pdf", data: "2024-06-01", tamanho: "250KB" }, { nome: "prova2.pdf", data: "2024-06-02", tamanho: "260KB" }, { nome: "prova3.pdf", data: "2024-06-03", tamanho: "270KB" }] },
          { nome: "MTM3598 - TCC II ", arquivos: [{ nome: "prova1.pdf", data: "2024-07-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2024-07-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2024-07-03", tamanho: "220KB" }] }
        ]
      }
    ],
    Licenciatura: [
      { 
        fase: "Fase 1",
        disciplinas: [
          { nome: "MTM3450 - Fundamentos da Aritmética", arquivos: [{ nome: "prova1.pdf", data: "2022-01-01", tamanho: "120KB" }, { nome: "prova2.pdf", data: "2022-01-02", tamanho: "130KB" }, { nome: "prova3.pdf", data: "2022-01-03", tamanho: "140KB" }] },
          { nome: "MTM3471 - Geometria Quantitativa I", arquivos: [{ nome: "prova1.pdf", data: "2022-02-01", tamanho: "150KB" }, { nome: "prova2.pdf", data: "2022-02-02", tamanho: "160KB" }, { nome: "prova3.pdf", data: "2022-02-03", tamanho: "170KB" }] },
          { nome: "MTM3411 - Laboratório de Matemática I", arquivos: [{ nome: "prova1.pdf", data: "2022-03-01", tamanho: "180KB" }, { nome: "prova2.pdf", data: "2022-03-02", tamanho: "190KB" }, { nome: "prova3.pdf", data: "2022-03-03", tamanho: "200KB" }] },
          { nome: "EGR7101 - Desenho Geométrico", arquivos: [{ nome: "prova1.pdf", data: "2022-04-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2022-04-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2022-04-03", tamanho: "220KB" }] },
          { nome: "EED5331 - Teorias da Educação", arquivos: [{ nome: "prova1.pdf", data: "2022-04-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2022-04-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2022-04-03", tamanho: "220KB" }] }
        ] 
      },
      {
        fase: "Fase 2",
        disciplinas: [
          { nome: "EED5187 - Organização Escolar", arquivos: [{ nome: "prova1.pdf", data: "2022-05-01", tamanho: "220KB" }, { nome: "prova2.pdf", data: "2022-05-02", tamanho: "230KB" }, { nome: "prova3.pdf", data: "2022-05-03", tamanho: "240KB" }] },
          { nome: "MTM3400 - Introdução ao Cálculo", arquivos: [{ nome: "prova1.pdf", data: "2022-06-01", tamanho: "250KB" }, { nome: "prova2.pdf", data: "2022-06-02", tamanho: "260KB" }, { nome: "prova3.pdf", data: "2022-06-03", tamanho: "270KB" }] },
          { nome: "MTM3472 - Geometria Quantitativa II", arquivos: [{ nome: "prova1.pdf", data: "2022-07-01", tamanho: "180KB" }, { nome: "prova2.pdf", data: "2022-07-02", tamanho: "190KB" }, { nome: "prova3.pdf", data: "2022-07-03", tamanho: "200KB" }] },
          { nome: "MTM3476 - Geometria Analítica", arquivos: [{ nome: "prova1.pdf", data: "2022-08-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2022-08-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2022-08-03", tamanho: "220KB" }] },
          { nome: "MTM3510 - Introdução à Combinatória e Probabilidade", arquivos: [{ nome: "prova1.pdf", data: "2022-08-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2022-08-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2022-08-03", tamanho: "220KB" }] }
        ]
      },
      {
        fase: "Fase 3",
        disciplinas: [
          { nome: "INE5123 - Estatística Aplicada à Educação Matemática", arquivos: [{ nome: "prova1.pdf", data: "2023-01-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2023-01-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2023-01-03", tamanho: "220KB" }] },
          { nome: "MEN7029 - Metodologia de Ensino de Matemática I", arquivos: [{ nome: "prova1.pdf", data: "2023-02-01", tamanho: "180KB" }, { nome: "prova2.pdf", data: "2023-02-02", tamanho: "190KB" }, { nome: "prova3.pdf", data: "2023-02-03", tamanho: "200KB" }] },
          { nome: "MTM3401 - Cálculo I", arquivos: [{ nome: "prova1.pdf", data: "2023-03-01", tamanho: "220KB" }, { nome: "prova2.pdf", data: "2023-03-02", tamanho: "230KB" }, { nome: "prova3.pdf", data: "2023-03-03", tamanho: "240KB" }] },
          { nome: "MTM3421 - Álgebra Linear I", arquivos: [{ nome: "prova1.pdf", data: "2023-03-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2023-03-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2023-03-03", tamanho: "220KB" }] },
          { nome: "PSI5137 - Psicologia Educacional: Desenvolvimento e Aprendizagem", arquivos: [{ nome: "prova1.pdf", data: "2023-03-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2023-03-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2023-03-03", tamanho: "220KB" }] }
        ]
      },
      {
        fase: "Fase 4",
        disciplinas: [
          { nome: "MEN5605 - Didática E", arquivos: [{ nome: "prova1.pdf", data: "2023-03-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2023-03-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2023-03-03", tamanho: "220KB" }] },
          { nome: "MEN7030 - Metodologia de Ensino de Matemática II", arquivos: [{ nome: "prova1.pdf", data: "2023-04-01", tamanho: "180KB" }, { nome: "prova2.pdf", data: "2023-04-02", tamanho: "190KB" }, { nome: "prova3.pdf", data: "2023-04-03", tamanho: "200KB" }] },
          { nome: "MTM3402 - Cálculo II", arquivos: [{ nome: "prova1.pdf", data: "2023-05-01", tamanho: "220KB" }, { nome: "prova2.pdf", data: "2023-05-02", tamanho: "230KB" }, { nome: "prova3.pdf", data: "2023-05-03", tamanho: "240KB" }] },
          { nome: "MTM3422 - Álgebra Linear II", arquivos: [{ nome: "prova1.pdf", data: "2023-06-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2023-06-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2023-06-03", tamanho: "220KB" }] },
          { nome: "MTM3451 - Álgebra I", arquivos: [{ nome: "prova1.pdf", data: "2023-06-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2023-06-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2023-06-03", tamanho: "220KB" }] }
        ]
      },
      {
        fase: "Fase 5",
        disciplinas: [
          { nome: "MEN7031 - Estágio Supervisionado I - Matemática", arquivos: [{ nome: "prova1.pdf", data: "2023-07-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2023-07-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2023-07-03", tamanho: "220KB" }] },
          { nome: "MTM3403 - Cálculo III", arquivos: [{ nome: "prova1.pdf", data: "2023-08-01", tamanho: "180KB" }, { nome: "prova2.pdf", data: "2023-08-02", tamanho: "190KB" }, { nome: "prova3.pdf", data: "2023-08-03", tamanho: "200KB" }] },
          { nome: "MTM3412 - Laboratório de Matemática II", arquivos: [{ nome: "prova1.pdf", data: "2023-09-01", tamanho: "220KB" }, { nome: "prova2.pdf", data: "2023-09-02", tamanho: "230KB" }, { nome: "prova3.pdf", data: "2023-09-03", tamanho: "240KB" }] },
          { nome: "MTM3452 - Álgebra II", arquivos: [{ nome: "prova1.pdf", data: "2023-10-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2023-10-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2023-10-03", tamanho: "220KB" }] },
          { nome: "MTM3571 - Tecnologias em Educação Matemática", arquivos: [{ nome: "prova1.pdf", data: "2023-10-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2023-10-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2023-10-03", tamanho: "220KB" }] }
        ]
      },
      {
        fase: "Fase 6",
        disciplinas: [
          { nome: "EGC5034 - Projetos Interdisciplinares I", arquivos: [{ nome: "prova1.pdf", data: "2023-11-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2023-11-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2023-11-03", tamanho: "220KB" }] },
          { nome: "FSC5101 - Física I", arquivos: [{ nome: "prova1.pdf", data: "2024-02-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2024-02-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2024-02-03", tamanho: "220KB" }] },
          { nome: "LSB7244 - Língua Brasileira de Sinais - Libras I", arquivos: [{ nome: "prova1.pdf", data: "2024-02-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2024-02-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2024-02-03", tamanho: "220KB" }] },
          { nome: "MTM3430 - Análise na Reta", arquivos: [{ nome: "prova1.pdf", data: "2024-02-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2024-02-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2024-02-03", tamanho: "220KB" }] },
          { nome: "MTM3501 - Equações Diferenciais Ordinárias", arquivos: [{ nome: "prova1.pdf", data: "2024-02-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2024-02-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2024-02-03", tamanho: "220KB" }] },
          { nome: "MTM3561 - Matemática Financeira", arquivos: [{ nome: "prova1.pdf", data: "2024-02-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2024-02-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2024-02-03", tamanho: "220KB" }] }
        ]
      },
      {
        fase: "Fase 7",
        disciplinas: [
          { nome: "EGC5035 - Projetos Interdisciplinares II", arquivos: [{ nome: "prova1.pdf", data: "2024-03-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2024-03-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2024-03-03", tamanho: "220KB" }] },
          { nome: "FSC5002 - Física II", arquivos: [{ nome: "prova1.pdf", data: "2024-04-01", tamanho: "180KB" }, { nome: "prova2.pdf", data: "2024-04-02", tamanho: "190KB" }, { nome: "prova3.pdf", data: "2024-04-03", tamanho: "200KB" }] },
          { nome: "MEN7032 - Estágio Supervisionado II", arquivos: [{ nome: "prova1.pdf", data: "2024-05-01", tamanho: "220KB" }, { nome: "prova2.pdf", data: "2024-05-02", tamanho: "230KB" }, { nome: "prova3.pdf", data: "2024-05-03", tamanho: "240KB" }] },
          { nome: "MTM3490 - Introdução à Topologia", arquivos: [{ nome: "prova1.pdf", data: "2024-05-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2024-05-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2024-05-03", tamanho: "220KB" }] },
          { nome: "MTM3591 - TCC I", arquivos: [{ nome: "prova1.pdf", data: "2024-05-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2024-05-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2024-05-03", tamanho: "220KB" }] }
        ]
      },
      {
        fase: "Fase 8",
        disciplinas: [
          { nome: "MEN7034 - Estágio Supervisionado III", arquivos: [{ nome: "prova1.pdf", data: "2024-06-01", tamanho: "200KB" }, { nome: "prova2.pdf", data: "2024-06-02", tamanho: "210KB" }, { nome: "prova3.pdf", data: "2024-06-03", tamanho: "220KB" }] },
          { nome: "MTM3521 - Métodos Numéricos", arquivos: [{ nome: "prova1.pdf", data: "2024-07-01", tamanho: "180KB" }, { nome: "prova2.pdf", data: "2024-07-02", tamanho: "190KB" }, { nome: "prova3.pdf", data: "2024-07-03", tamanho: "200KB" }] },
          { nome: "MTM3593 - TCC II", arquivos: [{ nome: "prova1.pdf", data: "2024-08-01", tamanho: "220KB" }, { nome: "prova2.pdf", data: "2024-08-02", tamanho: "230KB" }, { nome: "prova3.pdf", data: "2024-08-03", tamanho: "240KB" }] }
        ]
      }
    ]
  };

  // Filtragem dinâmica baseada nos seletores de Curso, Fase e Busca
  const categoriasFiltradas = (dadosCursos[cursoSelecionado] || [])
    .filter((secao) => secao.fase === faseSelecionada)
    .map((secao) => ({
      ...secao,
      disciplinas: secao.disciplinas.filter((disc) =>
        disc.nome.toLowerCase().includes(busca.toLowerCase())
      )
    }));

  return (
    <main className="min-h-screen bg-[#f4f7f9] text-[#1a202c]">
      <div className="bg-[#0a1931] py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-white uppercase tracking-tight">Repositório de Material Didático</h1>
          <p className="text-gray-400 text-[10px] mt-2 uppercase tracking-[0.2em] font-bold">Departamento de Matemática - UFSC</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        
        {/* Painel de Filtros Duplos */}
        <div className="bg-white border border-gray-200 p-5 mb-10 flex flex-col md:flex-row items-center gap-4 text-[11px]">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="font-black text-[#0a1931] uppercase whitespace-nowrap">Curso:</span>
            <select 
              value={cursoSelecionado}
              onChange={(e) => setCursoSelecionado(e.target.value)}
              className="w-full md:w-48 bg-gray-50 border border-gray-300 p-2 rounded focus:outline-none font-bold text-gray-600 cursor-pointer"
            >
              <option value="Bacharelado">Bacharelado</option>
              <option value="Licenciatura">Licenciatura</option>
            </select>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="font-black text-[#0a1931] uppercase whitespace-nowrap">Fase:</span>
            <select 
              value={faseSelecionada}
              onChange={(e) => setFaseSelecionada(e.target.value)}
              className="w-full md:w-40 bg-gray-50 border border-gray-300 p-2 rounded focus:outline-none font-bold text-gray-600 cursor-pointer"
            >
              <option value="Fase 1">Fase 1</option>
              <option value="Fase 2">Fase 2</option>
              <option value="Fase 3">Fase 3</option>
              <option value="Fase 4">Fase 4</option>
              <option value="Fase 5">Fase 5</option>
              <option value="Fase 6">Fase 6</option>
              <option value="Fase 7">Fase 7</option>
              <option value="Fase 8">Fase 8</option>
            </select>
          </div>

          <div className="flex-1 w-full">
            <input 
              type="text" 
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Pesquisar por código (MTM...) ou nome da matéria" 
              className="w-full bg-gray-50 border border-gray-300 p-2 rounded focus:outline-none focus:border-[#0a1931] font-medium"
            />
          </div>
        </div>

        {/* Listagem de Disciplinas */}
        <div className="space-y-8">
          {categoriasFiltradas.length > 0 && categoriasFiltradas[0].disciplinas.length > 0 ? (
            categoriasFiltradas.map((secao, i) => (
              <div key={i}>
                <h2 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4 pb-2 border-b-2 border-gray-200">
                  Disciplinas da {secao.fase} - {cursoSelecionado}
                </h2>

                <div className="grid grid-cols-1 gap-3">
                  {secao.disciplinas.map((disc, j) => (
                    <details key={j} className="group bg-white border border-gray-200 transition-all shadow-sm">
                      <summary className="list-none p-5 cursor-pointer flex justify-between items-center hover:bg-gray-50 select-none">
                        <div className="flex items-center gap-4">
                          <span className="text-[#0a1931] text-lg">📁</span>
                          <span className="font-bold text-[#0a1931] text-sm uppercase tracking-tighter italic">{disc.nome}</span>
                        </div>
                        <div className="flex items-center gap-6">
                          <span className="hidden md:inline text-[9px] bg-gray-100 px-2 py-1 rounded font-bold uppercase text-gray-500">
                            {disc.arquivos.length} Documentos disponíveis
                          </span>
                          <span className="text-[#f0c419] group-open:rotate-180 transition-transform font-bold">▼</span>
                        </div>
                      </summary>

                      <div className="border-t border-gray-100">
                        <table className="w-full text-left text-[11px]">
                          <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                              <th className="p-4 font-black text-gray-500 uppercase tracking-widest">Identificação do Arquivo</th>
                              <th className="p-4 font-black text-gray-500 uppercase tracking-widest">Publicação</th>
                              <th className="p-4 font-black text-gray-500 uppercase tracking-widest">Tamanho</th>
                              <th className="p-4 text-right font-black text-gray-500 uppercase tracking-widest">Ação</th>
                            </tr>
                          </thead>
                          <tbody>
                            {disc.arquivos.map((arq, k) => (
                              <tr key={k} className="border-b border-gray-50 hover:bg-blue-50/50 transition-colors">
                                <td className="p-4 flex items-center gap-3">
                                  <span className="bg-red-600 text-white px-1.5 py-0.5 rounded text-[8px] font-black">PDF</span>
                                  <span className="text-gray-800 font-bold">{arq.nome}</span>
                                </td>
                                <td className="p-4 text-gray-500 font-mono">{arq.data}</td>
                                <td className="p-4 text-gray-400 font-bold">{arq.tamanho}</td>
                                <td className="p-4 text-right">
                                  <button className="bg-[#0a1931] text-white px-4 py-2 rounded text-[9px] font-black uppercase tracking-widest hover:bg-blue-800 transition-all">
                                    Download
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white p-8 border border-gray-200 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">
              Nenhuma disciplina encontrada para esta fase/curso no momento.
            </div>
          )}
        </div>

        {/* Banner de Contribuição */}
        <div className="mt-20">
          <div className="bg-[#0a1931] p-10 border-l-8 border-[#f0c419] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-white font-bold text-xl uppercase tracking-tighter italic">Contribuição Acadêmica</h3>
              <p className="text-gray-400 text-xs mt-2 leading-relaxed uppercase tracking-wider">
                Colabore enviando provas, listas de exercícios ou notas de aula digitalizadas. 
                Sua contribuição ajuda a manter o acervo atualizado para todos os alunos.
              </p>
            </div>
            <button className="whitespace-nowrap bg-[#f0c419] text-[#0a1931] px-12 py-4 font-black uppercase text-xs tracking-[0.2em] hover:bg-yellow-500 transition-all shadow-xl active:scale-95">
              Enviar Documento
            </button>
          </div>
          <p className="mt-4 text-[9px] text-gray-400 text-right uppercase font-bold tracking-widest">
            * Sujeito a moderação pela secretaria do departamento
          </p>
        </div>
      </div>
    </main>
  );
}