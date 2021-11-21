import useBookstores from '@api/useBookstores';
import logo from '@assets/images/logo/ebook-logo-bg.svg';
import Box from '@components/Box';
import GetApp from '@components/GetApp';
import KeywordInput from '@components/KeywordInput';
import SearchOptions from '@components/SearchOptions';
import useNavigateToSearch from '@hooks/useNavigateToSearch';
import { message, Typography } from 'antd';
import { FunctionComponent, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { maxWidth, MaxWidthProps } from 'styled-system';

import BookstoreSupport from './BookstoreSupport';
import TwitterPromotion from './TwitterPromotion';

const { Title } = Typography;

const StyledLogo = styled.img<MaxWidthProps>`
  ${maxWidth}
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: var(--gray-3);
  }
`;

const Landing: FunctionComponent = () => {
  const onSubmit = useNavigateToSearch();
  const { error } = useBookstores();

  useEffect(() => {
    if (error) message.warning(error.message);
  }, [error]);

  return (
    <>
      <GlobalStyle />
      <Box display="flex" padding="1rem" justifyContent="flex-end">
        <GetApp />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        flex="1"
        px="1rem"
      >
        <StyledLogo src={logo} maxWidth={['40vw', null, '16.4rem']} />
        <Title level={2} style={{ marginTop: '1rem', marginBottom: '3rem', fontWeight: 400 }}>
          台灣電子書搜尋
        </Title>
        <KeywordInput onSubmit={onSubmit} />
        <SearchOptions mt="1.5rem" filterProps={{ showConfirm: true }} />
        <Box display="flex" alignItems="center" mt="3rem">
          <Box
            pr="1rem"
            mr="1rem"
            borderRight="1px solid var(--gray-5)"
            display={['none', null, 'block']}
          >
            <TwitterPromotion />
          </Box>
          <BookstoreSupport />
        </Box>
      </Box>
      <Box display={['flex', null, 'none']} justifyContent="center" p="2rem">
        <TwitterPromotion />
      </Box>
    </>
  );
};

export default Landing;
