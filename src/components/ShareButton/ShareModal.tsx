import {
  faFacebook,
  faLine,
  faLinkedin,
  faReddit,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useCopyToClipboard from '@hooks/useCopyToClipboard';
import { message, Modal } from 'antd';
import { FunctionComponent, useEffect } from 'react';
import {
  FacebookShareButton,
  LineShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from 'react-share';
import styled from 'styled-components';

const StyledShareButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  font-size: 1.2rem;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem !important;
    border-radius: 0.5rem;
    transition-duration: 0.3s;
    transition-property: background-color, opacity;

    &[aria-label] {
      border: 1px solid var(--gray-5) !important;
      background-color: var(--gray-1) !important;

      &:hover {
        background-color: var(--gray-4) !important;
      }

      & > [data-icon] {
        font-size: 2rem;
        margin-right: 0.7rem;
      }
    }
  }
`;

const StyledCopyButton = styled.button`
  grid-column: 1 / 3;
  background-color: var(--primary-color);
  cursor: pointer;
  color: var(--gray-1);
  border: none;

  &:hover {
    opacity: 0.8;
  }

  & > [data-icon] {
    margin-right: 0.5rem;
  }
`;

export interface ShareModalProps {
  open: boolean;
  onCancel: () => void;
  url: string;
  content: string;
}

const ShareModal: FunctionComponent<ShareModalProps> = ({ open, onCancel, url, content }) => {
  const [copy, copyStatus] = useCopyToClipboard(url);

  useEffect(() => {
    if (copyStatus === 'copied') {
      message.success('連結已複製！');
    } else if (copyStatus === 'failed') {
      message.warning('複製失敗。');
    }
  }, [copyStatus]);

  return (
    <Modal title="分享" visible={open} centered footer={null} onCancel={onCancel}>
      <StyledShareButtonWrapper>
        <FacebookShareButton url={url}>
          <FontAwesomeIcon icon={faFacebook} style={{ color: '#2e89ff' }} />
          Facebook
        </FacebookShareButton>
        <LineShareButton url={url} title={content}>
          <FontAwesomeIcon icon={faLine} style={{ color: '#07be5b' }} />
          Line
        </LineShareButton>
        <LinkedinShareButton url={url} title={content}>
          <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0a66c2' }} />
          Linkedin
        </LinkedinShareButton>
        <RedditShareButton url={url} title={content}>
          <FontAwesomeIcon icon={faReddit} style={{ color: '#ff4500' }} />
          Reddit
        </RedditShareButton>
        <TelegramShareButton url={url} title={content}>
          <FontAwesomeIcon icon={faTelegram} style={{ color: '#35abe7' }} />
          Telegram
        </TelegramShareButton>
        <TwitterShareButton url={url} title={content}>
          <FontAwesomeIcon icon={faTwitter} style={{ color: '#1d9bf0' }} />
          Twitter
        </TwitterShareButton>
        <StyledCopyButton onClick={copy}>
          <FontAwesomeIcon icon={faLink} />
          複製連結
        </StyledCopyButton>
      </StyledShareButtonWrapper>
    </Modal>
  );
};

export default ShareModal;
