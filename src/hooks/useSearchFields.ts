import { SearchData } from '@api/useBooksSearch';
import { BookstoreEnum } from '@customTypes/bookstore';
import { OrderByEnum } from '@customTypes/searchOptions';
import booksOrderBy from '@recoil/booksOrderBy';
import bookstoreKeyword from '@recoil/bookstoreKeyword';
import bookstoresFilter from '@recoil/bookstoresFilter';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

export interface useSearchFieldsInterface {
  (searchResult?: SearchData): {
    keyword: string;
    filter: Array<BookstoreEnum>;
    order: OrderByEnum;
  };
}

const useSearchFields: useSearchFieldsInterface = (searchResult) => {
  const [keyword, setKeyword] = useRecoilState(bookstoreKeyword);
  const [filter, setFilter] = useRecoilState(bookstoresFilter);
  const order = useRecoilValue(booksOrderBy);

  useEffect(() => {
    if (searchResult) {
      const bookstores = searchResult.results.map((result) => result.bookstore.id);
      setKeyword(searchResult.keywords);
      setFilter(bookstores);
    }
  }, [searchResult]);

  return { keyword, filter, order };
};

export default useSearchFields;
