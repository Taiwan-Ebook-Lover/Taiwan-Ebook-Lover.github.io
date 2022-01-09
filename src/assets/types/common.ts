import { BookstoreEnum } from '@customTypes/bookstore';
import { OrderByEnum } from '@customTypes/searchOptions';

export type ErrorType = { message: string };

export interface QueryStringInterface {
  q?: string;
  bookstores?: Array<BookstoreEnum>;
  order?: OrderByEnum;
}
