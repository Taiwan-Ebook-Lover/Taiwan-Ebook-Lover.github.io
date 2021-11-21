import { BookstoreData } from '@api/useBookstores';
import { selector } from 'recoil';

import searchResults from './atom';

export const bookstoresOfResults = selector<Array<BookstoreData>>({
  key: 'BookstoresOfResults',
  get: ({ get }) => get(searchResults).map((result) => result.bookstore),
});
