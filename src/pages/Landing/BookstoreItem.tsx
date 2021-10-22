import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import { BookstoreData } from '@api/useBookstores';
import booksCompany from '@assets/images/bookstore/booksCompany.png';
import bookWalker from '@assets/images/bookstore/bookWalker.png';
import hyread from '@assets/images/bookstore/hyread.png';
import kindle from '@assets/images/bookstore/kindle.png';
import kobo from '@assets/images/bookstore/kobo.png';
import playStore from '@assets/images/bookstore/playStore.png';
import pubu from '@assets/images/bookstore/pubu.png';
import readmoo from '@assets/images/bookstore/readmoo.png';
import taaze from '@assets/images/bookstore/taaze.png';
import { Box } from '@components/Box';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const logos: Record<BookstoreType, string> = {
  booksCompany,
  bookWalker,
  hyread,
  kindle,
  kobo,
  playStore,
  pubu,
  readmoo,
  taaze,
};

const StyledLogo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--gray-4);
  border-radius: 50%;
  overflow: hidden;
`;

const StyledBoostoreLink = styled.a`
  margin: 0 0.5rem;
  font-weight: 300;
  color: var(--gray-7);
`;

const BookstoreItem: FunctionComponent<BookstoreData> = ({
  id,
  displayName,
  website,
  isOnline,
}) => {
  return (
    <Box display="flex" alignItems="center">
      <StyledLogo src={logos[id]} />
      <StyledBoostoreLink href={website} target="_blank" rel="noreferrer">
        {displayName}
      </StyledBoostoreLink>
      {isOnline ? (
        <CheckCircleTwoTone twoToneColor="#52c41a" />
      ) : (
        <CloseCircleTwoTone twoToneColor="#f5222d" />
      )}
    </Box>
  );
};

export default BookstoreItem;
