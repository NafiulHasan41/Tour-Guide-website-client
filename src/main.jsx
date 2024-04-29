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
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import AddTouristSpot from './AddTouristSpot/AddTouristSpot.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import List from './List/List.jsx';
import Details from './Details/Details.jsx';
import UpdateList from './UpdateList/UpdateList.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader:()=> fetch('http://localhost:4000/touristSpots')
      },
      {
        path:"/aboutUs",
        element:<AboutUs/>
      },
      {
        path:"/allTouristSpot",
        element:<AllTouristSpot/>,
        loader:()=> fetch('http://localhost:4000/touristSpots')
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/addTouristSpot",
        element:<PrivateRoute><AddTouristSpot/></PrivateRoute>  ,
      },
      {
        path: "/myList",
        element:<PrivateRoute> <List/> </PrivateRoute> ,
        loader:()=> fetch('http://localhost:4000/touristSpots'),
      },
      {
        path: "/details/:id",
        element:<PrivateRoute> <Details/> </PrivateRoute> ,
        loader:({params})=> fetch(`http://localhost:4000/touristSpots/${params.id}`)
      },
      {
        path: "myList/update/:id",
        element:<PrivateRoute> <UpdateList/> </PrivateRoute> ,
        loader:({params})=> fetch(`http://localhost:4000/touristSpots/${params.id}`)
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
