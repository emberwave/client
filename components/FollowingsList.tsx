import type { FC } from 'react';

export const FollowingsList: FC = () => {
  const fakeFollowing: any[] = [
    { tag: 'frog', tagNumber: '1123', id: '1' },
    { tag: 'asdasdasdddddddddddddd', tagNumber: '1123', id: '2' }
  ];

  return (
    <div className='fixed mx-[8px] md:mx-[10px] sm:pt-[65px] md:pt-0'>
      <div className='hidden md:block mt-[70px] bg-ember-dark-300 h-[max-content] min-h-[100px] w-[200px] px-[4px] rounded-[8px]'>
        <div className='grid-rows-2 place-items-center'>
          <div className='flex justify-center'>
            <h1 className=''>following</h1>
          </div>
          <div className='w-[100%] h-[2px] bg-ember-gray my-[1px]'></div>
        </div>
        {fakeFollowing.map((user) => {
          return (
            <div className='grid grid-cols-[30px_auto] gap-[6px] m-[2px] my-[4px]' key={user.id}>
              {/* TODO: change later */}
              <div className='grid place-items-center'>
                <img src={'https://s3.amazonaws.com/images.ecwid.com/images/17696080/1119552768.jpg'} className='h-[30px] w-[30px] rounded-[50%] object-cover aspect-square select-none' alt='' />
              </div>
              <div className='grid grid-flow-row'>
                <h1 className='overflow-hidden'>{`${user.tag}#${user.tagNumber}`}</h1>
                <h6 className='text-ember-gray text-[14px]'>status</h6>
              </div>
            </div>
          );
        })}
      </div>
      <div className='md:hidden'>
        {fakeFollowing.map((user) => {
          return (
            <div className='my-[4px]' key={user.id}>
              <img src={'https://s3.amazonaws.com/images.ecwid.com/images/17696080/1119552768.jpg'} className='h-[30px] w-[30px] rounded-[50%] object-cover aspect-square select-none' alt='' />
            </div>
          );
        })}
      </div>
    </div>
  );
};
