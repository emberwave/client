import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Navbar } from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default Home;
