import { Book } from '@api/useBooksSearch';
import { FunctionComponent } from 'react';

// import getBookstoreLogo from '@utils/assets/getBookstoreLogo';

export interface BookItemProps {
  book: Book;
}

const BookItem: FunctionComponent<BookItemProps> = ({ book }) => {
  return <div>{JSON.stringify(book)}</div>;
};

export default BookItem;
