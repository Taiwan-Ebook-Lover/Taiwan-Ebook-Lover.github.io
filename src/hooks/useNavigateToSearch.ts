import booksOrderBy from '@recoil/booksOrderBy';
import bookstoreKeyword from '@recoil/bookstoreKeyword';
import bookstoresFilter from '@recoil/bookstoresFilter';
import { qsStringify } from '@utils/url/queryString';
import { message } from 'antd';
import { isEmpty } from 'lodash-es';
import { useNavigate } from 'react-router-dom';
import { useRecoilCallback } from 'recoil';

export interface UseNavigateToSearchInterface {
  (): () => void;
}

const useNavigateToSearch: UseNavigateToSearchInterface = () => {
  const navigate = useNavigate();

  const onSearch = useRecoilCallback(
    ({ snapshot }) =>
      () => {
        const keyword = snapshot.getLoadable(bookstoreKeyword).contents;
        const filter = snapshot.getLoadable(bookstoresFilter).contents;
        const order = snapshot.getLoadable(booksOrderBy).contents;

        if (isEmpty(keyword)) return;
        if (isEmpty(filter)) {
          message.warning('請選擇至少一家書店。');
          return;
        }
        const queryString = qsStringify({ q: keyword, bookstores: filter, order });
        navigate(`/searches?${queryString}`);
      },
    [],
  );

  return onSearch;
};

export default useNavigateToSearch;
