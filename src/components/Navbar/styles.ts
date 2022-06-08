import { breakpoints } from '@assets/themes/globalTheme';
import { Button } from 'antd';
import styled from 'styled-components';

export const NavbarWrapper = styled.header`
  padding: 1rem;
  display: flex;
  background-color: var(--primary-color);
  color: var(--gray-1);
  z-index: 100;
  box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.3);
`;

export const Logo = styled.img`
  height: 2.5rem;
  margin: 0 0.5rem;
  cursor: pointer;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  display: none;

  @media (min-width: ${breakpoints.md}) {
    display: inline;
  }
`;

export const SearchButton = styled(Button)`
  color: var(--gray-1) !important;
`;
