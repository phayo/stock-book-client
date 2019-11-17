import React from 'react';

import store from './store';
import { Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';
import Root from './Router'

import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Root/>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
