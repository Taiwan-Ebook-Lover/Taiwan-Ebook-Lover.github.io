import { FunctionComponent } from 'react';
import { useRoutes } from 'react-router-dom';

import config from './config';

const Routes: FunctionComponent = () => {
  const element = useRoutes(config);
  return element;
};

export default Routes;
