// Ref: https://www.benmvp.com/blog/copy-to-clipboard-react-custom-hook/
import { useCallback, useEffect, useState } from 'react';

export type CopyStatus = 'inactive' | 'copied' | 'failed';

const useCopyToClipboard = (text: string, notifyTimeout = 2500): [() => void, CopyStatus] => {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('inactive');

  const copy = useCallback(() => {
    navigator.clipboard.writeText(text).then(
      () => setCopyStatus('copied'),
      () => setCopyStatus('failed'),
    );
  }, [text]);

  useEffect(() => {
    if (copyStatus === 'inactive') {
      return;
    }

    const timeoutId = setTimeout(() => setCopyStatus('inactive'), notifyTimeout);

    return () => clearTimeout(timeoutId);
  }, [copyStatus]);

  return [copy, copyStatus];
};

export default useCopyToClipboard;
