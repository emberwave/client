import type { NextPage } from 'next';

import { Navbar } from '@components/Navbar';
import { PostsList } from '@components/PostsList';
import { CreatePost } from '@components/CreatePost';
import { FollowingsList } from '@components/FollowingsList';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className='pt-[50px]'>
        <div className='hidden sm:block'>
          <FollowingsList />
        </div>
        <div className='w-[100%] sm:w-[85%] md:w-[40%] md:mr-auto px-auto mx-auto pb-[100px] sm:pt-[70px]'>
          <CreatePost />
          <PostsList />
        </div>
      </div>
    </>
  );
};

export default Home;
