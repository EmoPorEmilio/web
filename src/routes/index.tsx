import Layout from '~/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div class='flex flex-col md:flex-row justify-center items-start p-4 gap-4'>
        <img class='w-[100px] md:w-[330px]' src='/logo-pixelart.png' />
        <div class='flex bg-bg-200 ml-6 md:m-auto border-b-2 border-accent-200 p-4 rounded-bl-3xl rounded-r-3xl items-center justify-center'>
          <div class='font-sen text-lg font-medium text-primary-200'>
            ¡Buenas, buenas,{' '}
            <span class='font-semibold text-accent-200'>
              entusiastas de la computación
            </span>
            !
          </div>
        </div>
      </div>
    </Layout>
  );
}
