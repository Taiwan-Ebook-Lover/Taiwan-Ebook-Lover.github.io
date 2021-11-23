import Box from '@components/Box';
import { BooksOfBookstoreParamType, BookWithBookstore } from '@recoil/searchResults';
import getBookstoreLogo from '@utils/assets/getBookstoreLogo';
import { Dispatch, FunctionComponent } from 'react';
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

const StyledBookGrid = styled.div<GridTemplateColumnsProps>`
  height: 15rem;
  max-height: 15rem;
  display: grid;
  grid-template-rows: 1.5rem 3.05rem 1fr 3rem;
  grid-template-areas:
    'thumbnail bookstore'
    'thumbnail title'
    'thumbnail about'
    'thumbnail price';
  grid-gap: 0.5rem 2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  ${gridTemplateColumns}
`;

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
  cursor: pointer;
  transition: opacity 0.3s;
  ${fontSize}

  &:hover {
    opacity: 0.8;
  }
`;

const StyledLogo = styled.img<MarginProps & MaxHeightProps & MaxWidthProps>`
  border: 1px solid var(--gray-4);
  border-radius: 50%;
  overflow: hidden;
  /* margin-right: 0.75rem; */
  ${compose(margin, maxHeight, maxWidth)}
`;

const StyledTitle = styled.h3<FontSizeProps>`
  grid-area: title;
  margin: auto 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${fontSize}
`;

const StyledAbout = styled.p<FontSizeProps & MaxHeightProps>`
  grid-area: about;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  margin: 0;
  ${compose(fontSize, maxHeight)}
`;

const StyledPrice = styled.p<FontSizeProps>`
  grid-area: price;
  color: var(--primary-6);
  margin: 0;
  ${fontSize}
`;

const StyledGoTo = styled.a<FontSizeProps>`
  appearance: none;
  display: inline-flex;
  align-items: center;
  background-color: var(--primary-5);
  color: white;
  padding: 0.2rem 1rem;
  border-radius: 0.95rem;
  cursor: pointer;
  transition: opacity 0.3s;
  ${fontSize}

  &:hover {
    color: white;
    opacity: 0.8;
  }
`;

const BookItem: FunctionComponent<BookItemProps> = ({ book, setCurrentTab }) => {
  return (
    <StyledBookGrid gridTemplateColumns={['8rem auto', '10rem', '11rem', '12rem auto']}>
      <Box
        gridArea="thumbnail"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={['8rem', '10rem', '11rem', '12rem']}
      >
        <StyledImage src={book.thumbnail} />
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
      <StyledTitle fontSize={['1.4rem', null, null, '1.7rem']}>{book.title}</StyledTitle>
      <StyledAbout
        fontSize={['1rem', null, null, '1.2rem']}
        maxHeight={['4.5rem', null, null, '5.4rem']}
      >
        {book.about}
      </StyledAbout>
      <Box gridArea="price" display="flex" justifyContent="space-between" alignItems="center">
        <StyledPrice fontSize={['1rem', null, null, '1.2rem']}>
          {new Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: book.priceCurrency || 'TWD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(book.price)}
        </StyledPrice>
        <StyledGoTo href={book.link} target="_blank" fontSize={['0.8rem', null, null, '1rem']}>
          OPEN {'＞'}
        </StyledGoTo>
      </Box>
    </StyledBookGrid>
  );
};

export default BookItem;
