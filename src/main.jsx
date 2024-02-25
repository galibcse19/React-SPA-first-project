import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import UserData from './components/UserData/UserData';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Posts from './components/Posts/Posts';
import ErrorPage from './components/ErrorPage/ErrorPage';

 


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/blog',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Blog></Blog>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/user/:userId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserData></UserData>
      },
      {
        path:'/posts',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
