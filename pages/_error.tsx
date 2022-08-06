import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import island from '@public/emberwave_island.svg';

const Error: NextPage = () => {
  return (
    <>
      <div className='flex justify-center align-middle h-[100%]'>
        <div className='my-auto grid grid-flow-row place-items-center'>
          <div className='mb-[10px]'>
            <Image src={island} width={80} height={80} />
          </div>
          <h1 className=''>something went wrong...</h1>
          <h2>
            return{' '}
            <Link href='/home'>
              <span className='text-ember-accent hover:text-ember-accent-hover duration-200 cursor-pointer'>home</span>
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Error;
