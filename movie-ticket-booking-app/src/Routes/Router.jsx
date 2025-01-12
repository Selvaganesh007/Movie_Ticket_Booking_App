import { useRoutes } from 'react-router-dom';
import LandingPage from '../components/UserOverview/LandingPage/LandingPage.jsx';
import Admin from '../components/Admin/Admin';
import MovieBook from "../components/Register/MovieBook";
import Dashboard from "../components/Admin/Dashboard/Dashboard";
import Screen from "../components/Admin/Screen/Screen";
import Show from "../components/Admin/Show/Show";

const routeConfig = [
  { path: "/", element: <LandingPage /> },
  { path: "/movies/:id", element: <MovieBook /> },
  { path: "/admin", element: <Admin />,
    children: [
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