import appStoreBadge from '@assets/images/app-store-badge.svg';
import googlePlayBadge from '@assets/images/play-store-badge.svg';
import { breakpoints } from '@assets/themes/globalTheme';
import { Box } from '@components/Box';
import { Button, Modal } from 'antd';
import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

interface GetAppProps {
  textColor?: 'grey' | 'white';
}

enum PlatformType {
  ANDROID,
  IOS,
}

const StyledBadge = styled.img`
  cursor: pointer;

  & + & {
    margin: 0.5rem 0 0 0;

    @media (min-width: ${breakpoints.lg}) {
      margin: 0 0 0 0.5rem;
    }
  }
`;

const StyledGetAppButton = styled(Button)<GetAppProps>`
  color: ${({ textColor }) => (textColor === 'grey' ? 'var(--gray-8)' : 'var(--gray-1)')};
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

export const GetApp: FunctionComponent<GetAppProps> = ({ textColor = 'grey' }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box display={['none', null, null, null, 'flex']} height="2rem">
        <Badges />
      </Box>
      <Box display={['block', null, null, null, 'none']} height="2rem">
        <StyledGetAppButton type="text" textColor={textColor} onClick={() => setModalOpen(true)}>
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
