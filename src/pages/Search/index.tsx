import searchResultsAtom, { findSearchResult } from '@/recoil/searchResults';
import FullWidth from '@components/FullWidth';
import { BookstoreEnum } from '@customTypes/bookstore';
import { Tabs } from 'antd';
import _ from 'lodash';
import { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import ResultList from './ResultList';

const StyledBorder = styled.div`
  border-bottom: 1px solid var(--gray-4);
  transform: translateY(3.2857rem);
`;

const { TabPane } = Tabs;

const Search: FunctionComponent = () => {
  const [currentTab, setCurrentTab] = useState<BookstoreEnum>();
  const searchResults = useRecoilValue(searchResultsAtom);
  const bookstores = useMemo(
    () =>
      searchResults.map((result) => ({
        id: result.bookstore.id,
        name: result.bookstore.displayName,
      })),
    [searchResults],
  );
  useEffect(() => setCurrentTab(_.get(bookstores, '0.id')), [bookstores]);

  const currentTabResult = useRecoilValue(findSearchResult(currentTab));

  return (
    <>
      <FullWidth>
        <StyledBorder />
      </FullWidth>
      <Tabs
        defaultActiveKey={_.get(bookstores, '0.id')}
        tabBarGutter={28}
        onChange={(key) => setCurrentTab(key as BookstoreEnum)}
      >
        {_.map(bookstores, (bookstore) => (
          <TabPane tab={bookstore.name} key={bookstore.id} />
        ))}
      </Tabs>
      {currentTabResult && <ResultList searchResult={currentTabResult} />}
    </>
  );
};

export default Search;
