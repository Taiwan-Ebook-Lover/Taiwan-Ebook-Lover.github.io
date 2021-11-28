import booksOrderBy from '@recoil/booksOrderBy';
import bookstoreKeyword from '@recoil/bookstoreKeyword';
import bookstoresFilter from '@recoil/bookstoresFilter';
import { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';

const Search: FunctionComponent = () => {
  const keyword = useRecoilValue(bookstoreKeyword);
  const filter = useRecoilValue(bookstoresFilter);
  const order = useRecoilValue(booksOrderBy);

  return (
    <div>
      <p>Search Page</p>
      <p>{keyword || '-'}</p>
      <p>{filter.join(' | ')}</p>
      <p>{order}</p>
    </div>
  );
};

export default Search;
