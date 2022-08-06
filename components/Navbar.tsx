import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import icon from '@public/icon.svg';
import { Searchbar } from '@components/Searchbar';

export const Navbar: FC = () => {
  return (
    <div className='fixed w-[100%] top-0 z-10'>
      <div className='bg-ember-dark-400 flex py-[4px] sm:py-0'>
        <Link href='/home'>
          <div className='grid grid-flow-col place-items-center gap-[4px] cursor-pointer select-none'>
            <div className='w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]'>
              <Image src={icon} layout='responsive' id='navbar-icon' className='select-none' />
            </div>
            <h1 id='logo-text' className='hover:text-ember-accent-hover duration-200 hidden lg:block'>
              emberwave
            </h1>
          </div>
        </Link>
        <Searchbar />
        <div className='grid grid-cols-[30px] sm:grid-flow-col gap-[20px] mr-[8px] md:mr-[20px] place-items-center'>
          <Link href='/home'>
            <h1 className='text-white cursor-pointer hover:text-ember-accent-hover duration-200 hidden sm:block'>home</h1>
          </Link>
          <Link href='/profile'>
            <h1 className='text-white cursor-pointer hover:text-ember-accent-hover duration-200 hidden sm:block'>profile</h1>
          </Link>
          <div className='grid grid-flow-col place-items-center gap-[6px] border-ember-dark-100 sm:border-[2px] pt-[2px] pb-[2px] px-[2px] md:px-[4px] rounded-[20px] hover:border-ember-accent-hover duration-100'>
            <h1 className='hidden sm:block pl-[6px]'>amogus</h1>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FpTM_4x02pQc%2Fhqdefault.jpg&f=1&nofb=1' height='30px' width='30px' className='rounded-[50%] aspect-square select-none' />
          </div>
        </div>
      </div>
    </div>
  );
};
