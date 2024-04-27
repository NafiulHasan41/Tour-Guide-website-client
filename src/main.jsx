import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Root.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Error from './Error/Error.jsx';
import Home from './Home/Home.jsx';
import AboutUs from './AboutUs/AboutUs.jsx';
import AllTouristSpot from './AllTouristSpot/AllTouristSpot.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/aboutUs",
        element:<AboutUs/>
      },
      {
        path:"/allTouristSpot",
        element:<AllTouristSpot/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
    
  </React.StrictMode>,
)
