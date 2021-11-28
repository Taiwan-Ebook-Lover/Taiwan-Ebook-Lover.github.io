import { BookstoreEnum } from '@customTypes/bookstore';
import useSWR from 'swr';

import fetcher from './fetcher';

export const bookstoresUrl = `${process.env.REACT_APP_API_BASE_URL}/v1/bookstores`;

export interface BookstoreData {
  id: BookstoreEnum;
  displayName: string;
  website: string;
  isOnline: boolean;
  status: string;
}

export type useBookstoresResult = {
  bookstores?: Array<BookstoreData>;
  isLoading: boolean;
  error?: Record<string, unknown>;
};

const useBookstores = (): useBookstoresResult => {
  const { data, error } = useSWR<Array<BookstoreData>, Record<string, unknown>>(
    bookstoresUrl,
    fetcher,
  );

  return {
    bookstores: data,
    isLoading: !error && !data,
    error,
  };
};

export default useBookstores;
