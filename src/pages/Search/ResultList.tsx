import Box from '@components/Box';
import ShareButton from '@components/ShareButton';
import { BooksOfBookstoreParamType, BookWithBookstore } from '@recoil/searchResults';
import { Dispatch, FunctionComponent } from 'react';
import LazyLoad from 'react-lazyload';

import BookItem from './BookItem';

export interface ResultListProps {
  books: Array<BookWithBookstore>;
  setCurrentTab: Dispatch<BooksOfBookstoreParamType>;
}

const ResultList: FunctionComponent<ResultListProps> = ({ books, setCurrentTab }) => {
  return (
    <>
      <Box px={['1rem', null, null, null, null, '0']}>
        <Box
          textColor="var(--gray-7)"
          mt="1rem"
          mb="1.5rem"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          共有 {books.length} 筆結果
          <ShareButton />
        </Box>
        {books.map((book) => (
          <LazyLoad key={book.link} height="17rem" once>
            <BookItem book={book} setCurrentTab={setCurrentTab} />
          </LazyLoad>
        ))}
      </Box>
    </>
  );
};

export default ResultList;
