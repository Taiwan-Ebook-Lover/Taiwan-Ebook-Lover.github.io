import { BookstoreEnum } from '@customTypes/bookstore';
import { atom } from 'recoil';

const bookstoresFilter = atom<Array<BookstoreEnum>>({
  key: 'bookstoresFilter',
  default: [
    BookstoreEnum.BOOKS_COMPANY,
    BookstoreEnum.BOOK_WALKER,
    BookstoreEnum.HYREAD,
    BookstoreEnum.KINDLE,
    BookstoreEnum.KOBO,
    BookstoreEnum.PLAY_STORE,
    BookstoreEnum.PUBU,
    BookstoreEnum.READMOO,
    BookstoreEnum.TAAZE,
  ],
});

export default bookstoresFilter;
