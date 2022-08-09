import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { ErrorPage } from '@components/ErrorPage';

const Page404: NextPage = () => {
  return <ErrorPage error={404} message={`could not find ${useRouter().asPath}`} />;
};

export default Page404;
