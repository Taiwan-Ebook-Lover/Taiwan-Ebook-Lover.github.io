import { BookstoreEnum } from '@customTypes/bookstore';
import { ErrorType } from '@customTypes/common';
import { useQuery } from 'react-query';

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
  error?: ErrorType | null;
};

const useBookstores = (): useBookstoresResult => {
  const { data, isLoading, error } = useQuery<Array<BookstoreData>, ErrorType>(
    'bookstores',
    async () => {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/v1/bookstores`);
      if (!response.ok) {
        throw { message: '暫時無法取得書店列表。' };
      }
      return response.json();
    },
  );

  return {
    bookstores: data,
    isLoading,
    error,
  };
};

export default useBookstores;
