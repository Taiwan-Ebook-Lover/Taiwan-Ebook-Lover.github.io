import { lazy } from 'react';
import { RouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';

const SearchLayout = lazy(() => import('@layouts/SearchLayout'));
const Landing = lazy(() => import('@pages/Landing'));
const Search = lazy(() => import('@pages/Search'));

const routeConfig: Array<RouteObject> = [
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: 'searches',
    element: <SearchLayout />,
    children: [
      {
        path: '',
        element: <Search />,
      },
      {
        path: ':searchId',
        element: <Search />,
      },
    ],
  },
  {
    path: 'search/*',
    element: (
      <Navigate to={`${location.pathname}${location.search}`.replace(/^\/search/, '/searches')} />
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
];

export default routeConfig;
