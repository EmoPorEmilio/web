import { Button, ButtonType } from 'proyecto-viviana-ui';
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
        <div class='flex flex-col items-center justify-center'>
          <p class=''>¡Buenas, buenas, entusiastas de la tecnología!</p>
          <p class=''>
            Me llamo Emilio Franceschini, me dicen Emo y tengo 30 años.
          </p>
          <div class='pt-4 w-full flex justify-center'>
            <Button
              onClick={() => {}}
              type={ButtonType.Link}
              label='Leer más...'
            />
          </div>
        </div>
      </Card>
    </Layout>
  );
}
