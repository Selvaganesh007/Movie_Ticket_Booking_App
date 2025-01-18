import { Navigate, useRoutes } from 'react-router-dom';
import LandingPage from '../components/UserOverview/LandingPage/LandingPage.jsx';
import Admin from '../components/Admin/Admin';
import MovieDetailPage from "../components/MovieDetailPage/MovieDetailPage.jsx";
import Dashboard from "../components/Admin/Dashboard/Dashboard";
import Screen from "../components/Admin/Screen/Screen";
import Show from "../components/Admin/Show/Show";

const routeConfig = [
  { path: "/", element: <LandingPage /> },
  { path: "/movie/:id", element: <MovieDetailPage /> },
  { path: "/admin", element: <Admin />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "screen", element: <Screen /> },
      { path: "show", element: <Show /> },
    ],
   },
];

const Router = () => {
  let routeResult = useRoutes(routeConfig);
  return routeResult;
}

export default Router;