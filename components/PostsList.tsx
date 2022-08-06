import type { FC } from 'react';
import type { PostProps } from 'types';
import Image from 'next/image';
import { gql, useQuery } from '@apollo/client';

import loading_animation from '@public/loading.svg';
import island from '@public/emberwave_island.svg';
import { Post } from '@components/Post';

export const PostsList: FC = () => {
  const query = gql`
    query {
      posts {
        id
        title
        content
        tags
        upvotes
        downvotes
        supervotes
        createdAt
      }
    }
  `;

  const { error, loading, data } = useQuery(query);

  if (loading)
    return (
      <div className='flex justify-center'>
        <Image src={loading_animation} width={50} height={50} />
      </div>
    );

  if (error)
    return (
      <div className='grid grid-flow-row place-items-center w-[max-content]'>
        <div>
          <Image src={island} width={80} height={80} />
        </div>
        <h1>something went wrong...</h1>
      </div>
    );

  return (
    <div>
      {data.posts.map(({ id, title, content, tags, upvotes, downvotes, supervotes, createdAt }: PostProps) => (
        <Post id={id} title={title} content={content} tags={tags} upvotes={upvotes} downvotes={downvotes} supervotes={supervotes} createdAt={createdAt} />
      ))}
    </div>
  );
};
