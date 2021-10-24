import Navbar from '@components/Navbar';
import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLayoutWrapper = styled.div`
  min-height: 100vh;
`;

const BasicLayout: FunctionComponent = () => {
  return (
    <StyledLayoutWrapper>
      <Navbar />
      <Outlet />
    </StyledLayoutWrapper>
  );
};

export default BasicLayout;
