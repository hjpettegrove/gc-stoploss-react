import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
//  import "bootstrap/dist/css/bootstrap.min.css";    - using CDN in HTML template
import App from './App';
import { DAppProvider } from '@usedapp/core';

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={{}}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


