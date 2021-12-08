import { OrderByEnum } from '@customTypes/searchOptions';
import { atom } from 'recoil';

const booksOrderBy = atom<OrderByEnum>({
  key: 'booksOrderBy',
  default: OrderByEnum.DEFAULT,
});

export default booksOrderBy;
