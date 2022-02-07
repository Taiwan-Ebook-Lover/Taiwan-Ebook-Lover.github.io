import appStoreBadge from '@assets/images/storeBadge/app-store-badge.svg';
import googlePlayBadge from '@assets/images/storeBadge/play-store-badge.svg';
import Box from '@components/Box';
import { Modal } from 'antd';
import { FunctionComponent, useState } from 'react';
import { GetAppButton, PlatformBadge } from './styles';

export interface GetAppProps {
  textcolor?: 'grey' | 'white';
}

export enum PlatformType {
  ANDROID,
  IOS,
}

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
    <PlatformBadge src={appStoreBadge} alt="App Store" onClick={() => openLink(PlatformType.IOS)} />
    <PlatformBadge
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
        <GetAppButton type="text" textcolor={textcolor} onClick={() => setModalOpen(true)}>
          Get App
        </GetAppButton>
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
