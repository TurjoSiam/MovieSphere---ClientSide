import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import ErrorPage from './Error Page/ErrorPage.jsx';
import Home from './Route Components/Home.jsx';
import AddMovies from './Route Components/AddMovies.jsx';
import AllMovies from './Route Components/AllMovies.jsx';
import Policy from './Route Components/Policy.jsx';
import Register from './Route Components/Register.jsx';
import Login from './Route Components/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/allmovies')
      },
      {
        path: "/addmovies",
        element: <AddMovies></AddMovies>
      },
      {
        path: "/allmovies",
        element: <AllMovies></AllMovies>
      },
      {
        path: "/policy",
        element: <Policy></Policy>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
