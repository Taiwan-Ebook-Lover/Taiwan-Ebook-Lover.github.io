import { QueryStringInterface } from '@customTypes/common';
import qs, { ParseOptions, StringifyOptions } from 'query-string';

export type arrayFormatType =
  | 'bracket'
  | 'index'
  | 'comma'
  | 'separator'
  | 'bracket-separator'
  | 'none';

export const fixedEncode = (urlSearch: string): string => {
  return urlSearch.replace(/%5B/g, '[').replace(/%5D/g, ']').replace(/%2C/g, ',');
};

export const qsClean = (urlSearch: string): string => {
  return fixedEncode(qs.pick(urlSearch, ['bookstores[]', 'q', 'order']));
};

export const qsParse = (
  urlSearch: string,
  options: ParseOptions = { arrayFormat: 'bracket-separator', arrayFormatSeparator: ',' },
): QueryStringInterface => {
  return qs.parse(qsClean(urlSearch), options);
};

export const qsStringify = (
  urlSearchObj: QueryStringInterface,
  options: StringifyOptions = { arrayFormat: 'bracket-separator', arrayFormatSeparator: ',' },
): string => {
  return qsClean(qs.stringify(urlSearchObj, options));
};

export const qsExcludeOrder = (urlSearch: string): string => {
  return qs.exclude(urlSearch, ['order']);
};
