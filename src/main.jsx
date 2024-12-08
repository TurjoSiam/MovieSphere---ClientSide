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
import ForgotPassword from './Route Components/ForgotPassword.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import MyFavourites from './Route Components/MyFavourites.jsx';
import PrivateRoute from './Route Components/PrivateRoute.jsx';
import MovieDetails from './Route Components/MovieDetails.jsx';
import UpdateMovie from './Route Components/UpdateMovie.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://server-side-alpha-dusky.vercel.app/featuredmovies')
      },
      {
        path: "/addmovies",
        element: <PrivateRoute><AddMovies></AddMovies></PrivateRoute>
      },
      {
        path: "/myfavorite/:email",
        element: <PrivateRoute><MyFavourites></MyFavourites></PrivateRoute>,
        loader: ({params}) => fetch(`https://server-side-alpha-dusky.vercel.app/favoritemovies/${params.email}`)
      },
      {
        path: "/allmovies",
        element: <AllMovies></AllMovies>,
        loader: () => fetch('https://server-side-alpha-dusky.vercel.app/allmovies')
      },
      {
        path: "/allmovies/:id",
        element: <PrivateRoute><MovieDetails></MovieDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://server-side-alpha-dusky.vercel.app/allmovies/${params.id}`)
      },
      {
        path: "/allmovies/updatemovie/:id",
        element: <PrivateRoute><UpdateMovie></UpdateMovie></PrivateRoute>,
        loader: ({params}) => fetch(`https://server-side-alpha-dusky.vercel.app/allmovies/${params.id}`)
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
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword></ForgotPassword>
      }
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
