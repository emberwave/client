import type { FC } from 'react';
import type { PostProps } from 'types';
import Image from 'next/image';
import { formatTime } from '@utils/formatTime';

import upvote_empty from '@public/reactions/upvote_empty.svg';
import downvote_empty from '@public/reactions/downvote_empty.svg';
import supervote_empty from '@public/reactions/supervote_empty.svg';
import Link from 'next/link';

export const Post: FC<PostProps> = ({ id, title, content, tags, upvotes, downvotes, supervotes, createdAt, author }) => {
  return (
    <div className='bg-ember-dark-300 my-[6px] px-[6px] py-[2px] rounded-none sm:rounded-[8px]'>
      <div className='flex'>
        <h1 className='text-ember-gray text-[14px]'>
          {author.tag}#{author.tagNumber}
        </h1>
        <div className='grid-flow-col gap-[6px] w-[max-content] ml-[20px] hidden sm:grid'>
          {tags.map((tag) => (
            <h1 className='text-ember-accent hover:text-ember-accent-hover duration-200 text-[14px]' key={tag}>
              #{tag}
            </h1> // TODO: link to posts that contain this tag
          ))}
        </div>
        <h1 className='ml-auto text-ember-gray text-[14px]'>{formatTime(createdAt)}</h1>
      </div>
      <div className='grid-flow-col gap-[6px] w-[max-content] grid sm:hidden'>
        {tags.map((tag) => (
          <h1 className='text-ember-accent hover:text-ember-accent-hover duration-200 text-[14px]' key={tag}>
            #{tag}
          </h1> // TODO: link to posts that contain this tag
        ))}
      </div>
      <div className='cursor-pointer'>
        <Link href={`/posts/${id}`}>
          <h1 className='break-words font-bold'>{title}</h1>
        </Link>
      </div>
      <h1 className='break-words whitespace-pre-wrap'>{content}</h1>
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
