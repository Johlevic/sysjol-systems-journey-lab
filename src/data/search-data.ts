export interface SearchItem {
  title: string;
  description: string;
  category: "Páginas" | "Sistemas" | "Cursos" | "Laboratorio";
  href: string;
}

export const searchData: SearchItem[] = [
  // Páginas
  {
    title: "Inicio",
    description: "Página principal de SysJoL.",
    category: "Páginas",
    href: "/",
  },
  {
    title: "Sistemas",
    description: "Infraestructura, Backend y APIs escalables.",
    category: "Páginas",
    href: "/systems",
  },
  {
    title: "Journey",
    description: "Transformación Digital y Estrategia empresarial.",
    category: "Páginas",
    href: "/journey",
  },
  {
    title: "Lab",
    description: "Laboratorio de innovación y proyectos experimentales.",
    category: "Páginas",
    href: "/lab",
  },
  {
    title: "Cursos",
    description: "Explora nuestra oferta educativa técnica.",
    category: "Páginas",
    href: "/courses",
  },

  // Sistemas (Capabilities)
  {
    title: "Backend Moderno",
    description: "Node.js, Python y .NET Core para motores robustos.",
    category: "Sistemas",
    href: "/systems",
  },
  {
    title: "Infraestructura Cloud",
    description: "AWS, Azure y Google Cloud con Docker/Kubernetes.",
    category: "Sistemas",
    href: "/systems",
  },
  {
    title: "IA & Machine Learning",
    description: "Modelos LLM y visión artificial para procesos complejos.",
    category: "Sistemas",
    href: "/systems",
  },
  {
    title: "Arquitectura de Datos",
    description: "PostgreSQL, MongoDB y Redis de alta velocidad.",
    category: "Sistemas",
    href: "/systems",
  },

  // Cursos (From CoursesSection)
  {
    title: "Microsoft Excel Avanzado",
    description: "Tablas dinámicas, macros y análisis profesional.",
    category: "Cursos",
    href: "/courses",
  },
  {
    title: "Java Spring Boot",
    description: "Microservicios escalables con el líder de Java.",
    category: "Cursos",
    href: "/courses",
  },
  {
    title: "Ecosistema .NET",
    description: "C# y .NET Core multiplataforma.",
    category: "Cursos",
    href: "/courses",
  },
  {
    title: "Laravel Framework",
    description: "Desarrollo web elegante con PHP.",
    category: "Cursos",
    href: "/courses",
  },
  {
    title: "Robótica con Arduino",
    description: "Electrónica y programación desde cero.",
    category: "Cursos",
    href: "/courses",
  },
  {
    title: "Ingeniería de Prompt",
    description: "Maximiza tu productividad con IAs generativas.",
    category: "Cursos",
    href: "/courses",
  },
  {
    title: "Curso de Python",
    description: "Certificación profesional intensiva de 4 semanas.",
    category: "Cursos",
    href: "/python-course",
  },

  // Laboratorio (Projects)
  {
    title: "Automatización n8n & Email",
    description: "Workflow de notificaciones y Google Sheets.",
    category: "Laboratorio",
    href: "/lab",
  },
  {
    title: "Sentiment Analysis Suite",
    description: "NLP con FastAPI y React.",
    category: "Laboratorio",
    href: "/lab",
  },
  {
    title: "LedPantallas Ecommerce",
    description: "Ecommerce optimizado para pantallas LED.",
    category: "Laboratorio",
    href: "/lab",
  },
  {
    title: "Surgical Robot Control",
    description: "Lógica para robot quirúrgico con .NET.",
    category: "Laboratorio",
    href: "/lab",
  },
  {
    title: "Cyberpunk Memory Game",
    description: "Juego de memoria con estética cyberpunk.",
    category: "Laboratorio",
    href: "/lab",
  },
];
