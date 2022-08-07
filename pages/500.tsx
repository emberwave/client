import type { NextPage } from 'next';

import { ErrorPage } from '@components/ErrorPage';

const Page500: NextPage = () => {
  return <ErrorPage error={500} message='server error' />;
};

export default Page500;
