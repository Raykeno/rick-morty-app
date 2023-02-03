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
import LoginPage from './LoginPage'
import Favorites from './Favorites'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { store } from './store/store';
import { Provider } from 'react-redux';

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
  {
    path: "/login/",
    element: <LoginPage />,
  },
  {
    path: "/favoris/",
    element: <Favorites />,
  },   
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}  />
    </Provider>
  </React.StrictMode>
);
