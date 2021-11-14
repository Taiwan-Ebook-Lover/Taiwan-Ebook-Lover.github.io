import { SearchResult } from '@api/useBooksSearch';
import { atom } from 'recoil';

const searchResults = atom<Array<SearchResult>>({
  key: 'searchResults',
  default: [],
});

export default searchResults;
