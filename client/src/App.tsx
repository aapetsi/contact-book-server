import React from 'react';
import { Provider } from 'react-redux'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import './App.css';
import AppRouter from './routers/AppRouter';
import store from './store/store'

const client = new ApolloClient({
  uri: 'https://apetsi-contact-book.herokuapp.com/v1/graphql'
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store()}>
        <AppRouter />
      </Provider>
    </ApolloProvider>
  );
}

export default App;
