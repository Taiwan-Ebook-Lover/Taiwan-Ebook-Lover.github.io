import Box from '@components/Box';
import { BookWithBookstore } from '@recoil/searchResults';
import { FunctionComponent } from 'react';
import LazyLoad from 'react-lazyload';

import BookItem from './BookItem';

export interface ResultListProps {
  books: Array<BookWithBookstore>;
}

const ResultList: FunctionComponent<ResultListProps> = ({ books }) => {
  return (
    <>
      <Box px={['1rem', null, null, null, null, '0']}>
        <Box textColor="var(--gray-7)" mb="1rem">
          共有 {books.length} 筆結果
        </Box>
        {books.map((book) => (
          <LazyLoad key={book.link} height="20rem" once>
            <BookItem book={book} />
          </LazyLoad>
        ))}
      </Box>
    </>
  );
};

export default ResultList;
