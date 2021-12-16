import { BookstoreEnum } from '@customTypes/bookstore';
import { OrderByEnum } from '@customTypes/searchOptions';

export type ErrorType = { message: string };

export interface queryStringInterface {
  q?: string;
  bookstores?: Array<BookstoreEnum>;
  order?: OrderByEnum;
}
