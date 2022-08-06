import type { FC } from 'react';
import type { PostProps } from 'types';
import Image from 'next/image';
import { gql, useQuery } from '@apollo/client';

import loading_icon from '@public/loading.svg';
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
      <div>
        <Image src={loading_icon} />
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
