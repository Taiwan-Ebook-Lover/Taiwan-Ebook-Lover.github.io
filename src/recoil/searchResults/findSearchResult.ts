import { SearchResult } from '@api/useBooksSearch';
import { BookstoreEnum } from '@customTypes/bookstore';
import _ from 'lodash';
import { selectorFamily } from 'recoil';

import searchResults from './atom';

/* eslint-disable indent */
const findSearchResult = selectorFamily<SearchResult | undefined, BookstoreEnum | undefined>({
  key: 'findSearchResult',
  get:
    (bookstore) =>
    ({ get }) =>
      _.find(get(searchResults), (result) => result.bookstore.id === bookstore),
});
/* eslint-enable indent */

export default findSearchResult;
