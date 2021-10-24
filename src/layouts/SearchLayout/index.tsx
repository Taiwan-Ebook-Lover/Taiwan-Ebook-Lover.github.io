import { breakpoints } from '@assets/themes/globalTheme';
import Box from '@components/Box';
import Navbar from '@components/Navbar';
import useQueryString from '@hooks/useQueryString';
import _ from 'lodash';
import { FunctionComponent } from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledLayoutWrapper = styled.div`
  min-height: 100vh;
`;

const StyledOutletWrapper = styled.div`
  max-width: ${breakpoints.xl};
  width: 100%;
`;

const BasicLayout: FunctionComponent = () => {
  const { queryString } = useQueryString(true);
  const { searchId } = useParams();

  if (!queryString) return null;
  if (_.isEmpty(queryString) && !searchId) return <Navigate to="/" />;

  return (
    <StyledLayoutWrapper>
      <Navbar />
      <Box display="flex" justifyContent="center">
        <StyledOutletWrapper>
          <Outlet />
        </StyledOutletWrapper>
      </Box>
    </StyledLayoutWrapper>
  );
};

export default BasicLayout;
