import { SearchOutlined } from '@ant-design/icons';
import keywordAtom from '@recoil/bookstoreKeyword';
import { Button, Input } from 'antd';
import { FunctionComponent } from 'react';
import { useRecoilState } from 'recoil';

export interface KeywordInputProps {
  onSubmit?: () => void;
}

export const KeywordInput: FunctionComponent<KeywordInputProps> = ({ onSubmit }) => {
  const [keyword, setKeyword] = useRecoilState(keywordAtom);

  return (
    <Input
      size="large"
      placeholder="搜尋您想比價的電子書名關鍵字或 ISBN"
      style={{
        boxShadow: '0px 0.1rem 0.1rem rgba(0, 0, 0, 0.3)',
        maxWidth: '50rem',
        padding: '0.8rem 1.2rem',
      }}
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      suffix={
        onSubmit ? (
          <Button type="link" icon={<SearchOutlined />} size="small" onClick={onSubmit} />
        ) : null
      }
      onPressEnter={onSubmit}
    />
  );
};