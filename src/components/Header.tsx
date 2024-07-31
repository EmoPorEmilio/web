import { FiGithub, FiMenu } from 'solid-icons/fi';
import { ImCross } from 'solid-icons/im';
import {
  FaBrandsSquareGithub,
  FaBrandsYoutube,
  FaBrandsTiktok,
} from 'solid-icons/fa';
import { IoLogoTiktok } from 'solid-icons/io';
import { createEffect, createSignal, For, Show, Signal } from 'solid-js';
import { BiLogosTiktok } from 'solid-icons/bi';
import { AiOutlineYoutube } from 'solid-icons/ai';
import { BsTiktok } from 'solid-icons/bs';

export default function Header({ links }: any) {
  const [menu, setMenu] = createSignal(false);
  let collapsableMenu: any;

  const handleOpenMenu = () => {
    document.querySelector('#collapsable-menu')?.classList.remove('scale-0');
    document.querySelector('#collapsable-menu')?.classList.add('scale-100');
  };

  const handleCloseMenu = () => {
    document.querySelector('#collapsable-menu')?.classList.remove('scale-100');
    document.querySelector('#collapsable-menu')?.classList.add('scale-0');
  };

  return (
    <>
      <nav
        id='collapsable-menu'
        class='transition duration-300 ease-in-out scale-0 origin-top-right z-10 absolute w-full h-full bg-bg-200'>
        <div class='flex h-[100dvh] w-[100dvw] flex-col'>
          <div class='flex h-14 w-full items-center justify-center border-b-4 border-solid border-accent-500 bg-bg-400'>
            <ImCross
              size={30}
              onclick={() => handleCloseMenu()}
              class='absolute left-4 subpixel-antialiased text-accent-200 cursor-pointer origin-top-right'
            />
            <span class='text-4xl font-jost font-extrabold tracking-wider text-primary-300'>
              ANUNCIOS
            </span>
          </div>
          <div class='flex h-10 w-full items-center border-b-4 border-bg-100 bg-primary-600 pl-4'>
            <a href='/' class={`font-sen text-xl text-gray-200`}>
              Proyecto Viviana
            </a>
          </div>
          <div class='flex h-10 w-full items-center border-b-4 border-bg-100 bg-primary-600 pl-4'>
            <a href='/' class={'font-sen text-xl text-gray-200'}>
              Proyecto Viviana
            </a>
          </div>
          <div class='flex h-10 w-full items-center border-b-4 border-bg-100 bg-primary-600 pl-4'>
            <a href='/calendar' class={'font-sen text-xl text-gray-200'}>
              Calendar
            </a>
          </div>
          <div class='flex h-10 w-full items-center border-b-4 border-bg-100 bg-primary-600 pl-4'>
            <a href='/mobile' class={'font-sen text-xl text-gray-200'}>
              {' '}
              Mobile{' '}
            </a>
          </div>
          <div class='flex h-14 w-full items-center justify-center border-b-2 border-solid border-accent-500 bg-bg-400'>
            <span class='text-4xl font-bold tracking-wider text-primary-300'>
              TUTORIALES
            </span>
          </div>
        </div>
      </nav>
      <nav class='bg-bg-400 h-[55px] text-lg font-semibold justify-around items-center flex py-6 px-4'>
        <div class='flex justify-between items-center md:justify-start gap-2 flex-1'>
          <a href='/'>
            <img
              class='hover:animate-wiggle'
              width='55'
              height='28'
              src='/logo.svg'
              alt='Logo'
            />
          </a>
          <div class='flex md:justify-center items-center gap-2'>
            <a target='_blank' href='https://www.tiktok.com/@emoporemilio'>
              <BsTiktok
                class='text-primary-500 hover:text-accent-200 antialiased'
                size={24}
              />
            </a>
            <a target='_blank' href='https://www.github.com/emoporemilio'>
              <FiGithub
                class=' text-primary-200 hover:text-accent-200'
                size={24}
              />{' '}
            </a>
            <a target='_blank' href='https://www.youtube.com/emoporemilio'>
              <AiOutlineYoutube
                class=' text-accent-500 hover:text-accent-200'
                size={24}
              />
            </a>
          </div>
          <div class='md:hidden'>
            <FiMenu
              class='subpixel-antialiased text-primary-100 cursor-pointer'
              onClick={() => handleOpenMenu()}
              size={40}
            />
          </div>
        </div>
        <div class='hidden md:flex gap-8'>
          <For each={links} fallback={<></>}>
            {(link) => (
              <a class={link.class} href={link.href}>
                {link.text}
              </a>
            )}
          </For>
        </div>
      </nav>
    </>
  );
}
