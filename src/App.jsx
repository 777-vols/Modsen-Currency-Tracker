import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import ErrorBoundary from '@components/ErrorBoundary';
import Loading from '@components/Loading';
import { ThemeProvider } from 'styled-components';

const Layout = lazy(() => import('@components/Layout'));

function App() {
  const theme = useSelector((state) => state.themes.currentTheme);
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Layout />
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
