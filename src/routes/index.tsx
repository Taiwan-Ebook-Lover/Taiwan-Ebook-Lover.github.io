import { FunctionComponent } from 'react';
import { useRoutes } from 'react-router-dom';
import config from './routeConfig';

const Routes: FunctionComponent = () => {
  return useRoutes(config);
};

export default Routes;
