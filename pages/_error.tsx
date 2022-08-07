import type { NextPage } from 'next';

import { ErrorPage } from '@components/ErrorPage';

const Error: NextPage = () => {
  return <ErrorPage message='something went wrong...' />;
};

export default Error;
