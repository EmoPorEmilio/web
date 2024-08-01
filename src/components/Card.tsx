import { JSX } from 'solid-js';
import type { Author } from './types';

interface Props {
  title: string;
  author: Author;
  date: string;
  tags: string[];
  children: JSX.Element;
}

export default function Card({ title, author, date, tags, children }: Props) {
  return (
    <>
      <div class='group flex w-full max-w-[1000px] flex-col px-2'>
        <div class='relative pl-8 top-5 '>
          <span class=' bg-gradient-to-b from-primary-100 to-primary-500 bg-clip-text text-2xl md:text-4xl font-bold text-transparent drop-shadow-title-card'>
            {title}
          </span>
        </div>
        <div class='flex h-[46px] flex-col justify-end rounded-t-[26px] bg-primary-800'>
          <div class='flex h-[40px] flex-col justify-end rounded-t-[30px] bg-primary-600'>
            <div class='flex h-[20px] items-center justify-end rounded-t-[100px] bg-primary-700 pr-4'>
              <span class='font-regular text-sm text-primary-300'>
                <a href={author.href} target='_blank' class='font-semibold'>
                  {author.name}
                </a>{' '}
                - {date}
              </span>
            </div>
          </div>
        </div>
        <div class='mt-1 flex flex-col rounded-b-3xl border-b border-b-accent-500 bg-bg-300 group-hover:shadow-card'>
          <div class='flex flex-col md:px-8 flex-1 p-4 font-sen text-lg text-gray-100 gap-3'>
            {children}
          </div>
        </div>
      </div>
      <div class='relative bottom-4 right-4'>
        <div class='flex flex-row justify-end gap-2 pr-4'></div>
      </div>
    </>
  );
}
