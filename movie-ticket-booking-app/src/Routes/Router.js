import * as React from "react";
import { useRoutes } from 'react-router-dom';
import Login from '../components/Login/Login';
import LandingPage from '../components/LandingPage/LandingPage';
import Register from '../components/Register/Register';
import Admin from '../components/Admin/Admin';

const routeConfig = [
  { path: "/", element: <LandingPage /> },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "admin", element: <Admin /> },
];

const Router = () => {
  let routeResult = useRoutes(routeConfig);
  return routeResult;
}

export default Router;