import type { NextPage } from 'next';
import { Navbar } from '@components/Navbar';
import { PostsList } from '@components/PostsList';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className='w-[35%] mx-auto pt-[50px] pb-[100px] sm:pt-[70px]'>
        <PostsList />
      </div>
    </>
  );
};

export default Home;
