type FetcherType = <T>(input: RequestInfo, init?: RequestInit) => Promise<T>;

const fetcher: FetcherType = (input, init) =>
  fetch(input, init).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });

export default fetcher;
