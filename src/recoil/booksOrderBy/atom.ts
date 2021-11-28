import { atom } from 'recoil';
import { OrderByEnum } from '@customTypes/searchOptions';

const booksOrderBy = atom<OrderByEnum>({
  key: 'booksOrderBy',
  default: OrderByEnum.DEFAULT,
});

export default booksOrderBy;
