import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import keywordAtom from '@recoil/bookstoreKeyword';
import { Button, Input } from 'antd';
import { FunctionComponent } from 'react';
import { useRecoilState } from 'recoil';

export interface KeywordInputProps {
  onSubmit?: () => void;
}

const KeywordInput: FunctionComponent<KeywordInputProps> = ({ onSubmit }) => {
  const [keyword, setKeyword] = useRecoilState(keywordAtom);

  return (
    <Input
      size="large"
      placeholder="搜尋您想比價的電子書名關鍵字或 ISBN"
      style={{
        boxShadow: '0px 0.1rem 0.1rem rgba(0, 0, 0, 0.1)',
        maxWidth: '50rem',
        paddingLeft: '1.2rem',
        paddingRight: '1.2rem',
      }}
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      suffix={
        onSubmit ? (
          <Button
            type="link"
            icon={<FontAwesomeIcon icon={faSearch} />}
            size="small"
            onClick={onSubmit}
          />
        ) : null
      }
      onPressEnter={onSubmit}
    />
  );
};

export default KeywordInput;
