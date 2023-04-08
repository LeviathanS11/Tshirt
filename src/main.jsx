import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import OrderReview from './Components/OrderReview/OrderReview';
import Grandpa from './Components/Grandpa/Grandpa';

const router=createBrowserRouter([
  {
    path:'/',
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('data.json')
      },
      {
        path:'review',
        element:<OrderReview></OrderReview>
      },
      {
        path:'/grandpa',
        element: <Grandpa></Grandpa>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
