import useBookstores from '@api/useBookstores';
import logo from '@assets/images/logo/ebook-logo-bg.svg';
import Box from '@components/Box';
import GetApp from '@components/GetApp';
import KeywordInput from '@components/KeywordInput';
import SearchOptions from '@components/SearchOptions';
import useNavigateToSearch from '@hooks/useNavigateToSearch';
import { message, Typography } from 'antd';
import { FunctionComponent, useEffect } from 'react';
import GHCorner from 'react-gh-corner';
import BookstoreSupport from './BookstoreSupport';
import { EbookLogo, LandingPageStyle } from './styles';
import TwitterPromotion from './TwitterPromotion';

const { Title } = Typography;

const Landing: FunctionComponent = () => {
  const onSubmit = useNavigateToSearch();
  const { error } = useBookstores();

  useEffect(() => {
    if (error) message.warning(error.message);
  }, [error]);

  return (
    <>
      <LandingPageStyle />
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
        <EbookLogo src={logo} maxWidth={['40vw', null, '16.4rem']} />
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
      <GHCorner
        href="https://github.com/Taiwan-Ebook-Lover/Taiwan-Ebook-Lover.github.io"
        position="top-left"
        bgColor="var(--primary-color)"
        size={70}
        ariaLabel="View source on GitHub"
        openInNewTab
      />
    </>
  );
};

export default Landing;
