import appStoreBadge from '@assets/images/storeBadge/app-store-badge.svg';
import googlePlayBadge from '@assets/images/storeBadge/play-store-badge.svg';
import { breakpoints } from '@assets/themes/globalTheme';
import Box from '@components/Box';
import { Button, Modal } from 'antd';
import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

export interface GetAppProps {
  textcolor?: 'grey' | 'white';
}

export enum PlatformType {
  ANDROID,
  IOS,
}

const StyledBadge = styled.img`
  cursor: pointer;
  max-height: 5rem;

  & + & {
    margin: 1.5rem 0 0 0;
  }

  @media (min-width: ${breakpoints.md}) {
    max-height: 2.5rem;

    & + & {
      margin: 0 0 0 0.5rem;
    }
  }
`;

const StyledGetAppButton = styled(Button)<GetAppProps>`
  color: ${({ textcolor }) =>
    textcolor === 'grey' ? 'var(--gray-7)' : 'var(--gray-1)'} !important;
`;

const links: Record<PlatformType, string> = {
  [PlatformType.ANDROID]:
    'https://play.google.com/store/apps/details?id=liou.rayyuan.ebooksearchtaiwan',
  [PlatformType.IOS]: 'https://denkeni.medium.com/farewell-ebooktw-ios-dea6fd5e542b',
};

const openLink = (platform: PlatformType) => {
  window.open(links[platform], '_blank');
};

const Badges = () => (
  <>
    <StyledBadge src={appStoreBadge} alt="App Store" onClick={() => openLink(PlatformType.IOS)} />
    <StyledBadge
      src={googlePlayBadge}
      alt="Google Play Store"
      onClick={() => openLink(PlatformType.ANDROID)}
    />
  </>
);

const GetApp: FunctionComponent<GetAppProps> = ({ textcolor = 'grey' }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box display={['none', null, null, 'flex']} height="2.5rem" width="16.5rem">
        <Badges />
      </Box>
      <Box display={['block', null, null, 'none']} height="2.5rem">
        <StyledGetAppButton type="text" textcolor={textcolor} onClick={() => setModalOpen(true)}>
          Get App
        </StyledGetAppButton>
      </Box>
      <Modal
        title="Get App"
        visible={modalOpen}
        centered
        footer={null}
        onCancel={() => setModalOpen(false)}
      >
        <Box width="100%" display="flex" justifyContent="center">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            maxWidth="15rem"
            width="15rem"
          >
            <Badges />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default GetApp;
