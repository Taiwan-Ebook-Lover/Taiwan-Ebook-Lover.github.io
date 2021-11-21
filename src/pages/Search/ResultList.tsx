import Box from '@components/Box';
import { BookWithBookstore } from '@recoil/searchResults';
import { FunctionComponent } from 'react';

import BookItem from './BookItem';

export interface ResultListProps {
  books: Array<BookWithBookstore>;
}

const ResultList: FunctionComponent<ResultListProps> = ({ books }) => {
  return (
    <>
      <Box px={['1rem', null, null, null, null, '0']} textColor="var(--gray-7)" mb="0.5rem">
        共有 {books.length} 筆結果
      </Box>
      {books.map((book) => (
        <BookItem book={book} key={book.link} />
      ))}
    </>
  );
};

export default ResultList;
