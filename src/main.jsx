import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import { HelmetProvider } from 'react-helmet-async';
import ErrorPage from './components/ErrorPage/ErrorPage';
import CardDetails from './components/CardDetails/CardDetails';
import SearchedName from './components/SearchedName/SearchedName';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/searched',
        element: <SearchedName></SearchedName>,
        loader: () => fetch('../card.json')
      },
      {
        path: '/card/:id',
        element: <CardDetails></CardDetails>,
        loader: () => fetch('../card.json')
      },
     ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
