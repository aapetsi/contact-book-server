import React from 'react';
import { Provider } from 'react-redux'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import './App.css';
import AppRouter from './routers/AppRouter';
import store from './store/store'

const client = new ApolloClient({
  uri: 'https://apetsi-contact-book.herokuapp.com/v1/graphql',
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store()}>
        <React.StrictMode>
          <AppRouter />
        </React.StrictMode>
      </Provider>
    </ApolloProvider>
  );
}

export default App
