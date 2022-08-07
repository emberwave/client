import type { NextPage } from 'next';

import { ErrorPage } from '@components/ErrorPage';

const Page404: NextPage = () => {
  return <ErrorPage error={404} message='not found' />;
};

export default Page404;
