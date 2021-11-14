import { SearchResult } from '@api/useBooksSearch';
import { FunctionComponent } from 'react';

import BookItem from './BookItem';

export interface ResultListProps {
  searchResult: SearchResult;
}

const ResultList: FunctionComponent<ResultListProps> = ({ searchResult }) => {
  return (
    <div>
      {searchResult.books.map((book) => (
        <BookItem book={book} key={book.id} />
      ))}
    </div>
  );
};

export default ResultList;
