import { Book, SearchResult } from '@api/useBooksSearch';
import { BookstoreEnum } from '@customTypes/bookstore';
import { selectorFamily } from 'recoil';

import searchResults from './atom';

export interface BookWithBookstore extends Book {
  bookstoreId: BookstoreEnum;
  bookstoreName: string;
}

const mergeStoreIntoBook = (result: SearchResult): Array<BookWithBookstore> => {
  return result.books.map((book) => ({
    ...book,
    bookstoreId: result.bookstore.id,
    bookstoreName: result.bookstore.displayName,
  }));
};

/* eslint-disable indent */
export const booksOfBookstore = selectorFamily<
  Array<BookWithBookstore>,
  BookstoreEnum | 'all' | undefined
>({
  key: 'BooksOfBookstore',
  get:
    (bookstore) =>
    ({ get }) => {
      const results = get(searchResults);

      if (!results || !bookstore) {
        return [];
      } else if (bookstore === 'all') {
        return results.reduce((all, current) => {
          return all.concat(mergeStoreIntoBook(current));
        }, [] as Array<BookWithBookstore>);
      } else {
        const result = results.find((result) => result.bookstore.id === bookstore);
        return result ? mergeStoreIntoBook(result) : [];
      }
    },
});
/* eslint-enable indent */
