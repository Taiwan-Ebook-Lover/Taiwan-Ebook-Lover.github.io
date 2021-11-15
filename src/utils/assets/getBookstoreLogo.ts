import booksCompany from '@assets/images/bookstore/booksCompany.png';
import bookWalker from '@assets/images/bookstore/bookWalker.png';
import hyread from '@assets/images/bookstore/hyread.png';
import kindle from '@assets/images/bookstore/kindle.png';
import kobo from '@assets/images/bookstore/kobo.png';
import playStore from '@assets/images/bookstore/playStore.png';
import pubu from '@assets/images/bookstore/pubu.png';
import readmoo from '@assets/images/bookstore/readmoo.png';
import taaze from '@assets/images/bookstore/taaze.png';
import { BookstoreEnum } from '@customTypes/bookstore';

const logos: Record<BookstoreEnum, string> = {
  booksCompany,
  bookWalker,
  hyread,
  kindle,
  kobo,
  playStore,
  pubu,
  readmoo,
  taaze,
};

const getBookstoreLogo = (id: BookstoreEnum): string => logos[id];

export default getBookstoreLogo;
