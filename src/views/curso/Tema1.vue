<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'1. Fundamentos del Manifiesto Ágil'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
      
      // Bloque: bloque-img
      .bg-color-4.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") En el desarrollo de #[em software] y en las ramas de gestión de proyectos, es muy importante tener presente una metodología no solo para el desarrollo sino para la gestión y forma de trabajo, en un proyecto. Por eso, hay una gran diversidad de formas de trabajo o marcos que se pueden aplicar. En los proyectos de tiempos atrás, se hacía una gestión tradicional o estándar al igual que se usaban marcos de trabajo de desarrollo estrictos y rígidos, esto en proyectos se conocía como un comportamiento lineal o "cascada".
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema1/1.png', alt='')

      // Bloque: figura-completa  
      .titulo-figura.mb-2
        h5 Figura 1. 
        span Modelo Cascada
      
      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in", style="max-width: 637px").mx-auto

      // Bloque: imagen-texto-iconobloque
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 Ahora con la evolución de las tecnologías y el mundo, se está viviendo en una sociedad rápida y cambiante; las necesidades de los clientes se modifican constantemente y los equipos de desarrollo deben poderse adaptar a los cambios. Con lo anterior nacen las metodologías ágiles, las cuales se concretaron con el Manifiesto Ágil, un compendio de 12 principios y 4 valores que cambiaron la forma de trabajo de los equipos de desarrollo y la gestión de los proyectos.
          
          .bg-color-2.p-4(data-aos="fade-left").mb-0
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema1/4.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Con la transformación digital, los marcos de trabajo ágil se han convertido en una pieza fundamental para los proyectos de #[em software], y también hay equipos de trabajo de múltiples disciplinas que tienen casos de éxitos aplicando estas metodologías.

      // Bloque: título segundo
      #t_1_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.1.] Introducción a las metodologías ágiles

      // Bloque: color-imagen (ajustado para imagen a la derecha y texto en caja de color)
      .row.mb-4
        .col-lg-8
          .bg-color-1.px-4.p-lg-5(data-aos="fade-left").mb-4
            h3.mb-5 Durante décadas, los proyectos de #[em software] se abordaron desde una lógica predictiva.
            
            p.mb-3 El modelo tradicional en cascada, por ejemplo, partía de la premisa de que todos los requisitos podían conocerse y documentarse al inicio, y que el proyecto podía ejecutarse de manera secuencial. Sin embargo, en la práctica, esto rara vez ocurría. Las necesidades del cliente evolucionan, los errores no se descubren sino hasta fases avanzadas, y los productos terminaban entregándose tarde, incompletos o con poco valor.
            
            p.mb-3 Frente a este panorama, comenzó a gestarse un cambio de paradigma. Se requerían nuevas formas de trabajo que favorecieron la adaptabilidad, la colaboración continua y la entrega temprana de valor. Fue así como en el 2001, un grupo de diecisiete expertos en desarrollo de #[em software], redactó el Manifiesto Ágil, dando origen a un movimiento que revolucionó la ingeniería del #[em software].
            
            p.mb-0 #[strong La anterior frase es como comienza el Manifiesto Ágil indicando que se está mejorando un proceso y con la experiencia, evolucionando las formas de trabajo.]
        
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in").mb-4.mb-lg-0

      // Bloque: texto
      p(data-aos="fade-left").mb-4 Con ese documento del Manifiesto Ágil, se comenzará el resto del contenido de esta unidad; el manifiesto fue publicado en el 2001 a partir de la idea de 17 desarrolladores de #[em software] (Kent Beck, Mike Beedle, Arie van Bennekum, Alistair Cockburn, Ward Cunningham, Martin Fowler, James Grenning, Jim Highsmith, Andrew Hunt, Ron Jeffries, Jon Kern, Brian Marick, Robert C. Martin, Steve Mellor, Ken Schwaber, Jeff Sutherland, Dave Thomas), que necesitaban contar con una forma diferente de trabajo, para procesos de desarrollo cambiantes y no lineales.
      
      p(data-aos="fade-left").mb-5 #[strong A continuación, se revisarán los 4 valores y 12 principios que contempla el documento.]

      // Bloque: título segundo
      #t_1_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.2] Principios de metodologías ágiles

      // Bloque: texto-imagen 8:4
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 Antes de dar inicio a los principios del Manifiesto Ágil, es importante conocer los 4 valores sobre los cuales se fundamenta. Estos 4 valores dan vida al Manifiesto Ágil y se constituyen en parte esencial del marco de trabajo.
          
          p(data-aos="fade-left") #[strong El Manifiesto Ágil plantea cuatro valores que priorizan lo humano, lo útil y lo adaptable, por encima de lo rígido y preestablecido:]
        
        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema1/6.svg", data-aos="zoom-in").mb-4.mb-lg-0

      .bg-full-width.bg-gradiente-2
        .px-4.p-md-5

          // Bloque: tarjetas-boton (4 tarjetas)
          div.row.justify-content-center.align-items-stretch.mb-5
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema1/7.svg"
                  alt=""
                  style="width: 100px"
                )
                h4.mb-2.text-center Individuos e interacciones sobre procesos y herramientas
                p.mb-0.text-center El éxito de un proyecto depende más de la comunicación efectiva, que de la sofisticación de las herramientas empleadas.
            
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema1/8.svg"
                  alt=""
                  style="width: 100px"
                )
                h4.mb-2.text-center #[em Software] funcionando sobre documentación extensiva
                p.mb-0.text-center Lo prioritario es entregar resultados tangibles, no documentos teóricos que pueden quedar obsoletos.
            
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema1/9.svg"
                  alt=""
                  style="width: 100px"
                )
                h4.mb-2.text-center Colaboración con el cliente sobre negociación contractual
                p.mb-0.text-center Se promueve un diálogo constante con el cliente, en lugar de una relación limitada a los términos iniciales de un contrato.
            
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema1/10.svg"
                  alt=""
                  style="width: 100px"
                )
                h4.mb-2.text-center Respuesta ante el cambio sobre seguir un plan
                p.mb-0.text-center La capacidad de adaptación es más valiosa que la fidelidad a un plan que puede dejar de ser pertinente.

          // Bloque: imagen-color-texto
          .row.mb-3
            .col-lg-4
              figure
                img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
            .col-lg-8
              .bg-color-4.p-4.p-lg-5(data-aos="fade-left").mb-4
                p.mb-0 Estos valores no niegan la importancia de procesos, documentación, contratos o planes, sino que reubican sus prioridades, en función del valor que se entrega.
              
              p(data-aos="fade-left").mb-4 El Manifiesto Ágil no solo propone un cambio en los valores del desarrollo de #[em software], sino que detalla 12 principios fundamentales que orientan las prácticas de los equipos ágiles. Estos principios no deben interpretarse como reglas fijas, sino como #[strong guías que impulsan una cultura de mejora continua, colaboración y entrega de valor]. A continuación, se desarrollan de manera argumentativa:

      // Bloque: anexo-img 8:4
      .bg-full-width.bg-color-5.mb-lg-5.text-white
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Principios
              p.mb-4(data-aos="fade-right") La comprensión de los principios del Manifiesto Ágil, es fundamental para adoptar una visión integral sobre la forma en que los equipos de desarrollo abordan la creación de #[em software] en entornos dinámicos y colaborativos. En el PDF Principios, se exploran los doce principios que orientan las prácticas ágiles, destacando cómo promueven la entrega continua de valor, la mejora constante, la participación activa del cliente y el bienestar del equipo de trabajo. A través de explicaciones y ejemplos prácticos, se analiza cómo estos principios pueden aplicarse efectivamente, para optimizar resultados en proyectos reales.
              
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Principios
            
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/12.png', alt='')


      // Bloque: título segundo
      #t_1_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.3.] Tipos de metodologías ágiles

      // Bloque: texto-iconobloque-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 El crecimiento exponencial de las metodologías ágiles, en las últimas dos décadas ha dado lugar a una amplia variedad de enfoques que comparten los valores y principios del Manifiesto Ágil, pero que se diferencian en sus estructuras, prácticas y adaptabilidad.
          
          .bg-color-6.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Comprender los diferentes tipos de metodologías ágiles, permite a los equipos seleccionar o adaptar el enfoque más adecuado, según el tipo de proyecto, cultura organizacional y grado de madurez del equipo (Heras del Dedo & Álvarez García, 2017).
          
          p(data-aos="fade-left") En este tema, se exponen las principales metodologías ágiles, sus características distintivas, su aplicabilidad y ejemplos prácticos. Se argumenta, además, por qué estas metodologías han transformado la industria del desarrollo de #[em software] y cómo han trascendido hacia otras disciplinas.
        
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in")

      // Bloque: img-acordeon 4:8
      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/15.png", alt="").mb-4.mb-lg-0
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Scrum: estructura ligera, alta disciplina")
              p.mb-3 Scrum es probablemente la metodología ágil más adoptada a nivel mundial. Su enfoque está basado en iteraciones cortas llamadas sprints, que normalmente duran entre 1 y 4 semanas. Al final de cada sprint, se entrega un incremento funcional del producto. El equipo es auto organizado y trabaja con roles definidos: Product Owner, Scrum Master y Development Team (Heras del Dedo & Álvarez García, 2017).
              
              p.mb-3 #[strong Características claves:]
              
              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-check
                  | Ritmos fijos de trabajo (sprints).
                li.mb-0
                  i.fas.fa-check
                  | Reuniones estructuradas (Daily Scrum, Sprint Planning, Review y Retrospective).
                li.mb-0
                  i.fas.fa-check
                  | Entregas regulares de producto funcional.
                li.mb-0
                  i.fas.fa-check
                  | Gestión del trabajo a través de un Product Backlog.
              
              p.mb-3 Scrum aporta claridad, responsabilidad y mejora continua. Su estructura rítmica facilita la planificación y permite a los equipos identificar rápidamente cuellos de botella o desviaciones del objetivo. Sin embargo, requiere alta disciplina, compromiso y experiencia del equipo para que las ceremonias no se conviertan en trámites vacíos.
              
              p.mb-0 #[strong Ejemplo práctico.] Una fintech que necesita iterar rápidamente su interfaz de usuario, implementa Scrum para lanzar nuevas versiones cada dos semanas, priorizando funcionalidades, según el feedback de clientes y stakeholders.
            
            .div(titulo="Kanban: fluidez y mejora continua sin iteraciones rígidas")
              p.mb-3 A diferencia de Scrum, Kanban no opera bajo iteraciones, sino que se basa en un flujo continuo de trabajo visualizado en un tablero, donde cada tarea avanza por columnas (p. ej. Por hacer, En proceso, En pruebas, Hecho). Se enfoca en limitar el trabajo en curso (WIP) y optimizar el tiempo de entrega (lead time).
              
              p.mb-3 #[strong Características claves:]
              
              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-check
                  | Visualización completa del flujo de trabajo.
                li.mb-0
                  i.fas.fa-check
                  | Sin necesidad de roles específicos ni sprints.
                li.mb-0
                  i.fas.fa-check
                  | Enfoque en la entrega continua y la mejora del proceso.
                li.mb-0
                  i.fas.fa-check
                  | Adaptabilidad sin interrupción de procesos existentes.
              
              p.mb-3 #[strong Argumento central]
              p.mb-3 Kanban es ideal para equipos que buscan optimizar su rendimiento sin necesidad de reestructurar su forma de trabajo. Es especialmente útil cuando las prioridades cambian constantemente o cuando las tareas no pueden predecirse con anticipación, como en soporte técnico o mantenimiento.
              
              p.mb-0 #[strong Ejemplo práctico.] Un equipo de IT que resuelve incidencias y tickets, adopta Kanban para priorizar tareas entrantes, limitar los trabajos simultáneos y mejorar los tiempos de resolución sin necesidad de planificar sprints.
            
            .div(titulo="Extreme Programming (XP): excelencia técnica como base de la agilidad")
              p.mb-3 Extreme Programming (XP), es una metodología que pone un fuerte énfasis en las prácticas de desarrollo técnico, especialmente aquellas que garantizan calidad, integración continua y colaboración cercana con el cliente. Fue diseñada para entornos de alta incertidumbre y cambios frecuentes en los requisitos.
              
              p.mb-3 #[strong Características claves:]
              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-check
                  | Desarrollo orientado a pruebas (TDD).
                li.mb-0
                  i.fas.fa-check
                  | Programación en parejas (pair programming).
                li.mb-0
                  i.fas.fa-check
                  | Integración continua y diseño simple.
                li.mb-0
                  i.fas.fa-check
                  | Retroalimentación constante del cliente.
              
              p.mb-3 XP no solo busca entregar valor rápidamente, sino también garantizar que el código sea sostenible y de alta calidad técnica. Es la metodología más exigente desde el punto de vista del desarrollo, pero también la que más promueve la excelencia y la adaptabilidad del producto, frente a cambios drásticos.
              
              p.mb-0 #[strong Ejemplo práctico.] Una startup que desarrolla algoritmos de predicción en tiempo real, adopta XP para asegurar que cada nuevo módulo sea probado exhaustivamente y que la base del código permanezca limpia y estable, ante cambios constantes.

      // Bloque: acordeon-img 8:4
      .row.align-items-start.mb-5
        .col-lg-8
          AcordionA(tipo="b").mb-5
            .div(titulo="Lean Software Development: eficiencia inspirada en la manufactura")
              p.mb-3 Lean es una adaptación de los principios del sistema de producción de Toyota, al desarrollo de #[em software]. Se enfoca en eliminar desperdicios, mejorar el aprendizaje, construir calidad desde el inicio y entregar lo más rápido posible. Si bien no prescribe ceremonias específicas, sí proporciona una filosofía poderosa que puede integrarse con otras metodologías como Scrum o Kanban.
              
              p.mb-3 #[strong Características claves:]
              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-check
                  | Eliminación del trabajo que no aporta valor.
                li.mb-0
                  i.fas.fa-check
                  | Decisiones tomadas lo más tarde posible (para basarlas en hechos).
                li.mb-0
                  i.fas.fa-check
                  | Respeto y empoderamiento del equipo.
                li.mb-0
                  i.fas.fa-check
                  | Optimización de todo el sistema.
              
              p.mb-3 Lean es más una mentalidad que una metodología estricta. Promueve que el desarrollo de #[em software] sea ágil, eficiente y centrado en el cliente, sin caer en la trampa de procesos burocráticos o documentación excesiva. Su enfoque sistémico lo convierte en un aliado ideal de otras metodologías ágiles.
              
              p.mb-0 #[strong Ejemplo práctico.] Una empresa consolidada que desea hacer más eficiente su ciclo de vida de desarrollo implementa principios Lean para reducir tiempos de espera, eliminar pasos redundantes y optimizar la colaboración interdepartamental.
            
            .div(titulo="Crystal: flexibilidad, según el tamaño del equipo y la criticidad del proyecto")
              p.mb-3 Crystal es una familia de metodologías ágiles (como Crystal Clear, Crystal Orange, Crystal Red), diseñada por Alistair Cockburn, uno de los firmantes del Manifiesto Ágil. Se caracteriza por adaptar la metodología, según el contexto del proyecto, como el tamaño del equipo y la criticidad del #[em software].
              
              p.mb-3 #[strong Características claves:]
              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-check
                  | Metodología "liviana" y personalizable.
                li.mb-0
                  i.fas.fa-check
                  | Enfoque humano y colaborativo.
                li.mb-0
                  i.fas.fa-check
                  | Requiere baja burocracia y alta comunicación.
                li.mb-0
                  i.fas.fa-check
                  | Varía, según el color (transparente, naranja, rojo) dependiendo del tamaño y riesgo.
              
              p.mb-3 Crystal parte de la idea de que no existe una única manera correcta de desarrollar #[em software]. Permite construir una metodología adaptada, lo que puede ser una ventaja para proyectos pequeños o empresas en transición, hacia la agilidad.
              
              p.mb-0 #[strong Ejemplo práctico.] Una consultora de #[em software] con proyectos de corta duración y equipos de menos de 5 personas, implementa Crystal Clear para mantener la flexibilidad sin imponer procesos innecesarios.
        
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/16.png", alt="")

      // Bloque: bg-full-icono-texto
      .bg-full-width.bg-color-3.text-white
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/17.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las metodologías ágiles son diversas, pero comparten el propósito común de entregar valor de forma continua, mejorar la colaboración y adaptarse al cambio. La elección de una u otra, dependerá del tipo de proyecto, cultura organizacional, tamaño del equipo y nivel de madurez en prácticas ágiles. En muchas organizaciones, incluso se opta por modelos híbridos, donde se integran prácticas de diferentes enfoques, según las necesidades específicas (Serrano Junco, 2022).

      // Bloque: material-complementario
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario que ampliará sus conocimientos sobre metodologías ágiles.
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/28993" target="_blank" rel="noopener noreferrer") Escalona, I. (2009). Planeación integral agregada e interrelación de los sistemas intermitentes con el MRP y filosofía JIT, kanban, reingeniería. El Cid Editor.
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=UjcAJ3tjg8o" target="_blank" rel="noopener noreferrer") Mujer Cronopio. (2021). AGILE MANIFESTO [1/4]. ¿Solo para ingenieros? ¡NO! [video]. YouTube.
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
