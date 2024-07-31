import Card from '~/components/Card';
import Layout from '~/components/Layout';

export default function About() {
  return (
    <Layout>
      <Card
        title='Sobre mí'
        author={{ name: 'EmoPorEmilio', href: 'https://emoporemilio.uy/about' }}
        date='31/07/2024'
        tags={[]}>
        <div class='flex items-center justify-center pb-4'>
          <img
            class='p-10 border-accent-300 border-2 w-[100px] md:w-[250px] shadow-lg group-hover:animate-wiggle'
            src='/logo-pixelart.png'
          />
        </div>
        <p class=''>
          ¡Buenas, buenas,{' '}
          <span class='font-semibold text-accent-200'>
            entusiastas de la computación
          </span>
          !
        </p>
        <p class=''>
          Me llamo Emilio Franceschini y me dicen Emo. Tengo 30 años y vivo en
          Montevideo, Uruguay.
        </p>
        <p class=''>
          Soy extremadamente inquieto y curioso, no pienso linealmente, ni me
          llevo bien con excesos de burocracia, imposiciones absurdas y{' '}
          <i>deadlines</i>
          estrictos.
        </p>
        <p class=''>
          A nivel código me manejo principalmente con Javascript y Typescript, y
          últimamente ando enamorado de Rust. Mis habilidades abarcan todo el
          proceso de desarrollo de software: desde el inicio, con especificación
          y diseño, hasta el monitoreo y <i>troubleshooting</i> de aplicaciones
          desplegadas en producción.
        </p>
        <p>
          El desarrollo <i>front-end</i> es mi casa y el diseño <i>UI/UX</i> mi
          hobby principal, pero estuve los últimos años profundizando mis
          habilidades
          <i>full-stack</i>, entendiendo mejor del <i>back-end</i> para sistemas
          distribuidos, infraestructura y <i>Dev-Ops</i>. He trabajado con
          distintas metodologías ágiles y <i>frameworks</i> de desarrollo.
        </p>
        <p>
          Mis variadas experiencias, desde enseñar matemáticas hasta atención al
          cliente y <i>live-streaming</i>, me han moldeado en alguien que
          disfruta aprendiendo, enseñando y asistiendo. El buen trato con el
          compañero es prioridad número 0.
        </p>
        <p class=''>
          Levanté mi primera página en 2007 con un amigo para que nuestra clase
          del liceo pudiera compartir información, como un juego al que no pude
          parar de jugar, y acá estamos. Debido a mi historia, me gusta pensar
          en IT como un estilo de vida, más similar a una maratón que a una
          carrera de velocidad.
        </p>
        <p class=''>
          No me considero un ingeniero de <i>software</i> tanto como me
          considero un artista que expresa su humanidad mediante el desarrollo
          de <i>software</i>. No estoy acá ni por el dinero, ni para crear
          productos que rindan. Estoy acá para crear, por crear en sí mismo. Lo
          hice gratis por años, y lo seguiré haciendo así por el resto de mis
          días. Poder trabajar en la industria es un hermoso <i>upside</i>.
        </p>
        <p class=''>
          Actualmente me encuentro plasmando dicha filosofía, o forma de vivir
          el desarrollo de software, en el{' '}
          <a
            href='https://proyectoviviana.dev/manifiesto'
            target='_blank'
            class='font-semibold text-accent-200 hover:text-accent-500 hover:underline'>
            Proyecto Viviana
          </a>
          , el proyecto más ambicioso y pretensioso que tuve en mi vida.
        </p>
      </Card>
    </Layout>
  );
}
