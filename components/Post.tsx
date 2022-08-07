import type { FC } from 'react';
import type { PostProps } from 'types';
import Image from 'next/image';
import { formatTime } from '@utils/formatTime';

import upvote_empty from '@public/reactions/upvote_empty.svg';
import downvote_empty from '@public/reactions/downvote_empty.svg';
import supervote_empty from '@public/reactions/supervote_empty.svg';

export const Post: FC<PostProps> = ({ id, title, content, tags, upvotes, downvotes, supervotes, createdAt }) => {
  return (
    <div className='bg-ember-dark-300 my-[6px] px-[6px] py-[2px] rounded-[8px]'>
      <div className='flex'>
        <h1>author</h1>
        <div className='grid grid-flow-col gap-[6px] w-[max-content] ml-[20px]'>
          {tags.map((tag) => (
            <h1 className='text-ember-accent hover:text-ember-accent-hover duration-200'>#{tag}</h1> // TODO: link to posts that contain this tag
          ))}
        </div>
        <h1 className='ml-auto text-ember-gray'>{formatTime(createdAt)}</h1>
      </div>
      <h1 className='break-words'>{title}</h1>
      <h1 className='break-words'>{content}</h1>
      <div className='grid grid-cols-3 w-[max-content] gap-[10px]'>
        <div className='grid grid-cols-2 place-items-center'>
          <h1>{upvotes}</h1>
          <div className='select-none flex align-middle'>
            <Image src={upvote_empty} width={15} height={15} />
          </div>
        </div>
        <div className='grid grid-cols-2 place-items-center'>
          <h1>{downvotes}</h1>
          <div className='select-none flex align-middle'>
            <Image src={downvote_empty} width={15} height={15} />
          </div>
        </div>
        <div className='grid grid-cols-2 place-items-center'>
          <h1>{supervotes}</h1>
          <div className='select-none flex align-middle'>
            <Image src={supervote_empty} width={15} height={15} />
          </div>
        </div>
      </div>
    </div>
  );
};
