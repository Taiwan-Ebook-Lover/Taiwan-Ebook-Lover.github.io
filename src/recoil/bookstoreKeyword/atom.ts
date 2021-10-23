import { atom } from 'recoil';

const bookstoreKeyword = atom<string>({
  key: 'bookstoreKeyword',
  default: '',
});

export default bookstoreKeyword;
