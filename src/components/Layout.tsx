import { useLocation } from '@solidjs/router';
import { HeaderLink } from './types';
import { createEffect, Signal, createSignal } from 'solid-js';
import Header from './Header';

export default function Layout({ children }: any) {
  const currentLinkClass =
    'text-primary-500 pointer-events-none font-light tracking-[0.065em]';
  const hoverLinkClass = 'text-primary-100 hover:text-accent-200';

  const location = useLocation();

  const checkClass = (path: string, pathname: string) => {
    return pathname === path || pathname === path + '/'
      ? currentLinkClass
      : hoverLinkClass;
  };

  const generateLinks = (pathname: string) => {
    return [
      {
        text: 'BLOG',
        href: '/blog',
        class: checkClass('/blog', pathname),
      },
      {
        text: 'PROYECTOS',
        href: '/projects',
        class: checkClass('/projects', pathname),
      },
      {
        text: 'SOBRE MÍ',
        href: '/about',
        class: checkClass('/about', pathname),
      },
    ];
  };

  const [links, setLinks]: Signal<HeaderLink[]> = createSignal<HeaderLink[]>(
    generateLinks(location?.pathname)
  );

  createEffect(() => {
    setLinks(generateLinks(location?.pathname));
  }, [location?.pathname]);
  return (
    <>
      <Header links={links()} />
      <main class='p-6 flex flex-col items-center justify-center border-t-2 border-accent-500 rounded-t-xl bg-bg-100'>
        {children}
      </main>
    </>
  );
}
