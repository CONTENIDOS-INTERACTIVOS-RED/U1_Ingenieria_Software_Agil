export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Principios de metodologías ágiles',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '1. Fundamentos del Manifiesto Ágil',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Introducción',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Principios del Manifiesto Ágil',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipos de metodologías ágiles',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '2. Comparación entre metodologías (Scrum, Kanban)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Scrum',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Kanban',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Herramientas ágiles',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '3. Beneficios y desafíos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Beneficios de las metodologías ágiles',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Retos de las metodologías',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Caso de éxito: Spotify y su enfoque ágil escalado',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Heras del Dedo, R. D. L. & Álvarez García, A. (2017). Métodos ágiles: Scrum, Kanban, Lean. Difusora Larousse - Anaya Multimedia.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/122933',
    },
    {
      referencia:
        'Brunetta, H. (2023). OKRs y métricas de negocios: metodologías ágiles para resultados exitosos. Pluma Digital Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/231789',
    },
    {
      referencia:
        'De Zunzunegui, A. (2023). Gestión de proyectos en AGILE: cómo utilizar las metodologías ágiles para mejorar tu capacidad de respuesta y lanzar proyectos de éxito. LID Editorial España.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/270594',
    },
    {
      referencia:
        'Monte Galiano, J. (2016). Implantar scrum con éxito. Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/58575',
    },
    {
      referencia:
        'Castillo, A. (2010). Conceptualización del proceso de implementación de software: perspectivas ágil y disciplinada. Revista Ciencia e Ingeniería, 31(3).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/17741',
    },
    {
      referencia:
        'Serrano Junco, C. L. (2022). Metodologías ágiles en las pymes: un modelo integral de auditoría en la gestión interna. Corporación Universitaria Minuto de Dios.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/231777',
    },
  ],
  glosario: [
    {
      termino: 'Agilidad',
      significado:
        'Capacidad de responder de manera rápida y flexible a los cambios, buscando entregar valor de forma continua y adaptativa, en proyectos de software.',
    },
    {
      termino: 'Manifiesto Ágil',
      significado:
        'Declaración formal publicada en el 2001, que establece los valores y principios fundamentales de las metodologías ágiles.',
    },
    {
      termino: 'Iteración',
      significado:
        'Ciclo corto y repetitivo de trabajo, en el que se desarrolla una parte funcional del producto para su revisión y mejora.',
    },
    {
      termino: 'Scrum',
      significado:
        'Metodología ágil basada en sprints, roles definidos y reuniones estructuradas, para gestionar proyectos complejos de forma colaborativa.',
    },
    {
      termino: 'Kanban',
      significado:
        'Método visual y flexible que gestiona el flujo de trabajo a través de tableros y límites en el trabajo en curso para mejorar la eficiencia.',
    },
    {
      termino: 'Sprint',
      significado:
        'Periodo de tiempo fijo (normalmente entre 1 y 4 semanas) en el que un equipo Scrum entrega un incremento funcional del producto.',
    },
    {
      termino: 'Product Backlog',
      significado:
        'Lista priorizada de funcionalidades, requisitos y tareas que deben completarse durante el desarrollo de un producto ágil.',
    },
    {
      termino: 'Product Owner',
      significado:
        'Rol en Scrum responsable de maximizar el valor del producto, gestionando el Product Backlog y definiendo prioridades.',
    },
    {
      termino: 'Scrum Master',
      significado:
        'Facilitador del equipo Scrum que se asegura de que la metodología se aplique correctamente, eliminando obstáculos y promoviendo la mejora continua.',
    },
    {
      termino: 'Development Team',
      significado:
        'Grupo de profesionales encargados de construir el producto dentro del marco Scrum, trabajando de forma auto organizada y colaborativa.',
    },
    {
      termino: 'Daily Scrum',
      significado:
        'Reunión diaria breve (máximo 15 minutos) en la que el equipo sincroniza actividades, identifica obstáculos y planifica su trabajo diario.',
    },
    {
      termino: 'Sprint Retrospective',
      significado:
        'Encuentro al final de cada sprint en el que el equipo reflexiona sobre el proceso y propone mejoras para el siguiente ciclo.',
    },
    {
      termino: 'WIP (Work In Progress)',
      significado:
        'Trabajo en curso. En Kanban, se establecen límites para evitar la sobrecarga del equipo y promover un flujo continuo.',
    },
    {
      termino: 'Incremento',
      significado:
        'Resultado funcional y potencialmente entregable que se obtiene al finalizar un sprint. Representa una mejora o ampliación del producto.',
    },
    {
      termino: 'User Story (Historia de Usuario)',
      significado:
        'Descripción breve de una funcionalidad desde la perspectiva del usuario final, que define qué se necesita y por qué.',
    },
    {
      termino: 'Backlog Grooming (Refinamiento)',
      significado:
        'Proceso continuo de revisión, actualización y priorización del Product Backlog para asegurar que esté preparado para los sprints futuros.',
    },
  ],
}
