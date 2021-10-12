import ebookLogo from '@assets/images/logo/ebook-logo.svg';
import { breakpoints } from '@assets/themes/globalTheme';
import { Box } from '@components/Box';
import { GetApp } from '@components/GetApp';
import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.header`
  position: sticky;
  top: 0;
  padding: 1rem;
  display: flex;
  background-color: var(--primary-color);
  color: var(--gray-1);
  z-index: 100;
  box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.3);
`;

const StyledLogo = styled.img`
  height: 2.5rem;
  margin: 0 0.5rem;
  cursor: pointer;
`;

const StyledTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  display: none;

  @media (min-width: ${breakpoints.md}) {
    display: inline;
  }
`;

export const Navbar: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <StyledNavbar>
      <Box flex="1" display="flex" alignItems="center">
        <StyledLogo src={ebookLogo} onClick={() => navigate('/')} />
        <StyledTitle>台灣電子書搜尋</StyledTitle>
      </Box>
      <Box flex="1" display="flex" justifyContent="flex-end">
        <GetApp textcolor="white" />
      </Box>
    </StyledNavbar>
  );
};
