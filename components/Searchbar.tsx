import type { FC } from 'react';

export const Searchbar: FC = () => {
  return (
    <div className='flex flex-grow justify-center h-[100%] mx-[10px] lg:mx-[50px] my-auto'>
      <input placeholder='search' className='w-[90%] px-[10px] rounded-[20px] bg-ember-dark-300 border-ember-dark-200 hover:border-ember-dark-100 focus:outline-none border-[2px] duration-100 placeholder:text-ember-dark-100'></input>
    </div>
  );
};
