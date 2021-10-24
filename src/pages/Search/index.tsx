import useBookstores, { BookstoreData } from '@api/useBookstores';
import booksOrderBy from '@recoil/booksOrderBy';
import bookstoreKeyword from '@recoil/bookstoreKeyword';
import bookstoresFilter from '@recoil/bookstoresFilter';
import { message, Tabs } from 'antd';
import _ from 'lodash';
import { FunctionComponent, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';

const { TabPane } = Tabs;

const Search: FunctionComponent = () => {
  const keyword = useRecoilValue(bookstoreKeyword);
  const filter = useRecoilValue(bookstoresFilter);
  const order = useRecoilValue(booksOrderBy);
  const bookstores = useRef<Array<BookstoreData>>();
  const { bookstores: originBookstores, isLoading, error } = useBookstores();

  useEffect(() => error && message.warning('暫時無法取得書店列表。'), [error]);
  if (isLoading) return null;

  /* eslint-disable indent */
  bookstores.current = originBookstores
    ? _.filter(originBookstores, (o) => {
        return _.includes(filter, o.id);
      })
    : _.map(filter, (f) => ({
        id: f,
        displayName: f as string,
        website: '',
        isOnline: false,
        status: '',
      }));
  /* eslint-enable indent */

  return (
    <div>
      <Tabs defaultActiveKey={filter[0]} tabBarGutter={28}>
        {_.map(bookstores.current, (bookstore) => (
          <TabPane tab={bookstore.displayName} key={bookstore.id}>
            {bookstore.displayName}
          </TabPane>
        ))}
      </Tabs>
      <p>Search Page</p>
      <p>{keyword || '-'}</p>
      <p>{filter.join(' | ')}</p>
      <p>{order}</p>
    </div>
  );
};

export default Search;
