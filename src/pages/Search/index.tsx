import {
  booksOfBookstore,
  BooksOfBookstoreParamType,
  bookstoresOfResults,
} from '@/recoil/searchResults';
import { breakpoints } from '@assets/themes/globalTheme';
import Box from '@components/Box';
import booksOrderBy from '@recoil/booksOrderBy';
import { scrollToTop } from '@utils/window/scroll';
import { Tabs } from 'antd';
import { isEmpty } from 'lodash-es';
import { FunctionComponent, useEffect, useState } from 'react';
import { forceCheck } from 'react-lazyload';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import ResultEmpty from './ResultEmpty';
import ResultList from './ResultList';

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: var(--gray-1);
  z-index: 1;
`;

const StyledBorder = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  border-bottom: 1px solid var(--gray-4);
`;

const { TabPane } = Tabs;

const Search: FunctionComponent = () => {
  const [currentTab, setCurrentTab] = useState<BooksOfBookstoreParamType>('all');
  const orderBy = useRecoilValue(booksOrderBy);
  const bookstores = useRecoilValue(bookstoresOfResults);
  const booksOfCurrentTab = useRecoilValue(booksOfBookstore(currentTab));

  useEffect(() => setCurrentTab('all'), [bookstores]);
  useEffect(() => {
    scrollToTop();
    forceCheck();
  }, [currentTab]);
  useEffect(() => forceCheck(), [orderBy]);

  return (
    <>
      <StyledHeaderWrapper>
        <Tabs
          activeKey={currentTab}
          tabBarGutter={28}
          onChange={(key) => setCurrentTab(key as BooksOfBookstoreParamType)}
          tabBarStyle={{ marginBottom: 0 }}
          style={{
            maxWidth: breakpoints.xl,
            width: breakpoints.xl,
          }}
        >
          {[{ id: 'all', displayName: '全部' }, ...bookstores].map((bookstore) => (
            <TabPane tab={bookstore.displayName} key={bookstore.id} />
          ))}
        </Tabs>
        <StyledBorder />
      </StyledHeaderWrapper>
      <Box maxWidth={breakpoints.xl} mx="auto">
        {isEmpty(booksOfCurrentTab) ? (
          <ResultEmpty />
        ) : (
          <ResultList books={booksOfCurrentTab} setCurrentTab={setCurrentTab} />
        )}
      </Box>
    </>
  );
};

export default Search;
