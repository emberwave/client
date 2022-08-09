import type { FC } from 'react';
import { useContext } from 'react';
import type { PostProps } from 'types';
import Image from 'next/image';
import { gql, useQuery } from '@apollo/client';

import loading_animation from '@public/loading.svg';
import island from '@public/emberwave_island.svg';
import camp from '@public/emberwave_camp.svg';
import { Post } from '@components/Post';
import { UserContext } from 'UserContext';

export const PostsList: FC = () => {
  const query = gql`
    query ($newest: Boolean) {
      posts(newest: $newest) {
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

  const { value, setValue } = useContext(UserContext);
  const { error, loading, data, refetch } = useQuery(query, { variables: { newest: true } });

  if (value.reloadPostsList) refetch().then(() => setValue({ reloadPostsList: false }));

  if (loading)
    return (
      <div className='flex justify-center mt-[40px]'>
        <Image src={loading_animation} width={50} height={50} />
      </div>
    );

  if (error)
    return (
      <div className='grid grid-flow-row place-items-center w-[max-content] mx-auto mt-[40px]'>
        <div className='up-down-animation'>
          <Image src={island} width={80} height={80} />
        </div>
        <h1>something went wrong...</h1>
      </div>
    );

  return (
    <>
      {data.posts.map((post: PostProps) => (
        <Post {...post} key={post.id} />
      ))}
      <div>
        <div className='grid grid-flow-row place-items-center w-[max-content] mx-auto mt-[40px]'>
          <div className='up-down-animation'>
            <Image src={camp} width={80} height={80} />
          </div>
          <h1>no more posts :/</h1>
        </div>
      </div>
    </>
  );
};
