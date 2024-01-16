import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactRouter } from './reactRouter';
import { BrowserRouter } from 'react-router-dom';
import { UseRoutes } from './useRoutes';
import { Hooks } from './Hooks';
import { UseContext } from './useContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ReactRouter /> */}
      {/* <UseRoutes /> */}
      {/* <Hooks /> */}
      <UseContext />
    </BrowserRouter>
  </React.StrictMode>
);