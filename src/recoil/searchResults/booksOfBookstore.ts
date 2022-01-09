import { Book, SearchResult } from '@api/useBooksSearch';
import { BookstoreEnum } from '@customTypes/bookstore';
import { OrderByEnum } from '@customTypes/searchOptions';
import booksOrderBy from '@recoil/booksOrderBy';
import { selectorFamily } from 'recoil';
import searchResults from './atom';

export interface BookWithBookstore extends Book {
  bookstoreId: BookstoreEnum;
  bookstoreName: string;
}

export type BooksOfBookstoreParamType = BookstoreEnum | 'all' | undefined;

const mergeStoreIntoBook = (result: SearchResult): Array<BookWithBookstore> => {
  return result.books.map((book) => ({
    ...book,
    bookstoreId: result.bookstore.id,
    bookstoreName: result.bookstore.displayName,
  }));
};

const sortBooks = (
  books: Array<BookWithBookstore>,
  orderBy: OrderByEnum,
): Array<BookWithBookstore> => {
  if (orderBy === OrderByEnum.PRICE_ASC) {
    return books.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (orderBy === OrderByEnum.PRICE_DESC) {
    return books.sort((a, b) => {
      return b.price - a.price;
    });
  }
  return books;
};

/* eslint-disable indent */
export const booksOfBookstore = selectorFamily<Array<BookWithBookstore>, BooksOfBookstoreParamType>(
  {
    key: 'BooksOfBookstore',
    get:
      (bookstore) =>
      ({ get }) => {
        const results = get(searchResults);
        const orderBy = get(booksOrderBy);

        if (!results || !bookstore) {
          return [];
        } else if (bookstore === 'all') {
          return sortBooks(
            results.reduce((all, current) => {
              return all.concat(mergeStoreIntoBook(current));
            }, [] as Array<BookWithBookstore>),
            orderBy,
          );
        }
        const result = results.find(
          (resultOfBookstore) => resultOfBookstore.bookstore.id === bookstore,
        );
        return result ? sortBooks(mergeStoreIntoBook(result), orderBy) : [];
      },
  },
);
/* eslint-enable indent */
