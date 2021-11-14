import { Book } from '@api/useBooksSearch';
import { FunctionComponent } from 'react';

export interface BookItemProps {
  book: Book;
}

const BookItem: FunctionComponent<BookItemProps> = ({ book }) => {
  return <div>{JSON.stringify(book)}</div>;
};

export default BookItem;
