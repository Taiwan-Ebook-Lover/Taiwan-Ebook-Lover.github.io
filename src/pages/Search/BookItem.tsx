import Box from '@components/Box';
import { BookWithBookstore } from '@recoil/searchResults';
import getBookstoreLogo from '@utils/assets/getBookstoreLogo';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

export interface BookItemProps {
  book: BookWithBookstore;
}

const StyledBookGrid = styled.div`
  height: 18rem;
  max-height: 20rem;
  display: grid;
  grid-template-columns: 15rem auto;
  grid-template-rows: 1.5rem 3.05rem 1fr 3rem;
  grid-template-areas:
    'thumbnail bookstore'
    'thumbnail title'
    'thumbnail about'
    'thumbnail price';
  grid-gap: 0.5rem 2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

const StyledImage = styled.img`
  grid-area: thumbnail;
  height: 18rem;
  width: 15rem;
  object-fit: contain;
  border: 1px solid var(--gray-4);
  border-radius: 1rem;
  overflow: hidden;
`;

const StyledStoreBadge = styled.span`
  display: inline-flex;
  align-items: center;
  background-color: var(--gray-4);
  padding-right: 1rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const StyledLogo = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid var(--gray-4);
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.75rem;
`;

const StyledTitle = styled.h3`
  grid-area: title;
  font-size: 1.7rem;
  margin: 0.25rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledAbout = styled.p`
  grid-area: about;
  max-height: 9rem;
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  line-clamp: 5;
  -webkit-box-orient: vertical;
  margin: 0;
`;

const StyledPrice = styled.p`
  grid-area: price;
  font-size: 1.2rem;
  color: var(--primary-6);
  margin: 0;
`;

const StyledGoTo = styled.a`
  appearance: none;
  display: inline-flex;
  align-items: center;
  background-color: var(--primary-5);
  color: white;
  padding: 0.2rem 1rem;
  border-radius: 0.95rem;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    color: white;
    opacity: 0.8;
  }
`;

const BookItem: FunctionComponent<BookItemProps> = ({ book }) => {
  return (
    <StyledBookGrid>
      <StyledImage src={book.thumbnail} />
      <Box gridArea="bookstore">
        <StyledStoreBadge>
          <StyledLogo src={getBookstoreLogo(book.bookstoreId)} /> {book.bookstoreName}
        </StyledStoreBadge>
      </Box>
      <StyledTitle>{book.title}</StyledTitle>
      <StyledAbout>{book.about}</StyledAbout>
      <Box gridArea="price" display="flex" justifyContent="space-between" alignItems="center">
        <StyledPrice>
          {new Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: book.priceCurrency || 'TWD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(book.price)}
        </StyledPrice>
        <StyledGoTo href={book.link} target="_blank">
          OPEN {'＞'}
        </StyledGoTo>
      </Box>
    </StyledBookGrid>
  );
};

export default BookItem;
