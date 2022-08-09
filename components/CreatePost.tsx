import { FC, useContext } from 'react';
import { gql, useMutation } from '@apollo/client';
import TextareaAutosize from 'react-textarea-autosize';
import { UserContext } from 'UserContext';

export const CreatePost: FC = () => {
  let title: string | undefined, content: string | undefined;

  const getPostInput = () => {
    if (typeof window !== 'undefined') {
      title = (document.getElementById('title') as HTMLInputElement)?.value;
      content = (document.getElementById('content') as HTMLInputElement)?.value;

      return { title, content };
    }
  };

  const createPostMutation = gql`
    mutation ($authorId: ID!, $title: String!, $content: String!, $tags: [String]!) {
      createPost(authorId: $authorId, title: $title, content: $content, tags: $tags)
    }
  `;

  const { setValue } = useContext(UserContext);

  const [_submitPost] = useMutation(createPostMutation);
  const submitPost = () => {
    if (getPostInput()?.title.length !== 0) {
      // TODO: change temp author id
      _submitPost({ variables: { authorId: '62f1928101da0d0fef48f46b', title, content, tags: ['remember', 'to', 'add', 'later'] } }).then(() => setValue({ reloadPostsList: true }));

      if (typeof window !== 'undefined') {
        (document.getElementById('title') as HTMLInputElement).value = '';
        (document.getElementById('content') as HTMLInputElement).value = '';
      }
    }
  };

  return (
    <div className='bg-ember-dark-300 rounded-none sm:rounded-[8px] p-[4px]'>
      <h1 className='ml-[4px]'>say something...</h1>
      <div className='grid grid-flow-row gap-[6px] m-[2px] mb-[4px]'>
        <TextareaAutosize id='title' placeholder='title (required)' className='bg-ember-dark-200 rounded-[6px] pl-[4px] pr-[2px] outline-none overflow-x-hidden text-white no-scrollbar resize-none' />
        <TextareaAutosize id='content' minRows={3} placeholder='content' className='bg-ember-dark-200 rounded-[6px] pl-[4px] pr-[2px] outline-none text-white no-scrollbar resize-none whitespace-pre-line' />
      </div>
      <button onClick={() => submitPost()} className='bg-ember-accent hover:bg-ember-accent-hover duration-100 rounded-[8px] px-[4px] m-[2px]'>
        <h1>submit</h1>
      </button>
    </div>
  );
};
