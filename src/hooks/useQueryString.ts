import { BookstoreEnum } from '@customTypes/bookstore';
import { OrderByEnum } from '@customTypes/searchOptions';
import booksOrderBy from '@recoil/booksOrderBy';
import bookstoreKeyword from '@recoil/bookstoreKeyword';
import bookstoresFilter from '@recoil/bookstoresFilter';
import qs from 'query-string';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

export interface queryStringInterface {
  q?: string;
  bookstores?: Array<BookstoreEnum>;
  order?: OrderByEnum;
}

export interface useQueryStringInterface {
  (syncToRecoil?: boolean): { queryString?: queryStringInterface };
}

const useQueryString: useQueryStringInterface = (syncToRecoil = false) => {
  const [queryString, setQueryString] = useState<queryStringInterface>();
  const [, setKeyword] = useRecoilState(bookstoreKeyword);
  const [, setFilter] = useRecoilState(bookstoresFilter);
  const [, setOrder] = useRecoilState(booksOrderBy);

  useEffect(() => {
    setQueryString(
      qs.parse(location.search, { arrayFormat: 'bracket-separator', arrayFormatSeparator: ',' }),
    );
  }, [location.search]);

  useEffect(() => {
    if (syncToRecoil) {
      const q = queryString?.q;
      const bookstores = queryString?.bookstores;
      const order = queryString?.order;
      if (q) setKeyword(q);
      if (bookstores) setFilter(bookstores);
      if (order) setOrder(order);
    }
  }, [syncToRecoil, queryString]);

  return { queryString };
};

export default useQueryString;
