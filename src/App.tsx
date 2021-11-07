import { LoadingOutlined } from '@ant-design/icons';
import Box from '@components/Box';
import Routes from '@routes';
import { Suspense } from 'react';
import { FunctionComponent } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 3600000, // 1 hour
      retry: 2,
    },
  },
});

const SuspenseLoading: FunctionComponent = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <LoadingOutlined style={{ fontSize: 48 }} />
      <Box mt="1rem">Loading...</Box>
    </Box>
  );
};

const App: FunctionComponent = () => {
  const { status } = useThemeSwitcher();

  if (status !== 'loaded') return null;

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Suspense fallback={<SuspenseLoading />}>
            <Routes />
          </Suspense>
        </BrowserRouter>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
