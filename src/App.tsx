import { LoadingOutlined } from '@ant-design/icons';
import { Box } from '@components/Box';
import Routes from '@routes';
import { Suspense } from 'react';
import { FunctionComponent } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { BrowserRouter } from 'react-router-dom';

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
    <BrowserRouter>
      <Suspense fallback={<SuspenseLoading />}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
