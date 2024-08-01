import { FiGithub, FiMenu } from 'solid-icons/fi';
import { ImCross } from 'solid-icons/im';
import { For } from 'solid-js';
import { AiOutlineYoutube } from 'solid-icons/ai';
import { BsTiktok } from 'solid-icons/bs';
import { A } from '@solidjs/router';

export default function Header({ links }: any) {
  const handleOpenMenu = () => {
    document.querySelector('#collapsable-menu')?.classList.remove('scale-0');
    document.querySelector('#collapsable-menu')?.classList.add('scale-100');
  };

  const handleCloseMenu = () => {
    document.querySelector('#collapsable-menu')?.classList.remove('scale-100');
    document.querySelector('#collapsable-menu')?.classList.add('scale-0');
  };

  const currentLinkClass =
    'text-primary-500 pointer-events-none font-light tracking-[0.065em]';
  const hoverLinkClass = 'text-primary-100 hover:text-accent-200';
  return (
    <>
      <nav
        id='collapsable-menu'
        class='transition duration-300 ease-in-out scale-0 origin-top-right z-10 absolute w-full h-full bg-bg-300'>
        {' '}
        <ImCross
          size={24}
          onclick={handleCloseMenu}
          class='absolute top-4 left-4 subpixel-antialiased text-accent-200 hover:text-accent-500 cursor-pointer origin-top-right'
        />
        <div class='flex h-[100dvh] w-[100dvw] flex-col'>
          <div class='flex h-14 w-full items-center justify-center border-b-4 border-solid border-accent-500 bg-bg-400'>
            <span class='text-4xl font-jost font-extrabold tracking-wider text-primary-300'>
              SECCIONES
            </span>
          </div>
          <For each={links} fallback={<></>}>
            {(link) => (
              <A
                href={link.href}
                inactiveClass='bg-primary-600 hover:bg-bg-100 hover:text-accent-200 text-primary-200 border-bg-100 hover:border-accent-300'
                activeClass='text-primary-300 bg-bg-100 pointer-events-none border-accent-200'
                class={`font-sen text-xl flex h-10 cursor-pointer w-full items-center border-b-2  pl-4`}>
                {link.text}
              </A>
            )}
          </For>
          <div class='flex h-14 w-full items-center justify-center border-b-4 border-solid border-accent-500 bg-bg-400'>
            <span class='text-4xl font-bold tracking-wider text-primary-300'>
              REDES
            </span>
          </div>

          <div class='flex flex-1' onclick={handleCloseMenu} />
        </div>
      </nav>
      <header class='group bg-bg-400 h-[55px] text-lg font-semibold justify-around items-center flex py-6 px-4'>
        <div class='flex justify-between items-center md:justify-start gap-2 flex-1'>
          <A href='/'>
            <img
              class='group-hover:animate-wiggle'
              width='55'
              height='28'
              src='/logo.svg'
              alt='Logo'
            />
          </A>
          <div class='flex md:justify-center items-center gap-2'>
            <A target='_blank' href='https://www.tiktok.com/@emoporemilio'>
              <BsTiktok
                class='text-primary-500 hover:text-accent-200 antialiased'
                size={24}
              />
            </A>
            <A target='_blank' href='https://www.github.com/emoporemilio'>
              <FiGithub
                class=' text-primary-200 hover:text-accent-200'
                size={24}
              />
            </A>
            <A target='_blank' href='https://www.youtube.com/emoporemilio'>
              <AiOutlineYoutube
                class=' text-accent-500 hover:text-accent-200'
                size={24}
              />
            </A>
          </div>
          <div class='md:hidden'>
            <FiMenu
              class='subpixel-antialiased text-primary-100 cursor-pointer hover:text-accent-500'
              onclick={handleOpenMenu}
              size={40}
            />
          </div>
        </div>
        <nav class='hidden md:flex gap-8'>
          <For each={links} fallback={<></>}>
            {(link) => (
              <A
                class='uppercase'
                activeClass={currentLinkClass}
                inactiveClass={hoverLinkClass}
                href={link.href}>
                {link.text}
              </A>
            )}
          </For>
        </nav>
      </header>
    </>
  );
}
