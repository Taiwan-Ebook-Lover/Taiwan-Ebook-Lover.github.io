import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';
import { TwitterPromotionWrapper } from './styles';

const TwitterPromotion: FunctionComponent = () => (
  <TwitterPromotionWrapper onClick={() => window.open('https://twitter.com/TaiwanEBook', '_blank')}>
    <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '2em', marginRight: '0.75rem' }} />
    在推特上追蹤我們
  </TwitterPromotionWrapper>
);

export default TwitterPromotion;
