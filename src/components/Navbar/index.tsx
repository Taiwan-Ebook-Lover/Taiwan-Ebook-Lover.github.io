import ebookLogo from '@assets/images/logo/ebook-logo.svg';
import Box from '@components/Box';
import FilterDrawer from '@components/FilterDrawer';
import GetApp from '@components/GetApp';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo, NavbarWrapper, SearchButton, Title } from './styles';

export interface NavbarProps {
  onConfirm?: () => void;
}

const Navbar: FunctionComponent<NavbarProps> = ({ onConfirm }) => {
  const navigate = useNavigate();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const onFormConfirm = () => {
    setDrawerVisible(false);
    if (onConfirm) onConfirm();
  };

  return (
    <>
      <NavbarWrapper>
        <Box
          flex="2"
          display="flex"
          alignItems="center"
          flexDirection={['row-reverse', null, null, 'row']}
        >
          <Box
            flex="1"
            display="flex"
            alignItems="center"
            justifyContent={['center', null, null, 'flex-start']}
          >
            <Logo src={ebookLogo} onClick={() => navigate('/')} />
            <Title>台灣電子書搜尋</Title>
          </Box>
          <Box
            flex="1"
            display={['flex', null, null, 'none']}
            alignItems="center"
            justifyContent="flex-start"
          >
            <SearchButton type="text" onClick={() => setDrawerVisible(true)}>
              <FontAwesomeIcon icon={faSearch} style={{ fontSize: '1.5rem' }} />
            </SearchButton>
          </Box>
        </Box>
        <Box flex="1" display="flex" justifyContent="flex-end">
          <GetApp textcolor="white" />
        </Box>
      </NavbarWrapper>
      <FilterDrawer visible={drawerVisible} onConfirm={onFormConfirm} onClose={onFormConfirm} />
    </>
  );
};

export default Navbar;
