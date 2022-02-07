import FullSizeLoading from '@components/FullSizeLoading';
import { FunctionComponent, Suspense } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Routes from './routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 3600000, // 1 hour
      retry: 2,
    },
  },
});

const App: FunctionComponent = () => {
  const { status } = useThemeSwitcher();

  if (status !== 'loaded') return null;

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Suspense fallback={<FullSizeLoading />}>
            <Routes />
          </Suspense>
        </BrowserRouter>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
