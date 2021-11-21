import { booksOfBookstore, bookstoresOfResults } from '@/recoil/searchResults';
import FullWidth from '@components/FullWidth';
import { BookstoreEnum } from '@customTypes/bookstore';
import { Tabs } from 'antd';
import { isEmpty } from 'lodash-es';
import { FunctionComponent, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import ResultEmpty from './ResultEmpty';
import ResultList from './ResultList';

const StyledBorder = styled.div`
  border-bottom: 1px solid var(--gray-4);
  transform: translateY(3.2857rem);
`;

const { TabPane } = Tabs;

const Search: FunctionComponent = () => {
  const [currentTab, setCurrentTab] = useState<BookstoreEnum>();
  const bookstores = useRecoilValue(bookstoresOfResults);
  const booksOfCurrentTab = useRecoilValue(booksOfBookstore(currentTab));

  useEffect(() => setCurrentTab(bookstores[0]?.id), [bookstores]);

  return (
    <>
      <FullWidth>
        <StyledBorder />
      </FullWidth>
      <Tabs
        defaultActiveKey={bookstores[0]?.id}
        tabBarGutter={28}
        onChange={(key) => setCurrentTab(key as BookstoreEnum)}
      >
        {bookstores.map((bookstore) => (
          <TabPane tab={bookstore.displayName} key={bookstore.id} />
        ))}
      </Tabs>
      {isEmpty(booksOfCurrentTab) ? <ResultEmpty /> : <ResultList books={booksOfCurrentTab} />}
    </>
  );
};

export default Search;
