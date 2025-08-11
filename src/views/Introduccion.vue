<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'Introducción'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
      
      // Bloque: imagen-texto-color 4:8
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 En el contexto actual de transformación digital, las organizaciones requieren entregar soluciones tecnológicas con rapidez, adaptabilidad y enfoque en el cliente. Este escenario ha llevado a una evolución en las prácticas de desarrollo de software, posicionando a las metodologías ágiles como una respuesta efectiva ante la incertidumbre y el cambio constante. Esta unidad temática aborda los fundamentos del Manifiesto Ágil, documento clave que redefinió la forma de concebir y ejecutar proyectos de software desde inicios del siglo XXI.
          
          .bg-color-1.p-4(data-aos="fade-left")
            p.mb-0 El propósito principal de este tema es proporcionar una comprensión profunda del origen, los valores y principios que sustentan el pensamiento ágil, así como de las metodologías que se derivan de este marco conceptual. Al finalizar la unidad, se espera que la persona en formación, comprenda el contexto histórico y técnico del Manifiesto Ágil, identifique sus componentes esenciales y reconozca las metodologías más representativas que permiten su implementación práctica, en entornos reales de desarrollo.
      

      .bg-full-width.bg-gradiente-1
        .px-4.px-md-5.py-4
          // Bloque: texto-iconobloque-imagen
          .row.mb-5
            .col-lg-8
              p(data-aos="fade-left").mb-4 Comprender los fundamentos ágiles, es indispensable para futuros profesionales del área, dado que estas metodologías no solo se aplican en proyectos tecnológicos, sino que también están transformando la gestión empresarial, la innovación y la educación.
              
              .bg-color-2.p-4(data-aos="fade-left").mb-4
                .row.align-items-start
                  .col-lg-auto
                    img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    p.mb-0 Dominar estos principios no solo mejora la capacidad de respuesta ante cambios del entorno, sino que también fortalece habilidades de colaboración, pensamiento crítico y orientación a resultados, competencias esenciales en la industria actual.
              
              p(data-aos="fade-left").mb-4 A modo de ilustración, se destaca cómo empresas líderes como Google, Spotify y Netflix, han integrado marcos ágiles para lograr eficiencia, innovación y satisfacción del usuario final.
              
              p(data-aos="fade-left") #[strong Esta unidad se encuentra estructurada en tres apartados.]
            
            .col-lg-4
              figure
                img(src="@/assets/curso/intro/3.png", data-aos="zoom-in")
          
          // Bloque: tarjetas-boton
          div.row.justify-content-center.align-items-stretch.mb-0
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/intro/4.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.mb-2.text-center Apartado 1
                p.mb-0.text-center Presenta una introducción general a las metodologías ágiles y su contraste con los enfoques tradicionales.
            
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/intro/5.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.mb-2.text-center Apartado 2
                p.mb-0.text-center Desarrolla en profundidad los valores y principios establecidos en el Manifiesto Ágil.
            
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/intro/6.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.mb-2.text-center Apartado 3
                p.mb-0.text-center Expone los principales tipos de metodologías ágiles, analizando sus características y aplicaciones.
      
      // Bloque: bg-full-icono-texto
      .bg-full-width.bg-color-3.text-white
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/intro/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-3 Las actividades asociadas incluyen lecturas guiadas, análisis de casos y ejercicios prácticos de aplicación contextualizada.
              p.mb-0 Se invita a la participación activa durante el desarrollo de la unidad, así como a la reflexión crítica frente a los conceptos presentados. Para el adecuado abordaje del contenido, se recomienda haber revisado previamente fundamentos básicos de ingeniería de software y gestión de proyectos. El compromiso con el proceso de aprendizaje será clave para adquirir una visión integral del paradigma ágil y su relevancia en la práctica profesional.

</template>

<script>
export default {
  name: 'Introduccion',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
