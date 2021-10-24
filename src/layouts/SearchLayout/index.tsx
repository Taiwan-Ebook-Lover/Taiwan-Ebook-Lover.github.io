import Navbar from '@components/Navbar';
import useQueryString from '@hooks/useQueryString';
import _ from 'lodash';
import { FunctionComponent } from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledLayoutWrapper = styled.div`
  min-height: 100vh;
`;

const BasicLayout: FunctionComponent = () => {
  const { queryString } = useQueryString(true);
  const { searchId } = useParams();

  if (!queryString) return null;
  if (_.isEmpty(queryString) && !searchId) return <Navigate to="/" />;

  return (
    <StyledLayoutWrapper>
      <Navbar />
      <Outlet />
    </StyledLayoutWrapper>
  );
};

export default BasicLayout;
