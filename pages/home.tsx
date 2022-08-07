import type { NextPage } from 'next';

import { Navbar } from '@components/Navbar';
import { PostsList } from '@components/PostsList';
import { CreatePost } from '@components/CreatePost';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className='w-[35%] mx-auto pt-[50px] pb-[100px] sm:pt-[70px]'>
        <CreatePost />
        <PostsList />
      </div>
    </>
  );
};

export default Home;
