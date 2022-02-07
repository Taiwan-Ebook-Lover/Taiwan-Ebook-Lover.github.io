import { breakpoints } from '@assets/themes/globalTheme';
import { Button } from 'antd';
import styled from 'styled-components';
import { GetAppProps } from '.';

export const PlatformBadge = styled.img`
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

export const GetAppButton = styled(Button)<GetAppProps>`
  color: ${({ textcolor }) =>
    textcolor === 'grey' ? 'var(--gray-7)' : 'var(--gray-1)'} !important;
`;
