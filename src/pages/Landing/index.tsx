import { SearchOutlined } from '@ant-design/icons';
import logo from '@assets/images/logo/ebook-logo-bg.svg';
import { Box } from '@components/Box';
import { GetApp } from '@components/GetApp';
import { Input, Typography } from 'antd';
import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { maxWidth, MaxWidthProps } from 'styled-system';

import BookstoreSupport from './BookstoreSupport';
import TwitterPromotion from './TwitterPromotion';

const { Title } = Typography;

const StyledLogo = styled.img<MaxWidthProps>`
  ${maxWidth}
`;

const Landing: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <>
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
        <Input
          size="large"
          placeholder="搜尋您想比價的電子書名關鍵字或 ISBN"
          prefix={<SearchOutlined />}
          style={{
            boxShadow: '0px 0.1rem 0.1rem rgba(0, 0, 0, 0.3)',
            maxWidth: '50rem',
            padding: '0.8rem 1.2rem',
          }}
          onPressEnter={() => navigate('/searches')}
        />
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
