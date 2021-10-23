import { BookstoreType } from '@customTypes/bookstore';
import { atom } from 'recoil';

const bookstoresFilter = atom<Array<BookstoreType>>({
  key: 'bookstoresFilter',
  default: [
    'bookWalker',
    'booksCompany',
    'hyread',
    'kindle',
    'kobo',
    'playStore',
    'pubu',
    'readmoo',
    'taaze',
  ],
});

export default bookstoresFilter;
