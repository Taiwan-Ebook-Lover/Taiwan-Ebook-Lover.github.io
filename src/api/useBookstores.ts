import useSWR from 'swr';
import fetcher from './fetcher';

export interface BookstoreData {
  id: BookstoreType;
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
    `${process.env.REACT_APP_API_BASE_URL}/v1/bookstores`,
    fetcher,
  );

  return {
    bookstores: data,
    isLoading: !error && !data,
    error,
  };
};

export default useBookstores;
