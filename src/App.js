import React from 'react';

import ErrorBoundary from './ErrorBoundary';
import Root from './Router'

import './App.css';

function App() {
  return (
    <ErrorBoundary>
        <Root/>
    </ErrorBoundary>
  );
}

export default App;
