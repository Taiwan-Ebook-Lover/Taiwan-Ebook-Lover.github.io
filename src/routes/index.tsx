import { FunctionComponent } from 'react';
import { useRoutes } from 'react-router-dom';
import config from './routeConfig';

const Routes: FunctionComponent = () => {
  const element = useRoutes(config);
  return element;
};

export default Routes;
