import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
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
import { Tooltip } from 'antd';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const logos = { booksCompany, bookWalker, hyread, kindle, kobo, playStore, pubu, readmoo, taaze };

const StyledBookstoreSupport = styled.p`
  align-items: center;
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
  color: var(--gray-7);
  cursor: default;
`;

const StyledWhichBookstore = styled.span`
  margin-left: 0.2rem;
  color: var(--primary-5);
  cursor: pointer;
`;

const StyledBookstores = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  padding: 1rem 0.6rem;
`;

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

interface BookstoreProps {
  id: keyof typeof logos;
  displayName: string;
  website: string;
  isOnline: boolean;
  status: string;
}

const Bookstore: FunctionComponent<BookstoreProps> = ({ id, displayName, website, isOnline }) => {
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

const BookstoreSupport: FunctionComponent = () => {
  const bookstores: BookstoreProps[] = [
    // temporary data
    {
      status: 'Active',
      id: 'readmoo',
      website: 'https://readmoo.com/',
      displayName: 'Readmoo 讀墨',
      isOnline: true,
    },
    {
      displayName: 'Taaze 讀冊生活',
      id: 'taaze',
      isOnline: true,
      status: 'Active',
      website: 'https://www.taaze.tw/',
    },
    {
      status: 'Active',
      website: 'https://www.bookwalker.com.tw/',
      displayName: 'BOOKWALKER',
      isOnline: true,
      id: 'bookWalker',
    },
    {
      status: 'Active',
      isOnline: true,
      displayName: '樂天 kobo',
      website: 'https://www.kobo.com/',
      id: 'kobo',
    },
    {
      website: 'https://www.pubu.com.tw/',
      displayName: 'Pubu 電子商城',
      status: 'Active',
      isOnline: true,
      id: 'pubu',
    },
    {
      displayName: 'HyRead 電子書',
      id: 'hyread',
      isOnline: true,
      website: 'https://ebook.hyread.com.tw/',
      status: 'Active',
    },
    {
      id: 'kindle',
      displayName: 'Amazon Kindle',
      website: 'https://www.amazon.com/Kindle-eBooks/',
      isOnline: true,
      status: 'Active',
    },
    {
      website: 'https://play.google.com/store/books',
      id: 'playStore',
      isOnline: true,
      displayName: 'Google Play 圖書',
      status: 'Active',
    },
    {
      isOnline: true,
      status: 'Active',
      displayName: '博客來',
      website: 'https://www.books.com.tw/',
      id: 'booksCompany',
    },
  ];

  return (
    <StyledBookstoreSupport>
      看看支援
      <Tooltip
        placement="bottom"
        color="var(--gray-1)"
        trigger={['click', 'hover']}
        title={
          <StyledBookstores>
            {bookstores.map((item) => (
              <Bookstore key={item.id} {...item} />
            ))}
          </StyledBookstores>
        }
      >
        <StyledWhichBookstore>哪 9 間台灣線上電子書店</StyledWhichBookstore>
      </Tooltip>
    </StyledBookstoreSupport>
  );
};

export default BookstoreSupport;
