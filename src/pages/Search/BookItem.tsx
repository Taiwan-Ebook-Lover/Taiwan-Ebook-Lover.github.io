import Box from '@components/Box';
import { BooksOfBookstoreParamType, BookWithBookstore } from '@recoil/searchResults';
import getBookstoreLogo from '@utils/assets/getBookstoreLogo';
import { Dispatch, FunctionComponent, useCallback } from 'react';
import styled from 'styled-components';
import {
  compose,
  fontSize,
  FontSizeProps,
  gridTemplateColumns,
  GridTemplateColumnsProps,
  margin,
  MarginProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
} from 'styled-system';

export interface BookItemProps {
  book: BookWithBookstore;
  setCurrentTab: Dispatch<BooksOfBookstoreParamType>;
}

const StyledImage = styled.img`
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;
  border: 1px solid var(--gray-4);
  border-radius: 0.5rem;
  overflow: hidden;
`;

const StyledStoreBadge = styled.span<FontSizeProps>`
  display: inline-flex;
  align-items: center;
  background-color: var(--gray-4);
  padding-right: 1rem;
  border-radius: 0.75rem;
  ${fontSize}
`;

const StyledLogo = styled.img<MarginProps & MaxHeightProps & MaxWidthProps>`
  border: 1px solid var(--gray-4);
  border-radius: 50%;
  overflow: hidden;
  ${compose(margin, maxHeight, maxWidth)}
`;

const StyledTitle = styled.h3<FontSizeProps>`
  margin: auto 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${fontSize}
`;

const StyledAbout = styled.p<FontSizeProps & MaxHeightProps>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  margin: 0;
  ${compose(fontSize, maxHeight)}
`;

const StyledPrice = styled.span<FontSizeProps>`
  color: var(--primary-6);
  margin: 0;
  ${fontSize}
`;

const StyledBookGrid = styled.div<GridTemplateColumnsProps>`
  height: 15rem;
  max-height: 15rem;
  max-width: 100vw;
  display: grid;
  grid-template-rows: 1.5rem 2.55rem 1fr 3rem;
  grid-template-areas:
    'thumbnail bookstore'
    'thumbnail title'
    'thumbnail about'
    'thumbnail price';
  grid-gap: 0.5rem 2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  ${gridTemplateColumns}

  & ${StyledImage}, ${StyledStoreBadge}, ${StyledTitle}, ${StyledAbout}, ${StyledPrice} {
    cursor: pointer;
    transition: opacity 0.3s;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const BookItem: FunctionComponent<BookItemProps> = ({ book, setCurrentTab }) => {
  const openBookHref = useCallback(() => window.open(book.link, '_blank'), [book.link]);

  return (
    <StyledBookGrid
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
        <StyledImage src={book.thumbnail} onClick={openBookHref} />
      </Box>
      <Box gridArea="bookstore" display="flex" alignItems="center">
        <StyledStoreBadge
          fontSize={['0.8rem', null, null, '1rem']}
          onClick={() => setCurrentTab(book.bookstoreId)}
        >
          <StyledLogo
            src={getBookstoreLogo(book.bookstoreId)}
            mr={['0.6rem', null, null, '0.75rem']}
            maxHeight={['1.2rem', null, null, '1.5rem']}
            maxWidth={['1.2rem', null, null, '1.5rem']}
          />
          {book.bookstoreName}
        </StyledStoreBadge>
      </Box>
      <Box gridArea="title" maxWidth="100%">
        <StyledTitle fontSize={['1.4rem', null, null, '1.7rem']} onClick={openBookHref}>
          {book.title}
        </StyledTitle>
      </Box>
      <Box gridArea="about">
        <StyledAbout
          fontSize={['1rem', null, null, '1.2rem']}
          maxHeight={['4.5rem', null, null, '5.4rem']}
          onClick={openBookHref}
        >
          {book.about}
        </StyledAbout>
      </Box>
      <Box gridArea="price">
        <StyledPrice fontSize={['1rem', null, null, '1.2rem']} onClick={openBookHref}>
          {new Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: book.priceCurrency || 'TWD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(book.price)}
        </StyledPrice>
      </Box>
    </StyledBookGrid>
  );
};

export default BookItem;
