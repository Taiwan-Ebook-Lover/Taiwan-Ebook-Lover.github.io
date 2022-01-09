import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import { FunctionComponent, useMemo, useRef, useState } from 'react';

import ShareModal from './ShareModal';

export interface ShareButtonProps {
  text?: string;
  url?: string;
  buttonText?: string;
}

const ShareButton: FunctionComponent<ShareButtonProps> = ({
  text,
  url = window.location.href,
  buttonText = '分享',
}) => {
  const hasShare = useRef(!!navigator.share);
  const [modalOpen, setModalOpen] = useState(false);
  const content = useMemo(
    () => document.title.concat(text ? `｜${text}` : ''),
    [document.title, text],
  );

  const onShareButtonClick = async () => {
    try {
      await navigator.share({ text: content, url });
    } catch {
      setModalOpen(true);
    }
  };

  return (
    <>
      <Button type="primary" shape="round" size="middle" onClick={onShareButtonClick}>
        {buttonText} <FontAwesomeIcon icon={faShare} style={{ marginLeft: '0.5rem' }} />
      </Button>

      {!hasShare.current && (
        <ShareModal
          open={modalOpen}
          onCancel={() => setModalOpen(false)}
          url={url}
          content={content}
        />
      )}
    </>
  );
};

export default ShareButton;
