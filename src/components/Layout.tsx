import Header from './Header';

export default function Layout({ children }: any) {
  const links = [
    {
      text: 'INICIO',
      href: '/home',
    },
    {
      text: 'BLOG',
      href: '/blog',
    },
    {
      text: 'PROYECTOS',
      href: '/projects',
    },
    {
      text: 'SOBRE MÍ',
      href: '/about',
    },
  ];
  return (
    <>
      <Header links={links} />
      <main class='py-4 pb-6 md:p-6 flex flex-col items-center justify-center border-t-2 border-accent-500 rounded-t-xl bg-bg-100'>
        {children}
      </main>
    </>
  );
}
