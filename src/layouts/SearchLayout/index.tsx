import searchResultsAtom from '@/recoil/searchResults';
import useBooksSearch from '@api/useBooksSearch';
import { breakpoints } from '@assets/themes/globalTheme';
import Box from '@components/Box';
import KeywordInput from '@components/KeywordInput';
import Navbar from '@components/Navbar';
import SearchOptions from '@components/SearchOptions';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useNavigateToSearch from '@hooks/useNavigateToSearch';
import bookstoreKeyword from '@recoil/bookstoreKeyword';
import bookstoresFilter from '@recoil/bookstoresFilter';
import { qsExcludeOrder, qsParse, qsStringify } from '@utils/url/queryString';
import { BackTop, message } from 'antd';
import { isEmpty } from 'lodash-es';
import { FunctionComponent, useEffect, useMemo } from 'react';
import { Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import BooksLoading from './BooksLoading';

const StyledLayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export interface BasicLayoutProps {
  urlParams: string;
}

const BasicLayout: FunctionComponent<BasicLayoutProps> = ({ urlParams }) => {
  const navigate = useNavigate();
  const { searchResult, isLoading, error } = useBooksSearch(urlParams);
  const setSearchResults = useSetRecoilState(searchResultsAtom);
  const setKeyword = useSetRecoilState(bookstoreKeyword);
  const setFilter = useSetRecoilState(bookstoresFilter);
  const onSearch = useNavigateToSearch();

  useEffect(() => {
    if (error) message.warning(error.message);
  }, [error]);
  useEffect(() => {
    if (searchResult && !isEmpty(searchResult)) {
      const bookstores = searchResult.results.map((result) => result.bookstore.id);
      setFilter(bookstores);
      setKeyword(searchResult.keywords);
      navigate(`/searches/${searchResult.id}`);
      setSearchResults(searchResult.results);
    }
  }, [searchResult]);

  return (
    <StyledLayoutWrapper>
      <Navbar onConfirm={onSearch} />
      <Box display={['none', null, null, 'flex']} justifyContent="center" mt="1.5rem" mb="1rem">
        <Box
          display="flex"
          alignItems="center"
          maxWidth={breakpoints.xl}
          width="100%"
          px={['1rem', null, null, null, null, '0']}
        >
          <KeywordInput onSubmit={onSearch} />
          <SearchOptions ml="1.5rem" filterProps={{ showConfirm: true, onConfirm: onSearch }} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" flex="1">
        <Box maxWidth={breakpoints.xl} width="100%">
          {isLoading && (
            <Box height="100%" display="flex" justifyContent="center" alignItems="center">
              <BooksLoading />
            </Box>
          )}
          <Box display={!isLoading && searchResult ? 'block' : 'none'}>
            <Outlet />
          </Box>
        </Box>
      </Box>
      <BackTop>
        <FontAwesomeIcon
          icon={faChevronCircleUp}
          style={{
            fontSize: '2.5rem',
            color: 'var(--primary-color)',
            backgroundColor: 'var(--gray-1)',
            borderRadius: '50%',
          }}
        />
      </BackTop>
    </StyledLayoutWrapper>
  );
};

const BasicLayoutWrapper: FunctionComponent = () => {
  const { searchId } = useParams();
  const qsObject = useMemo(() => qsParse(qsExcludeOrder(location.search)), [location.search]);

  if (!searchId && !qsObject.q) return <Navigate to="/" />;
  return (
    <BasicLayout urlParams={searchId || `?${qsStringify(qsObject, { arrayFormat: 'bracket' })}`} />
  );
};

export default BasicLayoutWrapper;
