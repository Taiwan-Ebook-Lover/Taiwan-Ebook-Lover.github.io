import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledTwitterPromotion = styled.h3`
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
  color: var(--gray-7);
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: var(--primary-5);
  }
`;

const TwitterPromotion: FunctionComponent = () => (
  <StyledTwitterPromotion onClick={() => window.open('https://twitter.com/TaiwanEBook', '_blank')}>
    <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '2em', marginRight: '0.75rem' }} />
    在推特上追蹤我們
  </StyledTwitterPromotion>
);

export default TwitterPromotion;
