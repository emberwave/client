import type { NextPage } from 'next';
import type { PostProps } from '../../types';
import { gql } from '@apollo/client';
import client from '../../apollo-client';

const PostPage: NextPage<{ post: PostProps }> = ({ post }) => {
  return (
    <div>
      <h1>post page</h1>
      <h1>{post.title}</h1>
      <h1>{post.content}</h1>
      <h1>{post.downvotes}</h1>
      <h1>{post.upvotes}</h1>
      <h1>{post.supervotes}</h1>
      <h1>{post.createdAt}</h1>
      <h1>author</h1>
      <h1>
        {post.author.tag}#{post.author.tagNumber}
      </h1>
    </div>
  );
};

export const getServerSideProps = async ({ params }: any) => {
  const postQuery = gql`
    query ($postId: ID!) {
      post(id: $postId) {
        title
        content
        tags
        upvotes
        downvotes
        supervotes
        createdAt
        author {
          tag
          tagNumber
        }
      }
    }
  `;

  const { data } = await client.query({ query: postQuery, variables: { postId: params.id } });
  return { props: { post: data.post } };
};

export default PostPage;
