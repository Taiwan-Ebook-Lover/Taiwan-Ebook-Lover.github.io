import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

const BasicLayout: FunctionComponent = () => {
  return (
    <div>
      Layout
      <Outlet />
    </div>
  );
};

export default BasicLayout;
