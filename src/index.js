import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './Home';
import Characters from './Characters';
import Episodes from './Episodes';
import Character from './Character';
import Episode from './Episode'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
  },
  {
        path: "/characters/:page/",
        element: <Characters />,
  },
  {
        path: "/character/:characterId/",
        element: <Character/>,
  },
  {
    path: "/episode/:episodeId/",
    element: <Episode/>,
  },
  {
        path: "/episodes/",
        element: <Episodes />,
  },   
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>
);
