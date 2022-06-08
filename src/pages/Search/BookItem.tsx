import Box from '@components/Box';
import { BooksOfBookstoreParamType, BookWithBookstore } from '@recoil/searchResults';
import getBookstoreLogo from '@utils/assets/getBookstoreLogo';
import { Dispatch, FunctionComponent, useCallback } from 'react';
import {
  ItemAbout,
  ItemImage,
  ItemLayout,
  ItemPrice,
  ItemStoreBadge,
  ItemStoreLogo,
  ItemTitle,
} from './styles';

export interface BookItemProps {
  book: BookWithBookstore;
  setCurrentTab: Dispatch<BooksOfBookstoreParamType>;
}

const BookItem: FunctionComponent<BookItemProps> = ({ book, setCurrentTab }) => {
  const openBookHref = useCallback(() => window.open(book.link, '_blank'), [book.link]);

  return (
    <ItemLayout
      gridTemplateColumns={[
        '8rem minmax(0, 1fr)',
        '10rem minmax(0, 1fr)',
        '11rem minmax(0, 1fr)',
        '12rem minmax(0, 1fr)',
      ]}
    >
      <Box
        gridArea="thumbnail"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={['8rem', '10rem', '11rem', '12rem']}
      >
        <ItemImage src={book.thumbnail} onClick={openBookHref} />
      </Box>
      <Box gridArea="bookstore" display="flex" alignItems="center">
        <ItemStoreBadge
          fontSize={['0.8rem', null, null, '1rem']}
          onClick={() => setCurrentTab(book.bookstoreId)}
        >
          <ItemStoreLogo
            src={getBookstoreLogo(book.bookstoreId)}
            mr={['0.6rem', null, null, '0.75rem']}
            maxHeight={['1.2rem', null, null, '1.5rem']}
            maxWidth={['1.2rem', null, null, '1.5rem']}
          />
          {book.bookstoreName}
        </ItemStoreBadge>
      </Box>
      <Box gridArea="title" maxWidth="100%">
        <ItemTitle fontSize={['1.4rem', null, null, '1.7rem']} onClick={openBookHref}>
          {book.title}
        </ItemTitle>
      </Box>
      <Box gridArea="about">
        <ItemAbout
          fontSize={['1rem', null, null, '1.2rem']}
          maxHeight={['4.5rem', null, null, '5.4rem']}
          onClick={openBookHref}
        >
          {book.about}
        </ItemAbout>
      </Box>
      <Box gridArea="price">
        <ItemPrice fontSize={['1rem', null, null, '1.2rem']} onClick={openBookHref}>
          {new Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: book.priceCurrency || 'TWD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(book.price)}
        </ItemPrice>
      </Box>
    </ItemLayout>
  );
};

export default BookItem;
