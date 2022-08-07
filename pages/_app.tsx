import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import { UserContext } from '../UserContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [value, setValue] = useState({
    reloadPostsList: false
  });

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={{ value, setValue }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </ApolloProvider>
  );
}

export default MyApp;
