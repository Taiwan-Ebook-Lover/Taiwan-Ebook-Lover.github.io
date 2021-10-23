import { FilterOutlined } from '@ant-design/icons';
import useBookstores from '@api/useBookstores';
import logo from '@assets/images/logo/ebook-logo-bg.svg';
import { Box } from '@components/Box';
import FilterCheckboxs from '@components/FilterCheckboxs';
import { GetApp } from '@components/GetApp';
import { KeywordInput } from '@components/KeywordInput';
import OrderBySelect from '@components/OrderBySelect';
import { Button, message, Popover, Typography } from 'antd';
import { FunctionComponent, useEffect } from 'react';
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
  const { error } = useBookstores();

  useEffect(() => {
    if (error) message.warning('暫時無法取得書店列表。');
  }, [error]);

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
        <KeywordInput onSubmit={() => navigate('/searches?q=111')} />
        <Box display="grid" mt="1.5rem" gridTemplateColumns="auto auto" gridColumnGap="1rem">
          <Popover placement="bottom" trigger="click" content={<FilterCheckboxs />}>
            <Button icon={<FilterOutlined />} size="large">
              篩選選項
            </Button>
          </Popover>
          <OrderBySelect />
        </Box>
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
