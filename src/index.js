import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './View/Home/Home';
import Arohi from './View/Arohi/Arohi';
import About from './View/About/About Us';
import Past from './View/Past/Past';
import Ragistetion from './View/Ragistetion/Ragistetion';


import {createBrowserRouter,RouterProvider} from 'react-router-dom'
const routes = createBrowserRouter(
  [
    
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/arohi",
      element:<Arohi/>
    },
    {
      path:"/About",
      element:<About/>
    },
    {
      path:"/Past",
      element:<Past/>
    },
    {
      path:"/Ragistetion",
      element:<Ragistetion/>
    }
    
  ]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <RouterProvider router={routes}/>

  </>
 
);
