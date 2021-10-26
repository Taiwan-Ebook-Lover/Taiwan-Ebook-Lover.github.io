import { breakpoints } from '@assets/themes/globalTheme';
import Box from '@components/Box';
import KeywordInput from '@components/KeywordInput';
import Navbar from '@components/Navbar';
import SearchOptions from '@components/SearchOptions';
import useQueryString from '@hooks/useQueryString';
import _ from 'lodash';
import { FunctionComponent } from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledLayoutWrapper = styled.div`
  min-height: 100vh;
  background-color: white;
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
      <Box
        display={['none', null, null, 'flex']}
        justifyContent="center"
        py="1.5rem"
        bg="var(--gray-4)"
        borderBottom="1px solid var(--gray-5)"
      >
        <Box
          display="flex"
          alignItems="center"
          maxWidth={breakpoints.xl}
          width="100%"
          px={['1rem', null, null, null, null, '0']}
        >
          <KeywordInput />
          <SearchOptions ml="1.5rem" />
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" mt="0.5rem">
        <StyledOutletWrapper>
          <Outlet />
        </StyledOutletWrapper>
      </Box>
    </StyledLayoutWrapper>
  );
};

export default BasicLayout;
