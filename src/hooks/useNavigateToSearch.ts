import booksOrderBy from '@recoil/booksOrderBy';
import bookstoreKeyword from '@recoil/bookstoreKeyword';
import bookstoresFilter from '@recoil/bookstoresFilter';
import { qsStringify } from '@utils/url/queryString';
import { message } from 'antd';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import { useRecoilCallback } from 'recoil';

export interface useNavigateToSearch {
  (): () => void;
}

const useNavigateToSearch: useNavigateToSearch = () => {
  const navigate = useNavigate();

  const onSearch = useRecoilCallback(
    ({ snapshot }) =>
      () => {
        const keyword = snapshot.getLoadable(bookstoreKeyword).contents;
        const filter = snapshot.getLoadable(bookstoresFilter).contents;
        const order = snapshot.getLoadable(booksOrderBy).contents;

        if (_.isEmpty(keyword)) return;
        if (_.isEmpty(filter)) {
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
