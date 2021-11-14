import { BookstoreData } from '@api/useBookstores';
import { ErrorType } from '@customTypes/common';
import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { qsStringify } from '@utils/url/queryString';

export interface Book {
  id: string;
  thumbnail: string;
  title: string;
  link: string;
  priceCurrency: string;
  price: number;
  about: string;
  authors: Array<string>;
}

export interface SearchResult {
  bookstore: BookstoreData;
  isOkay: boolean;
  status: string;
  processTime: number;
  books: Array<Book>;
  quantity: number;
}

export interface SearchData {
  id: string;
  keywords: string;
  searchDateTime: string;
  processTime: number;
  totalQuantity: number;
  apiVersion: string;
  userAgent: Record<string, unknown>;
  results: Array<SearchResult>;
}

export type useBooksResult = {
  searchResult?: SearchData;
  isLoading: boolean;
  error?: ErrorType | null;
};

const qsRegex = new RegExp(/^\?/);
export const booksSearchUrl = `${process.env.REACT_APP_API_BASE_URL}/v1/searches/`;

const useBooksSearch = (params: string): useBooksResult => {
  const client = useQueryClient();
  if (!params) {
    return {
      isLoading: false,
      error: { message: '缺少必要搜尋條件（關鍵字 or 書店）。' },
    };
  }

  const isID = !qsRegex.test(params);
  const { data, isLoading, error } = useQuery<SearchData, ErrorType>(
    ['search', params],
    async () => {
      const response = await fetch(`${booksSearchUrl}${params}`, {
        method: isID ? 'GET' : 'POST',
      });
      if (!response.ok) {
        throw { message: 'oops！搜尋出了點問題，請稍後再試。' };
      }
      return response.json();
    },
  );

  useEffect(() => {
    if (data && isID) {
      const bookstores = data.results.map((result) => result.bookstore.id);
      const queryKey = `?${qsStringify(
        { bookstores, q: data.keywords },
        { arrayFormat: 'bracket' },
      )}`;
      client.setQueryData(['search', queryKey], data);
    }
    if (data && !isID) client.setQueryData(['search', data.id], data);
  }, [data]);

  return {
    searchResult: data,
    isLoading,
    error,
  };
};

export default useBooksSearch;
