import * as React from "react";
import { useRoutes } from 'react-router-dom';
import LandingPage from '../components/LandingPage/LandingPage';
import Admin from '../components/Admin/Admin';
import MovieBook from "../components/Register/MovieBook";

const routeConfig = [
  { path: "/", element: <LandingPage /> },
  { path: "/movies/:id", element: <MovieBook /> },
  { path: "/admin", element: <Admin /> },
];

const Router = () => {
  let routeResult = useRoutes(routeConfig);
  return routeResult;
}

export default Router;