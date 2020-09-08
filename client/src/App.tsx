import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import './App.css';
import AppRouter from './routers/AppRouter';

const client = new ApolloClient({
  uri: 'https://apetsi-contact-book.herokuapp.com/v1/graphql',
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <React.StrictMode>
        <AppRouter />
      </React.StrictMode>
    </ApolloProvider>
  );
}

export default App
