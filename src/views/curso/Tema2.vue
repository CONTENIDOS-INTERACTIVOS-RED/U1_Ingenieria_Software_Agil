<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Comparación entre metodologías (Scrum, Kanban)'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
      
      // Bloque: bg-full-icono-texto
      .bg-full-width.bg-color-3.text-white.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A continuación, realizaremos una comparación entre las metodologías Scrum y Kanban.

      // Bloque: título segundo
      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1.] Scrum

      // Párrafo introductorio
      p(data-aos="fade-left").mb-0 Scrum es una de las metodologías ágiles más adoptadas en la industria del desarrollo de #[em software]. Su éxito radica en su capacidad para estructurar el trabajo en ciclos iterativos que permiten la entrega continua de valor, fomentando la colaboración, la inspección constante y la adaptación progresiva del producto. Fue formalmente introducida por Ken Schwaber y Jeff Sutherland, y ha sido refinada a través de múltiples versiones de su "Guía Scrum".


      .bg-full-width.bg-gradiente-3
        .px-4.p-md-5
      
          // Bloque: figura-completa
          .titulo-figura.mb-2
            h5 Figura 2. 
            span Proceso Scrum
            
          figure.bg-color-info.p-4.p-md-5.mb-5
            img(src="@/assets/curso/tema2/figura1.png", data-aos="zoom-in", style="max-width: 900px").mx-auto

          // Bloque: texto-imagen 8:4
          .row.mb-5
            .col-lg-8
              h3.mb-4(data-aos="fade-left") Estructura de Scrum
              
              p(data-aos="fade-left") Scrum se basa en ciclos de trabajo llamados sprints, que típicamente duran entre una y cuatro semanas. Cada sprint inicia con una Sprint Planning, durante la cual el equipo acuerda qué elementos del Product Backlog se desarrollarán. Durante el sprint se realiza diariamente el Daily Scrum, una reunión breve que permite sincronizar al equipo y detectar impedimentos. Al finalizar el sprint, se lleva a cabo una Sprint Review para presentar el incremento del producto y una Sprint Retrospective, para reflexionar sobre el proceso y proponer mejoras.
            
            .col-lg-4.d-none.d-sm-block
              figure
                img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in").mb-4.mb-lg-0

          // Título Roles en Scrum
          h3.mb-4(data-aos="fade-left") Roles en Scrum:

          // Bloque: tarjetas-boton
          div.row.justify-content-center.align-items-stretch.mb-5
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/3.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.mb-2.text-center Product Owner
                p.mb-0.text-center Responsable de gestionar el backlog y asegurar que el equipo trabaje en las prioridades correctas.
            
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/4.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.mb-2.text-center Scrum Master
                p.mb-0.text-center Facilita el proceso Scrum, remueve impedimentos y asegura que el equipo entienda y aplique correctamente la metodología.
            
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/5.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.mb-2.text-center Development Team
                p.mb-0.text-center Equipo multifuncional y auto organizado, encargado de crear los entregables del sprint.

      // Bloque: imagen-texto-color
      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
        .col-lg-7
          p(data-aos="fade-left").mb-4 Scrum fomenta una cultura de mejora continua al permitir que el equipo inspeccione y adapte, tanto el producto como el proceso, cada pocas semanas. Esto facilita el aprendizaje iterativo, especialmente útil en contextos donde los requisitos cambian constantemente. Además, promueve la transparencia y la visibilidad, elementos claves para la toma de decisiones en entornos ágiles (Serrano Junco, 2022).
          
          .bg-color-2.p-4(data-aos="fade-left")
            p.mb-0 #[strong Ejemplo]. En una empresa de desarrollo de apps móviles, el uso de Scrum permitió reducir los tiempos de entrega en un 40 % al estructurar claramente el trabajo del equipo y revisar el progreso cada dos semanas. El feedback constante del cliente ayudó a alinear el producto final con las expectativas del usuario.

      // Título Limitaciones de Scrum
      h3.mb-4(data-aos="fade-left") Limitaciones de Scrum

      p(data-aos="fade-left").mb-4 Aunque altamente beneficioso, #[strong Scrum no es aplicable a todos los contextos]. En entornos donde los requerimientos cambian con mucha frecuencia o donde los equipos no pueden comprometerse a iteraciones fijas, puede resultar rígido. Asimismo, su correcta implementación requiere disciplina, cultura organizacional orientada a la agilidad y compromiso de los #[em stakeholders].

      p(data-aos="fade-left").mb-5 #[strong A continuación, conozcamos un resumen sobre la información acerca de Scrum:]

      // Bloque: infografia
      .bg-full-width.bg-color-info.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema2/infografia.svg', alt='', style="max-width: 1106px;").mx-auto

                .tarjeta.color-secundario.p-3(x="2%" y="67%" numero="+")
                  h5 ¿Qué es Scrum?
                  p.mb-0 Es un marco de trabajo ágil que permite desarrollar productos de manera iterativa e incremental, con enfoque en la entrega de valor, colaboración y mejora continua.

                .tarjeta.color-secundario.p-3(x="12%" y="11%" numero="+")
                  h5 Roles en Scrum
                  p Product Owner. Gestiona el Product Backlog y prioriza las funcionalidades.
                  p Scrum Master. Facilita el proceso Scrum, remueve obstáculos y protege al equipo.
                  p.mb-0 Equipo de desarrollo. Grupo multidisciplinario, encargado de construir el producto.

                .tarjeta.color-secundario.p-3(x="38%" y="5.5%" numero="+")
                  h5 Eventos claves del ciclo Scrum
                  p Sprint Planning. Planificación sobre qué se entregará.
                  p Daily Scrum. Reunión diaria para sincronización.
                  p Sprint Review. Demostración del incremento.
                  p.mb-0 Sprint Retrospective. Revisión interna del proceso.

                .tarjeta.color-secundario.p-3(x="72%" y="10.5%" numero="+")
                  h5 Herramientas ágiles de gestión
                  p JIRA. Plataforma para gestionar tareas, backlog y tableros Scrum.
                  p.mb-0 Trello. Herramienta visual para organizar tareas con tarjetas y listas.

                .tarjeta.color-secundario.p-3(x="77%" y="67%" numero="+")
                  h5 Beneficios de usar Scrum
                  p.mb-0 Mayor transparencia, rápida adaptación al cambio, retroalimentación continua y mejor productividad del equipo.

      // Bloque: título segundo
      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Kanban

      // Bloque: texto-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 Kanban es una metodología ágil visual y flexible que tiene su origen en el sistema de producción de Toyota. Su aplicación al desarrollo de software fue promovida por David J. Anderson a partir del 2007. A diferencia de Scrum, Kanban no impone ciclos iterativos ni roles específicos, sino que se enfoca en visualizar el flujo de trabajo, limitar el trabajo en curso (#[em Work In Progress, WIP]) y optimizar, continuamente, el proceso.
          
          p(data-aos="fade-left") #[strong Elementos claves de Kanban:]

        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in").mb-4.mb-lg-0

      .bg-full-width.bg-gradiente-2
        .px-4.p-md-5
          // Bloque: tarjetas-boton (4 tarjetas)
          div.row.justify-content-center.align-items-stretch.mb-5
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/8.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.mb-2.text-center Tablero Kanban
                p.mb-0.text-center Herramienta visual que representa el flujo de trabajo a través de columnas (por ejemplo: Por hacer, En progreso, En pruebas, Hecho).
            
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/9.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.mb-2.text-center Límites WIP
                p.mb-0.text-center Se establece un número máximo de tareas por columna, para evitar la sobrecarga del equipo.
            
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/10.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.mb-2.text-center Entrega continua
                p.mb-0.text-center A diferencia de los sprints, las tareas se desplazan de manera fluida, hasta su finalización.
            
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/11.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.mb-2.text-center Políticas explícitas
                p.mb-0.text-center Se documentan las reglas y condiciones que debe cumplir una tarea, para pasar de una columna a otra

          // Bloque: imagen-color-texto
          .row.mb-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
            .col-lg-7
              p(data-aos="fade-left").mb-4 Kanban es particularmente útil en entornos donde las tareas llegan de manera irregular o impredecible. Su enfoque en la entrega continua y la visualización del trabajo, permite mejorar la eficiencia operativa sin requerir grandes cambios estructurales. También facilita la identificación de cuellos de botella, lo que promueve la mejora continua del proceso.
              
              .bg-color-4.p-4(data-aos="fade-left")
                p.mb-0 #[strong Ejemplo]. Un equipo de atención al cliente de una empresa de tecnología implementó Kanban para gestionar los tickets de soporte. Esto permitió reducir el tiempo promedio de resolución de incidencias en un 30 %, al identificar tareas estancadas y redistribuir mejor la carga de trabajo.

      // Título Limitaciones de Kanban
      h3.mb-4(data-aos="fade-left") Limitaciones de Kanban

      // Bloque: bloque-img
      .bg-color-6.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") Aunque flexible, Kanban puede resultar menos estructurado para equipos nuevos o sin experiencia en metodologías ágiles. La falta de ciclos definidos puede generar incertidumbre en la planificación a largo plazo. Además, la mejora continua requiere un compromiso constante de revisión y análisis del flujo de trabajo, lo cual no siempre es fácil de sostener.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/13.png', alt='')

      // Bloque: título segundo
      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3.] Herramientas ágiles

      p(data-aos="fade-left").mb-5 El uso de herramientas ágiles es un componente fundamental en la implementación efectiva, tanto de Scrum como de Kanban. Estas herramientas permiten visualizar el trabajo, facilitar la colaboración remota, medir el progreso y mantener la transparencia del proceso. A continuación, se presentan algunas de las herramientas más utilizadas en la industria.

      // Bloque: SlyderA
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-4
                figure
                  img(src="@/assets/curso/tema2/14.png")
              .col-lg-8
                h3 Jira (Atlassian)
                p.mb-4 Jira es una de las herramientas más populares para la gestión ágil de proyectos. Ofrece soporte completo para Scrum y Kanban, permitiendo crear tableros personalizados, gestionar backlogs, planificar sprints y generar reportes automáticos.
                p.mb-0 #[strong Ejemplo]. Un equipo de desarrollo distribuye sus tareas a través de un tablero Scrum en Jira, realiza su planificación de sprints y da seguimiento al cumplimiento de historias de usuario, mediante burndown charts.
            
            .row.align-items-center.p-4.p-md-5
              .col-lg-4
                figure
                  img(src="@/assets/curso/tema2/15.png")
              .col-lg-8
                h3 Trello
                p.mb-4 Basado en la simplicidad de Kanban, Trello permite organizar tareas en tarjetas dentro de un tablero visual. Es muy útil para equipos pequeños o para proyectos personales, aunque puede integrarse con herramientas más robustas como Slack o Google Workspace.
                p.mb-0 #[strong Ejemplo]. Una agencia de diseño gráfico organiza sus tareas por cliente. utilizando tableros Trello, permitiendo a cada miembro del equipo actualizar el estado de sus entregables, en tiempo real.
            
            .row.align-items-center.p-4.p-md-5
              .col-lg-4
                figure
                  img(src="@/assets/curso/tema2/16.png")
              .col-lg-8
                h3 ClickUp, Monday y Asana
                p.mb-0 Estas plataformas permiten una gestión híbrida de tareas, integrando elementos de Scrum y Kanban. Facilitan el trabajo colaborativo, asignación de tareas, integración con otras herramientas (como GitHub, Google Drive, etc.) y seguimiento de objetivos.

      // Bloque: texto-color-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 En entornos distribuidos o con múltiples equipos, la gestión manual de proyectos ágiles, se vuelve insostenible. Las herramientas digitales no solo mejoran la coordinación y visibilidad del trabajo, sino que también proveen métricas valiosas para la toma de decisiones y la mejora continua. Estas plataformas se convierten en habilitadores claves de la agilidad organizacional.
          
          .bg-color-2.p-4(data-aos="fade-left")
            p.mb-0 La comparación entre Scrum y Kanban muestra que ambas metodologías ofrecen beneficios únicos y pueden complementarse, según el contexto organizacional. Mientras que Scrum proporciona estructura y ritmo, Kanban ofrece flexibilidad y enfoque en la eficiencia. Comprender sus diferencias y similitudes, permite una selección informada y estratégica de la metodología más adecuada. Por su parte, el uso de herramientas ágiles representa un pilar esencial para aplicar con éxito cualquier enfoque ágil en la práctica.
        
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")

      // Bloque: material-complementario
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario que ampliará sus conocimientos sobre metodologías ágiles.
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/8346" target="_blank" rel="noopener noreferrer") Juárez Núñez, H. (2006). Los sistemas just-in-time/ Kanban, un paradigma productivo. Red Política y Cultura.
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=ZDRy5YN19W4" target="_blank" rel="noopener noreferrer") Software Guru. (2012). Webinar Gratuito "Aplicando los 12 principios del Manifiesto ágil a la Gestión de tus proyectos" [video]. YouTube.
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
