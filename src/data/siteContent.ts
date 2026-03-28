{/*Mini banco de dados*/}
export type Pagina = {
  titulo: string;
  url: string;
  descricao: string;
};

export const paginas: Pagina[] = [
  { 
    titulo: "Bolsas Estudantis - MTM UFSC", 
    url: "/bolsas", 
    descricao: "Informações sobre editais de bolsas de treinamento profissional, monitoria e auxílios para estudantes de graduação." 
  },
  { 
    titulo: "Bacharelado em Matemática", 
    url: "/bacharelado", 
    descricao: "Página oficial do curso de Bacharelado. Confira a grade curricular, corpo docente e objetivos do curso." 
  },
  {
    titulo: "Licenciatura em Matemática",
    url: "/licenciatura",
    descricao: "Informações sobre o curso de Licenciatura em Matemática, incluindo grade curricular, corpo docente e oportunidades de estágio."
  },
  {
    titulo: "Monitoria Acadêmica",
    url: "/monitoria",
    descricao: "Saiba como se tornar monitor, quais disciplinas estão com vagas abertas e os benefícios de participar do programa de monitoria."
  },
  {
    titulo: "Publicações e Pesquisas",
    url: "/pesquisa",
    descricao: "Acesse as publicações científicas, projetos de pesquisa e grupos de estudo do departamento de matemática."
  },
  {
    titulo: "Programa de Educação Tutorial (PET)",
    url: "/pet",
    descricao: "Informações sobre o Programa de Educação Tutorial, seus objetivos, atividades e como participar."
  },
  {
    titulo: "Laboratório de Estudos de Matemática e Tecnologia (LEMAT)",
    url: "/lemat",
    descricao: "Conheça o LEMAT, seus projetos, pesquisas e como os estudantes podem se envolver."
  },

  { 
  titulo: "Administração", 
  url: "/administracao", 
  descricao: "Informações sobre a Chefia do Departamento e Secretarias Administrativas." 
  }
];