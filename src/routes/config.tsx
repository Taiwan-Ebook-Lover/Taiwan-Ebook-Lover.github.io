import { lazy } from 'react';
import { RouteObject } from 'react-router';

const BasicLayout = lazy(() => import('@layouts/BasicLayout'));
const Landing = lazy(() => import('@pages/Landing'));
const Search = lazy(() => import('@pages/Search'));

const routeConfig: Array<RouteObject> = [
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        path: '',
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
    ],
  },
];

export default routeConfig;
