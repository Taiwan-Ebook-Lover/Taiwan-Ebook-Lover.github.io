import {
  booksOfBookstore,
  BooksOfBookstoreParamType,
  bookstoresOfResults,
} from '@/recoil/searchResults';
import FullWidth from '@components/FullWidth';
import booksOrderBy from '@recoil/booksOrderBy';
import { scrollToTop, shakeView } from '@utils/window/scroll';
import { Tabs } from 'antd';
import { isEmpty } from 'lodash-es';
import { FunctionComponent, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import ResultEmpty from './ResultEmpty';
import ResultList from './ResultList';

const StyledHeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: var(--gray-1);
  z-index: 1;
`;

const StyledBorder = styled.div`
  border-bottom: 1px solid var(--gray-4);
  transform: translateY(3.2857rem);
`;

const { TabPane } = Tabs;

const Search: FunctionComponent = () => {
  const [currentTab, setCurrentTab] = useState<BooksOfBookstoreParamType>('all');
  const orderBy = useRecoilValue(booksOrderBy);
  const bookstores = useRecoilValue(bookstoresOfResults);
  const booksOfCurrentTab = useRecoilValue(booksOfBookstore(currentTab));

  useEffect(() => {
    shakeView();
    scrollToTop();
  }, [currentTab]);
  useEffect(() => {
    shakeView(); // To show books which lazyload.
  }, [orderBy]);

  return (
    <>
      <StyledHeaderWrapper>
        <FullWidth>
          <StyledBorder />
        </FullWidth>
        <Tabs
          activeKey={currentTab}
          tabBarGutter={28}
          onChange={(key) => setCurrentTab(key as BooksOfBookstoreParamType)}
          tabBarStyle={{ marginBottom: 0 }}
        >
          {[{ id: 'all', displayName: '全部' }, ...bookstores].map((bookstore) => (
            <TabPane tab={bookstore.displayName} key={bookstore.id} />
          ))}
        </Tabs>
      </StyledHeaderWrapper>
      {isEmpty(booksOfCurrentTab) ? (
        <ResultEmpty />
      ) : (
        <ResultList books={booksOfCurrentTab} setCurrentTab={setCurrentTab} />
      )}
    </>
  );
};

export default Search;
