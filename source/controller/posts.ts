import { Request, Response, NextFunction } from "express";

// getting all posts
const getMyLinkedInData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(200).json({
    public_identifier: "alex-devops3997",
    profile_pic_url:
      "https://s3.us-west-000.backblazeb2.com/proxycurl/person/alex-devops3997/profile?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=0004d7f56a0400b0000000001%2F20220613%2Fus-west-000%2Fs3%2Faws4_request&X-Amz-Date=20220613T145646Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=b8e9f293a409b51012c8674979180a1ef4471c7266f8c6b11f5f0761835e571d",
    background_cover_image_url: null,
    first_name: "Alexandre",
    last_name: "Guimarães",
    full_name: "Alexandre Guimarães",
    occupation: "Java Web Developer at Ília Digital",
    headline: null,
    summary:
      'Estou buscando me especializar em Java no momento. Meu objetivo é me tornar um desenvolvedor fullstack versátil, sempre aprender novas linguagens e frameworks e causar um impacto positivo para a empresa e todos os meu colegas.\n\nA minha "conquista profissional" mais relevante até agora (com exceção do que eu estou fazendo na minha empresa atual) foi essa, pois eu percebi que como economista eu sou um ótimo programador:\n\n"Em meu trabalho conclusão de curso busquei integrar as áreas de tecnologia da informação e economia, de forma a gerar uma forma mais eficiente para estudar dados agregados de todos os estados brasileiros utilizando a maior quantidade de variáveis disponíveis, com esse objetivo, à medida que fui entrando em contato com novas linguagens de programação, bancos de dados e ferramentas de machine learning é elaboração de relatórios interativos utilizei as ferramentas elaboradas por universidades e comunidades open-source, como resultado final de um longo processo de aprendizagem em business Intelligence (BI) consegui realizar o estudo utilizando os dados abertos da Previdência Social, a PNAD (Pesquisa Nacional por amostra de domicílios) e outros dados econômicos do IBGE e IpeaData para verificar se a Previdência Social impacta e como impacta a economia em nível nacional, separado por estado. \n\nEm meu TCC demonstrei passo a passo o meu processo de estudo dos estados brasileiros utilizando por volta de 30 variáveis em duas séries históricas diferentes. " - Currículo, Lêlê 2020.',
    country: "BR",
    country_full_name: "Brazil",
    city: "Brasília",
    state: "Federal District",
    experiences: [
      {
        starts_at: {
          day: 1,
          month: 4,
          year: 2022,
        },
        ends_at: null,
        company: "Ília Digital",
        company_linkedin_profile_url:
          "https://www.linkedin.com/company/aisdigital-ilia/",
        title: "Java Web Developer",
        description: null,
        location: "Brasília, Federal District, Brazil",
        logo_url:
          "https://media-exp1.licdn.com/dms/image/C4D0BAQEk8-s8VX3FDQ/company-logo_400_400/0/1603215267196?e=1660780800&v=beta&t=GnnBGqADDdqtpaX2wnogGE54HIp2mbDzGvFswaYGan4",
      },
      {
        starts_at: {
          day: 1,
          month: 8,
          year: 2021,
        },
        ends_at: {
          day: 31,
          month: 3,
          year: 2022,
        },
        company: "Asset Tecnologia e Dados",
        company_linkedin_profile_url:
          "https://www.linkedin.com/company/asset-tecnologia-e-dados/",
        title: "Java Web Developer",
        description: null,
        location: "Brasília",
        logo_url:
          "https://media-exp1.licdn.com/dms/image/C4D0BAQEGBEfRRAXYDA/company-logo_400_400/0/1631811765513?e=1660780800&v=beta&t=4j5u4xMQ6xzk3YJm9uvODDT26sBmP0qQNGqYZfHl6oc",
      },
      {
        starts_at: {
          day: 1,
          month: 3,
          year: 2021,
        },
        ends_at: {
          day: 31,
          month: 7,
          year: 2021,
        },
        company: "Cabral Mídias Digitais",
        company_linkedin_profile_url: null,
        title: "Java Web Developer",
        description: null,
        location: "Brasília, Distrito Federal, Brasil",
        logo_url: null,
      },
      {
        starts_at: {
          day: 1,
          month: 7,
          year: 2019,
        },
        ends_at: {
          day: 31,
          month: 8,
          year: 2020,
        },
        company: "SEMOB",
        company_linkedin_profile_url: "https://www.linkedin.com/company/semob/",
        title: "Intern",
        description: null,
        location: "Brasília, Distrito Federal, Brasil",
        logo_url: null,
      },
    ],
    education: [
      {
        starts_at: {
          day: 1,
          month: 1,
          year: 2020,
        },
        ends_at: {
          day: 31,
          month: 12,
          year: 2023,
        },
        field_of_study: "Analysis and software development",
        degree_name: "BachelorBachelor",
        school: "UNOPAR",
        school_linkedin_profile_url: null,
        description: null,
        logo_url: null,
      },
      {
        starts_at: {
          day: 1,
          month: 1,
          year: 2016,
        },
        ends_at: {
          day: 31,
          month: 12,
          year: 2020,
        },
        field_of_study: "Economics",
        degree_name: "BachelorBachelor",
        school: "UPIS",
        school_linkedin_profile_url: null,
        description: null,
        logo_url: null,
      },
    ],
    languages: [],
    accomplishment_organisations: [],
    accomplishment_publications: [],
    accomplishment_honors_awards: [],
    accomplishment_patents: [],
    accomplishment_courses: [],
    accomplishment_projects: [],
    accomplishment_test_scores: [],
    volunteer_work: [],
    certifications: [],
    connections: null,
    people_also_viewed: [
      {
        link: "https://www.linkedin.com/in/daniel-freitas-mba-70bb03209",
        name: "Daniel Freitas MBA",
        summary:
          "Técnico de Suporte | Formação Superior em Análise e Desenvolvimento de Sistemas | Pós-graduação em Ciências de Dados",
        location: null,
      },
      {
        link: "https://www.linkedin.com/in/tiago-polo-803207171",
        name: "Tiago Polo",
        summary: "Application Developer - Java & Web Technologies | IBM",
        location: null,
      },
      {
        link: "https://www.linkedin.com/in/leonardo-jacobina-mesquita-824646152",
        name: "Leonardo Jacobina Mesquita",
        summary: "Full Stack Web-Developer",
        location: null,
      },
      {
        link: "https://www.linkedin.com/in/eduardosantosalm",
        name: "Eduardo Dos Santos Alecrim",
        summary: "Desenvolvedor Web Jr. | Cast Group",
        location: null,
      },
      {
        link: "https://www.linkedin.com/in/fernando-nazareth-torres-b1428b1a0",
        name: "Fernando Nazareth Torres",
        summary: "Full Stack Java Developer | Banco Central | Cast group",
        location: null,
      },
      {
        link: "https://www.linkedin.com/in/giovanimarques",
        name: "Giovani Marques",
        summary: "Desenvolvedor Web/Java na Quality S.A.",
        location: null,
      },
      {
        link: "https://www.linkedin.com/in/gylson-trindade-59441874",
        name: "Gylson  Trindade",
        summary:
          "Bacharel Sistema de informação Pós-graduando Ciências de Dados-PUC MINAS.",
        location: null,
      },
      {
        link: "https://www.linkedin.com/in/arvizzoni",
        name: "André Vizzoni",
        summary: "Data scientist at IBM",
        location: null,
      },
      {
        link: "https://www.linkedin.com/in/clara-serpa",
        name: "Clara Serpa",
        summary:
          "Estudante de Biotecnologia - UFSJ | Profissão Biotec | LiNA UFSJ | Violinista",
        location: null,
      },
      {
        link: "https://www.linkedin.com/in/emersonferreirasilva1992",
        name: "Emerson Ferreira da Silva",
        summary: "Analista de Sistemas",
        location: null,
      },
    ],
    recommendations: [],
    activities: [],
    similarly_named_profiles: [],
    articles: [],
    groups: [],
  });
};

export default { getMyLinkedInData };
