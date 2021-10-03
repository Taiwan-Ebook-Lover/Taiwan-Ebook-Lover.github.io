import { lazy } from 'react';
import { RouteObject } from 'react-router';

const Landing = lazy(() => import('@pages/Landing'));
const Search = lazy(() => import('@pages/Search'));

const routeConfig: Array<RouteObject> = [
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: 'searches',
    element: <Search />,
    children: [
      {
        path: ':searchId',
        element: <Search />,
      },
    ],
  },
];

export default routeConfig;
