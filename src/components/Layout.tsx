import { Show } from 'solid-js';
import Header from './Header';

export default function Layout({
  withHeader = true,
  withBottomNav = false,
  children,
}: any) {
  const stylesWithHeader = 'border-t-2 border-accent-500 rounded-t-xl';
  const links = [
    {
      text: 'Inicio',
      href: '/home',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Proyectos',
      href: '/projects',
    },
    {
      text: 'Sobre mí',
      href: '/about',
    },
  ];
  return (
    <>
      <Show when={withHeader}>
        <Header links={links} />
      </Show>
      <main
        class={`${
          withHeader && stylesWithHeader
        } py-4 pb-6 md:p-6 flex flex-col items-center justify-center bg-bg-100`}>
        {children}
      </main>
    </>
  );
}
