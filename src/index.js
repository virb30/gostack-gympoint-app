import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import { store } from './store';

import App from './App';

export default function src() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <App />
    </Provider>
  );
}
