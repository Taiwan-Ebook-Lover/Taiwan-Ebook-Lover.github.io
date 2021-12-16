import { useCallback } from 'react';

const useCopy = (text: string): (() => void) => {
  const copyToClipboard = useCallback(() => {
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-2vw';
    document.body.appendChild(el);
    const selection = document.getSelection();

    if (selection) {
      const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);

      if (selected) {
        selection.removeAllRanges();
        selection.addRange(selected);
      }
    }
  }, [text]);

  return copyToClipboard;
};

export default useCopy;
